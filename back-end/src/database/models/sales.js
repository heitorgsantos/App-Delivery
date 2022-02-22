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
    sale.hasMany(models.users,
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
