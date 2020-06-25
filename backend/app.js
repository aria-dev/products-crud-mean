const express = require("express");
const app = express();
var cors = require('cors');
require('dotenv').config()
const mongoose = require("mongoose");
const dbconfig = require("./config/db.config");
const productModel = require('./models/product.model')(mongoose);
const bodyparser = require("body-parser");
const productA = new productModel.Product({
    name: "Product name",
    description: "Product description"
});

app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());

app.get("/products", (req, res) => {
    res.send(JSON.stringify(productA));
});

app.post("/addProduct", bodyparser.json(), (req, res) => {
    console.log(req.body);
    res.send(req.body);
});


app.listen(process.env.PORT || 8080, function(){
    console.log("...node server running");
    dbconfig.init();
});