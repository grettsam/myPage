const { response, request } = require("express");

const home = (req, res) => {
    res.render("home", {
        dark: false,
        pageName: "Sebastian Infante",
        bgimg: "/assets/pic.png",
        titulo: "Hey!, Soy Sebastián Infante",
        subtitulo: "Desarrollador Web",
    });
};
const zyrapp = (req, res) => {
    res.render("portafolio", {
        dark: false,
        pageName: "Zyrapp - Sebastian Infante",
        bgcolor: "#fbfbee;",
        bgimg: "/assets/proyects/zyrapp/zyrapp.jpg",
        titulo: "Proyecto Zyrapp",
        subtitulo: "HTML | CSS | JS | NODEJS | EXPRESS |HBS | MYSQL",
        descripcion: "Proyecto multiplataforma y multiusuario, dirigido a los habitantes del gran Concepción que mantienen un interés en común sobre las plantas, y todo lo relacionado con ella, que les permitirá expandir sus conocimientos y técnicas de cultivo. Por otro lado, los viveros y centros de cultivos podrán adquirir reportes sobre lo más buscando en el momento sobre plantas, para poder aumentar su catálogo de productos y ventas.",
        primaryImg: "/assets/proyects/zyrapp/Dashboard.png",
        secondaryImg: "/assets/proyects/zyrapp/informes.png",
        repositorio: "https://github.com/grettsam/Zyrapp"
    });
};
const emercorp = (req, res) => {
    res.render("portafolio", {
        dark: false,
        pageName: "Emercorp - Sebastian Infante",
        bgcolor: "#fff;",
        bgimg: "/assets/proyects/emercorp/emercorp.jpg",
        titulo: "Emercorp",
        subtitulo: "HTML | CSS | JS ",
        descripcion: "",
    });
};

const sushitaro = (req, res) => {
    res.render("portafolio", {
        dark: true,
        pageName: "Sushitaro - Sebastian Infante",
        bgcolor: "#000;",
        bgimg: "/assets/proyects/sushitaro/sushitaro.png",
        titulo: "Sushitaro",
        subtitulo: "HTML | CSS | JS ",
        descripcion: "",
    });
};

const error404 = (req = request, res = response) => {
    res.render("404", {
        pageName: "Error 404",
    });
};

module.exports = {
    error404,
    home,
    zyrapp,
    emercorp,
    sushitaro,
};