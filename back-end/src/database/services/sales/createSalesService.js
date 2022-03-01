const { sale, salesProducts, user } = require('../../models/index');
const constructorError = require('../../utils/constructorError');
const { schemaSales } = require('../../utils/joiValidations');

const createSalesService = async (...input) => {
  const { user_id, seller_id, total_price, delivery_address, delivery_number, sale_date, status_sale, products } = input[0];
  const saleInput = { user_id, seller_id, total_price, delivery_address, delivery_number, sale_date, status_sale };

  const findUser = await user.findOne({ where: { id: user_id }});
  if (!findUser) throw constructorError(404, 'User not found');

  const findSeller = await user.findOne({ where: { id: seller_id }});
  if (!findSeller) throw constructorError(404, 'Seller not found');
  //console.log(findSeller);

  const { error } = schemaSales.validate(saleInput);
  if(error) throw constructorError(400, error.message);
  console.log(saleInput)

  const createSales = await sale.create(saleInput);

  return createSales;
};

module.exports = {
  createSalesService,
};
