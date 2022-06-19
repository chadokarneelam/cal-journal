require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// create an app instance
const app = express();

// Express body parser
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: false,
    parameterLimit: 50000,
  })
);

app.get('/status', (req, res) => {
    res.send('status ok!')
  })

const port = process.env.PORT || 8080;
//listen to the server
app.listen(port, function () {
  console.log(`listening to the port ${port} .....`);
});