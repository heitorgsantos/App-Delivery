const { sale } = require('../../models/index');
const constructorError = require('../../utils/constructorError');

const findSalesSellerById = async (seller_id) => {
  console.log(seller_id);
  const findSalesSeller = await sale.findOne({ where: { id: seller_id }});
  console.log(findSalesSeller);

  if (!findSalesSeller) throw constructorError(404, 'Seller not found');
  return findSalesSeller;
}

module.exports = { findSalesSellerById };