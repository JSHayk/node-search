import {
  NO_PRODUCT,
  NO_PRODUCT_ITEM,
  SUCCESS_PRODUCT_ADD,
  SUCCESS_PRODUCT_FOUND,
} from "../const/Messages.js";
import ProductModel from "../models/ProductModel.js";

const getProduct = async (req, res) => {
  try {
    const product = await ProductModel.find({});
    if (!product) return res.sendStatus(403);
    res.json(product);
  } catch (err) {
    console.log(err);
  }
};

const getProductItem = async (req, res) => {
  try {
    const { id } = req.params;
    const productItem = await ProductModel.findById(id);
    if (!productItem) return res.sendStatus(403);
    res.json({
      message: SUCCESS_PRODUCT_FOUND,
      productItem,
    });
  } catch (err) {
    console.log(err);
  }
};

const addProduct = (req, res) => {
  try {
    const { name, price, model } = req.body;
    const newProduct = new ProductModel({
      name,
      price,
      model,
    });
    newProduct.save();
    res.send({
      message: SUCCESS_PRODUCT_ADD,
      productItem: newProduct,
    });
  } catch (err) {
    console.log(err);
  }
};

const searchProduct = async (req, res) => {
  try {
    const { q } = req.query;
    console.log(q, "question");
    if (!q) return res.sendStatus(404);
    const product = await ProductModel.find({});
    if (product.length === 0) return res.json({ message: NO_PRODUCT });
    const [searchItem] = product.filter((item) => {
      const name = item.name.toLowerCase();
      const searchVal = q.toLowerCase();
      return name.includes(searchVal);
    });
    if (!searchItem) return res.json({ messgae: NO_PRODUCT_ITEM });
    res.json(searchItem);
  } catch (err) {
    console.log(err);
  }
};

export default {
  getProduct,
  addProduct,
  getProductItem,
  searchProduct,
};
