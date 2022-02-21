const user = (sequelize, DataTypes) => {
  const users = sequelize.define('Users', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
  })
  return users;
}

module.exports = user;

