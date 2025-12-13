const express=require("express");
const app=express();
const port=3000;

const productRoutes=require("./src/routes/productRoutes");
app.use("/products",productRoutes);
app.listen(port,()=> {
    console.log("expressapp1 listening at http://localhost:${port}");
});

module.exports=app;