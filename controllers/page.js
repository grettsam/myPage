const { response, request } = require("express");
const path = require("path");

const home = (req, res) => {
    res.render("home", {
        titulo: "Hey!, Soy Sebastián Infante",
        subtitulo: "Desarrollador Web",
    });
};

const error404 = (req = request, res = response) => {
    let path404 = path.join(__dirname, "../public/404.html");
    res.status(404).sendFile(path404);
};

module.exports = {
    error404,
    home,
};