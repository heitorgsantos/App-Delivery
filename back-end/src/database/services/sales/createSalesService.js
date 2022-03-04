const { sale, salesProduct, user } = require('../../models/index');
const constructorError = require('../../utils/constructorError');
const { schemaSales } = require('../../utils/joiValidations');

const createSalesService = async (...input) => {
  
  const { user_id, seller_id, total_price, delivery_address, delivery_number, products } = input[0];
  
  const status_sale = 'Pendente';
  
  const ts = Date.now();
  const sales_date = new Date(ts).toISOString();
  const firstSplit = sales_date.split('T');;
  const secondSplit = firstSplit[1].split('.');
  const sale_date = `${firstSplit[0]} ${secondSplit[0]}`;

  const saleInput = { user_id, seller_id, total_price, delivery_address, delivery_number, sale_date, status_sale };


  const findUser = await user.findOne({ where: { id: user_id }});
  if (!findUser) throw constructorError(404, 'User not found');

  const findSeller = await user.findOne({ where: { id: seller_id }});
  if (!findSeller) throw constructorError(404, 'Seller not found');

  const { error } = schemaSales.validate(saleInput);
  if(error) throw constructorError(400, error.message);

  const createSales = await sale.create(saleInput);

  for(let i = 0 ; i < products.length; i += 1) {
    await salesProduct.create({
      product_id: products[i].product_id,
      sale_id: createSales.id,
      quantity: products[i].quatity,
    });
  }

  return createSales;
};

module.exports = {
  createSalesService,
};
