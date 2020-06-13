let db = require('../db/models');
const Pelicula = require('../db/models/Pelicula');

let peliculaController = {
    list: function (req,res) {
        db.Pelicula.findAll({
            order: [
                ["title", "ASC"]
            ]
        }).then((peliculas) => {
            return res.render("listadoPeliculas", { peliculas });
        });        
    },

    detail: function (req, res){
        db.Pelicula.findByPk(req.params.id).then((pelicula) => {
            return res.render("detallePelicula", { pelicula });
        });
    },

    top5new: function (req, res) {
        db.Pelicula.findAll({
            order: [
                ["release_date", "DESC"]
            ],
            limit: 5
        }).then((top) => {
            return res.render("top5", { top })
        });
    },

    recommended: function (req, res) {
        db.Pelicula.findAll({
            where: {
                awards: {[db.Sequelize.Op.gte] : 3}
            },
            order: [
                ["title", "ASC"]
            ]
        }).then((recom) => {
            return res.render("recommended", { recom })
        });
    },

    search: function (req, res) {
        return res.render("search");
    },

    searchPost: function (req, res) {
        db.Pelicula.findAll({
            where: {
                title: {[db.Sequelize.Op.like] : '%' + req.body.search + '%'}
            },
            order: [
                ["title", "ASC"]
            ]
        }).then((resultados) => {
            return res.render("searchRdo", { resultados })
        }).catch((error) => {
            console.error(error);
        });
    }

};

module.exports = peliculaController;