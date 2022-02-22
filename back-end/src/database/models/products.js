const products = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    url_image: DataTypes.STRING,
  },
  {tableName: 'products'});
  return product;
}

module.exports = products;
