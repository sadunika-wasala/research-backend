const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
require("./src/db/conn");
require("./src/models/User.model");

const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/src/uploads'));
const routes = require("./src/api/Registration.api");

app.use('/', routes)


app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})