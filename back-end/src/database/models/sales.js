const sales = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale', {
    total_price: DataTypes.FLOAT,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING,
  },
  {tableName: 'sales'})

  sale.associate = (models) => {
<<<<<<< HEAD
    sale.belongsTo(models.user,
=======
    sale.hasMany(models.users,
>>>>>>> 2a16c75c40c64fb1b4cf3a0c157e1ffc3897eea2
      {
        foreignKey: 'user_id',
        otherKey: 'seller_id',
        through: sale,
        as: 'users',
      }
    )
  }
  return sale;
}

module.exports = sales;
