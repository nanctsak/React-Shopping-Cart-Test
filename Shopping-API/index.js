const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
var mongoose = require('mongoose')
const app = express()
const port = 8000
mongoose.connect('mongodb+srv://nanctsak:4444@cluster0.ecefuyq.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

var productRout = require("./ProductRouter");
app.use("/api/product", productRout);

var cartRout = require("./CartRouter");
app.use("/api/cart", cartRout);

app.use((req, res, next) => {
    var err = new Error("ไม่พบ path ที่คุณต้องการ");
    err.status = 404;
    next(err);
  });

