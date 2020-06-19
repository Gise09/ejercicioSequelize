let db = require('../db/models');
const Pelicula = require('../db/models/Pelicula');
const moment = require('moment');

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
        db.Pelicula.findByPk(req.params.id, {
            include: [
                {
                    association: "genero"
                },
                {
                    association: "actores"
                }
            ]
        }).then((pelicula) => {
            if(!pelicula){
                return res.send("No hay película");
            }
            pelicula.release_date_formatted = moment(pelicula.release_date).format('DD/MM/YYYY');
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
    },

    crear: function(req, res) {
        db.Genero.findAll()
        .then(function(generos) {
            return res.render("crearPelicula", {generos});
        })
    },

    guardar: function(req, res) {
        db.Pelicula.create( {
            title: req.body.title,
            awards: req.body.awards,
            release_date: req.body.release_date,
            genre_id: req.body.genre,
            length: req.body.length
        } );

        return res.redirect("/movies");
    },

    edit: function(req, res) {
        let pedirPelicula = db.Pelicula.findByPk(req.params.id);
        let pedirGeneros = db.Genero.findAll();

        Promise.all([pedirPelicula, pedirGeneros])
            .then( function([pelicula, generos]) {
                res.render("editPelicula", {pelicula, generos});
            });
    },

    update: function(req, res){
        db.Pelicula.update( {
            title: req.body.title,
            awards: req.body.awards,
            release_date: req.body.release_date,
            genre_id: req.body.genre,
            length: req.body.length
        }, {
            where: {
                id: req.params.id
            }
        } );
        return res.redirect("/movies/detail/" + req.params.id);
    },

    delete: function(req, res) {
        db.Pelicula.destroy( {
            where: {
                id: req.params.id
            }
        } );
        return res.redirect("/movies");
    }

};

module.exports = peliculaController;