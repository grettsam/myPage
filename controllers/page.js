const { response, request } = require("express");
const path = require("path");

const home = (req, res) => {
    res.render("home", {
        titulo: "Hey!, Soy Sebastián Infante",
        subtitulo: "Desarrollador Web",
    });
};

const error404 = (req = request, res = response) => {
    res.render("404")
};

module.exports = {
    error404,
    home,
};