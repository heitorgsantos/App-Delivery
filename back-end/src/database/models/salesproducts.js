const salesProduct = (sequelize, DataTypes) => {
  const saleProduct = sequelize.define('salesProduct', {
    quantity: DataTypes.INTEGER,
  },
  {tableName: 'SalesProducts'});

  saleProduct.associate = (models) => {
    saleProduct.belongsToMany(models.product,
      {
        foreignKey: 'product_id',
        otherKey: 'sale_id',
        through: saleProduct,
        as:product,
      } 
    ),
    saleProduct.belongsToMany(models.sale,
      {
        foreignKey: 'sale_id',
        otherKey: 'product_id',
        through: saleProduct,
        as: 'sales',

      }
    )
  }
  return saleProduct;

};

module.exports = salesProduct;
