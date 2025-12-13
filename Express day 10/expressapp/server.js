const app=require("express")(); 
const port = 7000;

app.get("/", (req, res) => {
    res.send("Hello, World!");
});
app.listen(port, () => {
    console.log("Server is running on http://localhost:${port}");
});