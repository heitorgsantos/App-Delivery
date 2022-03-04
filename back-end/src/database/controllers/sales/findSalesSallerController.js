const { findSalesSellerById } = require('../../services/sales/findSalesSellerService');

module.exports = async(req, res, next) => {
  try {
    const { seller_id } = req.params;
    console.log(req.params, 'CONTROLLER -----');
    const find = await findSalesSellerById(seller_id);
    return res.status(200).json(find);
  } catch (error) {
    return next(error);
  };
};