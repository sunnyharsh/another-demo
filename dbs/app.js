const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const app = express();

//DB config
const db = require("./config/keys").mongoURI;

//Connect to Mongo
mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDb Connect...."))
    .catch(err => console.log(err));
//EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

//Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/user"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
    console.log(`server run on ${PORT}`);
});
