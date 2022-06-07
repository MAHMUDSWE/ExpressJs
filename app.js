const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoute = require("./routes/users.route");
const productsRoute = require("./routes/products.route");
const homeRoute = require("./routes/home.route");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());

app.use("/api/users", userRoute);
app.use("/api/products", productsRoute);
app.use(homeRoute);

app.use((req, res, next)=>{
    res.status(400).json({
        message: "Error! Page not found",
    });
});

module.exports = app;