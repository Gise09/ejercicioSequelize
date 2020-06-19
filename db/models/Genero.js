module.exports = (sequelize, DataTypes) => {
    let alias = "Genero";
    let cols = {
        id : {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name : {
            type: DataTypes.STRING(100),
        },
        ranking : {
            type: DataTypes.INTEGER.UNSIGNED
        },
        active : {
            type: DataTypes.INTEGER
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
        tableName : "genres"
    };

    const Genero = sequelize.define(alias, cols, config);

    Genero.associate = function (models) {
        Genero.hasMany(models.Pelicula, {
            as: "peliculas",
            foreignKey: "genre_id"
        });
    }
    return Genero;
}

