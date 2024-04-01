const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
app.set("view engine", "ejs");


// connect to mongodb with database name "postmanapi"
mongoose.connect("mongodb://0.0.0.0:27017/userdb", {
  useNewUrlParser: true,
  
}).then(() => {
  console.log("Connected to database!");
}).catch((err) => { console.log(err) });

require("./routes/routes")(app);

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
