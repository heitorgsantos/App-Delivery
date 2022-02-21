const sales = (sequelize, DataTypes) => {
  const sale = sequelize.define('Sales', {
    total_price: DataTypes.FLOAT,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING,
  })
  return sale;
}

module.exports = sales;
