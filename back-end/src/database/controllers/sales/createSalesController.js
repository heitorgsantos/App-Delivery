const { createSalesService } = require("../../services/sales/createSalesService");

module.exports = async (req, res, next) => {
  try {
    const { user_id, seller_id, total_price, delivery_addres, delivery_number, sale_date, status_sale, products } = req.body;
      const create = await createSalesService(req.body);

    return res.status(201).json(create);
  } catch (error) {
    return next(error);
  }
};
