const express = require("express");
const app = express();
const router = require("./routes/productRoute");
require("./config/dbConfig");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", router);

app.get("/", (req, res) => {
  res.json({
    status: "200",
    message: "hello testing",
  });
});

app.listen(4000, () => {
  console.log("Node server started at port 4000");
});
