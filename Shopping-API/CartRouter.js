var express = require("express");
var router = express.Router();
var Cart = require("./models/Cart");

// GET all product in cart
router.get("/all", (req, res) => {
    Cart.find().exec((err, data) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(data);
    });
});

// POST (create new data)
router.post("/addcart", (req, res) => {
    Cart.find({ _id: req.body._id }, function (err, docs) {
        if (docs.length) {
            req.body.quantity =docs[0].quantity+1;  
            Cart.findByIdAndUpdate({ _id: req.body._id },  req.body, (err, data) => {
                if (err) return res.status(400).send(err);
                res.status(200).send({
                    success: true,
                    message: "อัพเดทจำนวนสินค้าเรียบร้อย"
                });
             
            });
        } else {
            var obj = new Cart(req.body);
            obj.save((err, data) => {
                if (err) return res.status(400).send(err);
                res.status(200).send({
                    success: true,
                    message: "เพิ่มสินค้าเรียบร้อย"
                });
             
            });
        }
        
    });
}
);

// PUT (update current data)
router.put("/update/:_id", (req, res) => {
    Cart.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
        if (err) return res.status(400).send(err);
        res.status(200).send({
            success: true,
            message: "อัพเดทสินค้าเรียบร้อย"
        });
    });
});

// DELETE (delete 1 data)
router.delete("/delete/:_id", (req, res) => {
    Cart.findByIdAndDelete(req.params._id, (err, data) => {
      if (err) return res.status(400).send(err);
      res.status(200).send({
          success: true,
          message: "ลบข้อมูลเรียบร้อย"
      });
    });
});

module.exports = router;