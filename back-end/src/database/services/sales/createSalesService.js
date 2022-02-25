const { sales, salesProducts } = require('../../models/index');
const { schemaSales } = require('../../utils/joiValidations');

const createSalesService = async (...input) => {
  const { user_id, seller_id, total_price, delivery_addres, delivery_number, sale_date, status, products } = input[0];
  
  // const input.includes(())
  const { error, value } = schemaSales.validate({ user_id, seller_id, total_price, delivery_addres, delivery_number, sale_date, status, products });
  console.log(error, 'ERORRR')
  console.log('-------------------' )
  console.log(value), 'error VALUE';

  if (error) throw constructorError(400, 'Bora endoidar!');

  const createSales = await sales.create(input);

  return createSales;

};

module.exports = {
  createSalesService,
};
// { "user_id": 1, "seller_id": 3, "total_pricequatity": 31.20, "delivery_addres": "rua são joão", "delivery_number": "18", "sale_date": "25/02/2022", "status": "", [ { "product_id": 1, "quatity": 2 }, { "product_id": 6, "quatity": 2 } ] } 