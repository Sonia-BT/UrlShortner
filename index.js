const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const Url = require("./models/url");
require("dotenv").config();

const urlRouter = require("./api/controllers/URL/router");
const questionRouter = require("./api/controllers/Questions/router");

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.once("open", () => console.log("DATABASE CONNECTED !!"));

const app = express();

app.use(express.json());
app.use(morgan("combined"));
app.use(helmet());
app.use(cors());

const PORT = process.env.PORT || 2000;

app.use("/URL", urlRouter);
app.use("/Question", questionRouter);

/*Redirect the URL*/
app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const url = await Url.findOne({ Short_URL: id });
  res.redirect(url.URL);
});

app.listen(PORT, () => console.log("Listening on http://localhost:" + PORT));
