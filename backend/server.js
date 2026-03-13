require('dotenv').config();
const app = require("./src/app");
const dbConnect = require('./src/db/dbConnect');
const port  = process.env.PORT || 3000


//database connection

dbConnect();

//starting the server
app.listen(port, (req, res) => {
  console.log(`app is listing to the port: ${port}`);
});
