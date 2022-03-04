const { sale } = require('../../models/index');
const constructorError = require('../../utils/constructorError');

const findSalesByCustomerId = async (id) => {
  const find = await sale.findAll({ where: { user_id: id } });
  if (!find) throw constructorError(404, 'Invalid Id, try again!');

  return find
}

module.exports = {
  findSalesByCustomerId,
};
