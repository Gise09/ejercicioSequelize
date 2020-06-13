module.exports = (sequelize, DataTypes) => {
    let alias = "Actor";
    let cols = {
        id : {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            null: false,
            autoIncrement: true
        },
        first_name : {
            type: DataTypes.STRING(100),
            null: false
        },
        last_name : {
            type: DataTypes.STRING(100),
            null: false
        },
        rating : {
            type: DataTypes.DECIMAL(3.1).UNSIGNED,
            null: true
        },
        favorite_movie_id : {
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
            field: 'updated_at'
        }
    }
    let config = {
        tableName : 'actors'
    };

    const Actor = sequelize.define(alias, cols, config);
    return Actor
}
