const { string } = require("joi");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema(
  {
    name: {
      type: String,
    },

    choices: [
      {
        type: String,
      },
    ],

    answer: {
      type: String,
    },
  },
  { timestamps: true }
);

const question = mongoose.model("Question", questionSchema);

module.exports = question;
