const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require('cors');
const app = express();
const authRoute = require("../src/routes/auth.route")
const orderRoute = require("../src/routes/orders.routes")

//middleware
app.use(cors({
  origin: ["http://localhost:5174", "http://localhost:5173" ,"https://zerodha-clone-ten-weld.vercel.app"],
  credentials: true,
}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());


// app.get('/test', function (req, res) {

//   console.log('Cookies: ', req.cookies)
//   res.json(req.cookies)
// })

// app.use((req, res, next) => {
//   console.log("REQ:", req.method, req.url);
//   next();
// });



//routes connection
app.use('/',authRoute);
app.use('/',orderRoute);

app.get('/test',(req,res)=>{
    res.redirect("http://localhost:5174/");
})

module.exports = app;
