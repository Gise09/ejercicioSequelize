module.exports = (sequelize, DataTypes) => {
    let alias = "Actor";
    let cols = {
        id : {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        first_name : {
            type: DataTypes.STRING(100)
        },
        last_name : {
            type: DataTypes.STRING(100)
        },
        rating : {
            type: DataTypes.DECIMAL(3.1).UNSIGNED
        },
        favorite_movie_id : {
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
        tableName : 'actors'
    };

    const Actor = sequelize.define(alias, cols, config);

    Actor.associate = function(models) {
        Actor.belongsToMany(models.Pelicula, {
            as: "peliculas",
            through: "actor_movie",
            foreignKey: "actor_id",
            otherKey: "movie_id"
        });
    }


    return Actor
}
