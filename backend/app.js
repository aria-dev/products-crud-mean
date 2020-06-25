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
        productModel.Product.find(function(err, result){
        if (err) { console.log(err); return; }
        res.send(result);
    });
});

app.post("/addProduct", bodyparser.json(), (req, res) => {

    const product = new productModel.Product({
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        size: req.body.size,
        stock: req.body.stock,
        description: req.body.description
    });

    product.save(function (err) {
        if (err) { console.log(err); return; }
        console.log(">>>product added successfully!");
        res.send(JSON.stringify(product));
    });

});


app.listen(process.env.PORT || 8080, function(){
    console.log("...node server running");
    dbconfig.init();
});