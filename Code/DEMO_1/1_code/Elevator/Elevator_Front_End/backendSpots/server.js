const express = require("express");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const spots = require("./routes/api/spots");

const app = express();

app.use(bodyParser.json());

const db = require("./config/keys").atlasURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.log(err));

app.use("/api/spots", spots);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
