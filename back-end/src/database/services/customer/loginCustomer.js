const { product } = require('../../models/index');

// get all products

const getAllProducts = async () => {
  try {
    const products = await product.findAll();
    return products;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  getAllProducts,
};
