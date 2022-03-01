const sales = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale', {
    total_price: DataTypes.DECIMAL(10, 2),
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status_sale: DataTypes.STRING,
  },
  {tableName: 'sales'})

  sale.associate = (models) => {
    sale.belongsTo(models.user,
      {
        foreignKey: 'id',
        as: 'user',
      }
    );
    sale.belongsTo(models.user,
      {
        foreignKey: 'id',
        as: 'seller',
      }
    );
  }
  return sale;
}

module.exports = sales;
