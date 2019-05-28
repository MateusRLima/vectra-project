module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        cpf: DataTypes.STRING,
        age: DataTypes.STRING,
        height: DataTypes.STRING,
        weight: DataTypes.STRING,
        imc: DataTypes.STRING,
    });

    return User;
}
