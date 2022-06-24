require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// routes
const routes = require("./routes");
// import mongodb connect db method
const connectMDB = require("./config/mongo");

// connect to mongodb
connectMDB();
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

app.get("/status", (req, res) => {
  res.send("status ok!");
});

app.use("/api/v1/events", routes.calJournalAPI);

const port = process.env.PORT || 8080;
//listen to the server
app.listen(port, function () {
  console.log(`listening to the port ${port} .....`);
});
