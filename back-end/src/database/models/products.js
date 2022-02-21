const products = (sequelize, DataTypes) => {
  const product = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    url_image: DataTypes.STRING,
  });
  return product;
}

module.exports = products;
