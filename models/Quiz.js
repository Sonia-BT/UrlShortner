const { string, array } = require("joi");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const quizSchema = new Schema(
  {
    Subject: {
      type: String,
    },
    Questions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Question",
      },
    ],
  },
  { timestamps: true }
);

const quiz = mongoose.model("Quiz", quizSchema);

module.exports = quiz;
