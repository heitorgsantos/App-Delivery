const sales = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale', {
    total_price: DataTypes.FLOAT,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING,
  },
  {tableName: 'Sales'})

  sale.associate = (models) => {
    sale.belongsTo(models.Users,
      {
        foreignKey: 'user_id',
        otherKey: 'seller_id',
        through: sale,
        as: 'user',
      }
    )
  }
  return sale;
}

module.exports = sales;
