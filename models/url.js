const { string } = require("joi");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const urlSchema = new Schema(
  {
    URL: {
      type: String,
    },
    Short_URL: {
      type: String,
    },
  },
  { timestamps: true }
);

const url = mongoose.model("URL", urlSchema);

module.exports = url;
