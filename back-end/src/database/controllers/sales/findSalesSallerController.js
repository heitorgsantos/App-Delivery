const { findSalesSallerById } = require('../../services/sales/findSalesSellerService');

module.exports = async(req, res, next) => {
  try {
    const {seller_id} = req.body
    const find = await findSalesSallerById(seller_id);
    return res.status(201).json(find);
  } catch (error) {
    return next(error);
  }
}