const { findSalesByClientId } = require('../../services/sales/findSalesByClientId');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    // const { name } = req.body;
    const findClient = await findSalesByClientId(id);
    return res.status(200).json(findClient);
  } catch (error) {
    return next(error);
  };
};

