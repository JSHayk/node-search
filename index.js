import dotenv from "dotenv";
dotenv.config();
import express from "express";
import config from "./config.json" assert { type: "json" };
import connectMongo from "./helpers/connectMongo.js";
// Importing Routes.
import ProductRouter from "./routes/ProductRouter.js";

const app = express();
app.use(express.json());

// Swtich Routes.
app.use(ProductRouter);

// setting config.
connectMongo(config.db.url);
const port = process.env.LISTEN_PORT || 3000;
app.listen(port, () => {
  console.log(`Server has listened on port ${port}`);
});
