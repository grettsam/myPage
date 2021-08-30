const { response, request } = require("express");

const home = (req, res) => {
    res.render("home", {
        dark: false,
        pageName: "Sebastian Infante",
        bgimg: "/assets/pic.png",
        titulo: "Hola! Soy Sebastián Infante",
        subtitulo: "Desarrollador Web",
    });
};
const zyrapp = (req, res) => {
    res.render("portafolio", {
        dark: false,
        pageName: "Zyrapp - Sebastian Infante",
        bgcolor: "#fbfbee;",
        bgimg: "/assets/proyects/zyrapp/logo.svg",
        titulo: "Proyecto Zyrapp",
        subtitulo: "HTML | CSS | JS | NODEJS | EXPRESS |HBS | MYSQL",
        descripcion: "Proyecto multiplataforma y multiusuario, dirigido a los habitantes del gran Concepción que mantienen un interés en común sobre las plantas, y todo lo relacionado con ella, que les permitirá expandir sus conocimientos y técnicas de cultivo. Por otro lado, los viveros y centros de cultivos podrán adquirir reportes sobre lo más buscando en el momento sobre plantas, para poder aumentar su catálogo de productos y ventas. Actualmente el proyecto se mantiene en desarrollo, tanto la aplicación web como la móvil.",
        primaryImg: "/assets/proyects/zyrapp/m1.png",
        secondaryImg: "/assets/proyects/zyrapp/m2.png",
        imagenes: [
            "/assets/proyects/zyrapp/p2.jpg",
            "/assets/proyects/zyrapp/p3.jpg",
            "/assets/proyects/zyrapp/p4.jpg",
            "/assets/proyects/zyrapp/p5.jpg",
            "/assets/proyects/zyrapp/p6.jpg",
            "/assets/proyects/zyrapp/p7.jpg",
            "/assets/proyects/zyrapp/p8.jpg",
            "/assets/proyects/zyrapp/p9.jpg",
        ],
        repositorio: "https://github.com/grettsam/Zyrapp",
    });
};
const emercorp = (req, res) => {
    res.render("portafolio", {
        dark: false,
        pageName: "Descubre San Pedro de Atacama - Sebastian Infante",
        bgcolor: "#fff;",
        bgimg: "",
        titulo: "Descubre San Pedro de Atacama",
        subtitulo: "HTML | CSS | JS ",
        descripcion: "",
    });
};

const sushitaro = (req, res) => {
    res.render("portafolio", {
        dark: false,
        pageName: "PUCV - DAD - Sebastian Infante",
        bgcolor: "#fff;",
        bgimg: "",
        titulo: "Dirección de Análisis Institucional y Desarrollo Estratégico",
        subtitulo: "HTML | CSS | JS | WORDPRESS",
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