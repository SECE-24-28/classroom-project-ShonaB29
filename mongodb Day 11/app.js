const express = require("express");
const connectDB = require("./src/config/db");

const app = express();
const port = 3000;

connectDB();
app.use(express.json());

const productRoutes = require("./src/routes/productRoutes");
app.use("/products", productRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
