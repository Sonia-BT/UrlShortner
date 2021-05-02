const express = require("express");
const quizController = require("./controller");
const quizRouter = express.Router();

quizRouter.get("/:id", quizController.getQuizByID);
// quizRouter.get("/", quizController.getQuiz);
quizRouter.post("/", quizController.addQuiz);
// quizRouter.delete("/:id", quizController.deleteQuiz);

module.exports = quizRouter;
