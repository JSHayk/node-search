import { hexId } from "../validations/ProductValidation.js";

const checkHexIdValidation = (req, res, next) => {
  const { id } = req.params;
  if (!id.match(hexId) || id.length !== 24) return res.sendStatus(404);
  next();
};

export default {
  checkHexIdValidation,
};
