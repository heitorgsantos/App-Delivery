const salesProduct = (sequelize, DataTypes) => {
  const saleProduct = sequelize.define('SalesProducts', {
    quantity: DataTypes.INTEGER,
  });
  return saleProduct;

};

module.exports = salesProduct;
