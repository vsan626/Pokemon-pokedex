const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./router");
const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, "../client/dist/")));

app.use("/pokemon", router);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
