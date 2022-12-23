const mongoose = require("mongoose");
const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;
const ProductSchema = new Schema(
    {
        _id: {
            type: ObjectId
        },
        name: {
            type: String
        },
        image_url: {
            type: String
        },
        price: {
            type: Number
        },
        quantity: {
            type: Number
        },
    }
);

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "foods"
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;