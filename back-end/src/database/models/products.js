const products = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    url_image: DataTypes.STRING,
  },
  {tableName: 'Products'});
  return product;
}

module.exports = products;
