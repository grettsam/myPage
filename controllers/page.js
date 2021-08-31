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
        subtitulo: "HTML | CSS | JS | NODEJS | EXPRESS | HBS | MYSQL",
        descripcion: "Proyecto multiplataforma y multiusuario, dirigido a los habitantes del gran Concepción que mantienen un interés en común sobre las plantas, y todo lo relacionado con ella, que les permitirá expandir sus conocimientos y técnicas de cultivo. Por otro lado, los viveros y centros de cultivos podrán adquirir reportes sobre lo más buscando en el momento sobre plantas, para poder aumentar su catálogo de productos y ventas. Actualmente el proyecto se mantiene en desarrollo, tanto la aplicación web como la móvil.",
        primaryImg: "/assets/proyects/zyrapp/m1.png",
        secondaryImg: "/assets/proyects/zyrapp/m2.png",
        repositorio: "https://github.com/grettsam/Zyrapp",
    });
};
const descubre = (req, res) => {
    res.render("portafolio", {
        dark: false,
        pageName: "Descubre San Pedro de Atacama - Sebastian Infante",
        bgcolor: "#fff;",
        bgimg: "/assets/proyects/descubre/logo.png",
        titulo: "Descubre San Pedro de Atacama",
        subtitulo: "HTML | CSS | JS ",
        descripcion: "Descubre San Pedro de Atacama nace con el objetivo de generar una guía completa de las actividades que se pueden encontrar en este lugar. Además, cuenta con catálogo de alojamientos, restaurantes y agencias de diseño, con lo cual el usuario puede estar al tanto de todo en sus vacaciones. Para el desarrollo de esta se utilizo la herramienta de Adobe Xd para generar su prototipo. Posteriormente se plasmo la idea utilizando html y css para generar las vistas. Actualmente esta aplicación se encuentra en desarrollo en su parte móvil.",
        primaryImg: "/assets/proyects/descubre/m1.jpg",
        secondaryImg: "/assets/proyects/descubre/m2.jpg",
    });
};

const pucvdad = (req, res) => {
    res.render("portafolio", {
        dark: false,
        pageName: "PUCV - DAD - Sebastian Infante",
        bgcolor: "#fff;",
        bgimg: "/assets/proyects/pucvDAD/logo.png",
        titulo: "Dirección de Análisis Institucional y Desarrollo Estratégico",
        subtitulo: "HTML | CSS | JS | WORDPRESS",
        descripcion: "La  Dirección de Análisis Institucional y Desarrollo Estratégico de la Pontificia Universidad Católica de Valparaíso solicito un sitio web en donde puedan subir su información de lo que realizan, links importantes y  sus estadísticas, por lo tanto se diseño un sitio web usando Wordpress. El objetivo de desarrollar el sitio web utilizando Wordpress fue que ellos necesitaban manejarla y actualizarla constantemente, pero solo algunos puntos como son las estadísticas que se muestran en ella, por lo tanto, se optó por utilizar dicho CMS para que los trabajadores puedan trabajar con ella. En el proyecto se utilizo Adobe Xd para su diseño y posterior a eso se plasmo la idea en wordpress.",
        primaryImg: "/assets/proyects/pucvDAD/p1.png",
        secondaryImg: "/assets/proyects/pucvDAD/p2.png",
    });
};

const error404 = (req = request, res = response) => {
    res.render("404", {
        pageName: "Error 404",
    });
};
const proximamente = (req = request, res = response) => {
    res.render("proximamente", {
        pageName: "Proximamente - Sitio aun en construcción",
    });
};


module.exports = {
    error404,
    home,
    zyrapp,
    descubre,
    proximamente,
    pucvdad,
};