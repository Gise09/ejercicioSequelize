module.exports = (sequelize, DataTypes) => {
    let alias = "Genero";
    let cols = {
        id : {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            null: false,
            autoIncrement: true
        },
        name : {
            type: DataTypes.STRING(100),
            null: false
        },
        ranking : {
            type: DataTypes.INTEGER.UNSIGNED,
            null: false,
        },
        active : {
            type: DataTypes.INTEGER,
            null: false
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
        tableName : "genres"
    };

    const Genero = sequelize.define(alias, cols, config);
    return Genero
}

