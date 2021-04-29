const express = require("express");
const questionController = require("./controller");
const questionRouter = express.Router();

questionRouter.get("/:id", questionController.getQuestionByID);
questionRouter.get("/", questionController.getQuestion);
questionRouter.post("/:id", questionController.addQuestion);
questionRouter.delete("/:id", questionController.deleteQuestion);

module.exports = questionRouter;
