const user = (sequelize, DataTypes) => {
  const users = sequelize.define('user', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {tableName: 'users'});

  user.associate = (models) => {
    user.belongsToMany(models.sale,
      {
        foreignKey: 'user_id',
        otherKey: 'seller_id',
        through: users,
        as: 'sales',
      }  
    )
  }
  return users;
}

module.exports = user;

