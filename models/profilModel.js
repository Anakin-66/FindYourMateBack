module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Profil', {
        inGameName: {
            type: DataTypes.STRING,
        },
    }
    );
}