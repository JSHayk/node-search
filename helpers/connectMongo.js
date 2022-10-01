import mongoose from "mongoose";

const connectMongo = async (url, message) => {
  try {
    await mongoose.connect(url);
    console.log(message || `Mongo is connected`);
  } catch (err) {
    console.log(err);
  }
};

export default connectMongo;
