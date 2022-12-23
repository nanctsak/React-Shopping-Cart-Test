var express = require("express");
var router = express.Router();
var Product = require("./models/Product");

// GET all
router.get("/all", (req, res) => {
    Product.find().exec((err, data) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(data);
    });
});


module.exports = router;