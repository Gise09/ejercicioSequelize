module.exports = (sequelize, DataTypes) => {
    let alias = "Pelicula";
    let cols = {
        id : {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        title : {
            type: DataTypes.STRING(500)
        },
        director_id : {
            type: DataTypes.INTEGER.UNSIGNED
        },
        awards : {
            type: DataTypes.INTEGER.UNSIGNED
        },
        revenue : {
            type: DataTypes.STRING(255)
        },
        release_date : {
            type: DataTypes.DATE
        },
        length : {
            type: DataTypes.INTEGER.UNSIGNED
        },
        genre_id : {
            type: DataTypes.INTEGER.UNSIGNED
        },
        createdAt : {
            type: DataTypes.DATE,
            field: 'createdAt'
        },
        updatedAt : {
            type: DataTypes.DATE,
            field: 'updatedAt'
        }
    }
    let config = {
        tableName : "movies"
    };

    const Pelicula = sequelize.define(alias, cols, config);

    Pelicula.associate = function(models){
        Pelicula.belongsTo(models.Genero, {
            as: "genero",
            foreignKey: "genre_id"
        });

        Pelicula.belongsToMany(models.Actor, {
            as: "actores",
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id"
        });
    }

    return Pelicula;
}
