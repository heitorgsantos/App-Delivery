const { sale } = require('../../models/index');
const constructorError = require('../../utils/constructorError');

const findSalesByClientId = async (id) => {
  const find = await sale.findByPk(id);
  if (!find) throw constructorError(404, 'Invalid Id, try again!');

  return find
}

module.exports = {
  findSalesByClientId,
};
