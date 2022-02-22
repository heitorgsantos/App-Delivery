const user = (sequelize, DataTypes) => {
  const users = sequelize.define('user', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {tableName: 'users'});

<<<<<<< HEAD
  users.associate = (models) => {
    users.hasMany(models.sale,
      {
        foreignKey: 'user_id',
        otherKey: 'seller_id',
        through: users,
        as: 'sales',
      }  
    )
  }
=======
  // users.associate = (models) => {
  //   users.hasMany(models.sales,
  //     {
  //       foreignKey: 'user_id',
  //       otherKey: 'seller_id',
  //       through: users,
  //       as: 'sales',
  //     }  
  //   )
  // }
>>>>>>> 2a16c75c40c64fb1b4cf3a0c157e1ffc3897eea2
  return users;
}

module.exports = user;

