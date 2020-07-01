let db = require("../db/models");

let generoController = {
    detail: function(req, res){
        db.Genero.findByPk(req.params.genre_id, {
            include: [
                {
                    association: "peliculas"
                }
            ]
        }).then((genero) => {
            return res.render("detalleGenero", { genero });
        });
    },
    

};

module.exports = generoController;

