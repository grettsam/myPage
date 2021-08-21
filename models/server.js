const express = require("express");
const cors = require("cors");
const hbs = require("hbs");
const path = require('path')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = "/api/usuarios";
        this.rutaPartials = path.join(__dirname + "/../views/partials")

        // Middlewares
        this.middlewares();

        // Rutas de mi app
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio publico
        this.app.use(express.static("public"));

        // hbs
        this.app.set("view engine", "hbs");
        hbs.registerPartials(this.rutaPartials);
    }

    routes() {
        this.app.use(this.usuariosPath, require("../routes/usuarios"));
        this.app.use("/", require("../routes/page"));
    }

    listen() {
        this.app.listen(this.port);
    }
}

module.exports = Server;