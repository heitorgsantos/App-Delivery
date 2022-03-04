const { sale } = require('../../models/index');
const constructorError = require('../../utils/constructorError');

const findSalesSellerById = async (seller_id) => {

  const findSalesSeller = await sale.findAll({ where: { seller_id: seller_id }})
  if (!findSalesSeller) throw constructorError(404, 'Seller not found');
  return findSalesSeller;
}

module.exports = { findSalesSellerById };