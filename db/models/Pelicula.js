const { UnavailableForLegalReasons } = require("http-errors");

module.exports = (sequelize, DataTypes) => {
    let alias = "Pelicula";
    let cols = {
        id : {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            null: false,
            autoIncrement: true
        },
        title : {
            type: DataTypes.STRING(500),
            null: false
        },
        director_id : {
            type: DataTypes.INTEGER.UNSIGNED,
            null: true            
        },
        awards : {
            type: DataTypes.INTEGER.UNSIGNED,
            null: false,
            /*defaultValue: 0*/
        },
        revenue : {
            type: DataTypes.STRING(255),
            null: false
        },
        release_date : {
            type: DataTypes.DATE,
            null: false
        },
        length : {
            type: DataTypes.INTEGER.UNSIGNED,
            null: true
        },
        genre_id : {
            type: DataTypes.INTEGER.UNSIGNED,
            null: true
        },
        created_at : {
            type: DataTypes.DATE,
            null: true,
            field: 'created_at'
        },
        updated_at : {
            type: DataTypes.DATE,
            null: true,
            field: 'updated_at',
        }
    }
    let config = {
        tableName : "movies",
        timestamps : false
    };

    const Pelicula = sequelize.define(alias, cols, config);
    return Pelicula
}
