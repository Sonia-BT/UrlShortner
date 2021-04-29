const Question = require("../../../models/Questions");

const getQuestionByID = async (req, res) => {
  try {
    const { id } = req.params;
    const question = await Question.findById(id);
    if (!question) {
      return res.status(500).json({
        message: "Question doesn't exist",
        data: {},
      });
    }
    res.status(200).json({
      message: "Fetched one successfully",
      data: question,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server Error",
      data: {},
    });
  }
};

const getQuestion = async (req, res) => {
  const questions = await Question.find();
  if (!questions) {
    return res.status(500).json({
      message: "questions doesn't exist",
      data: {},
    });
  }
  res.status(200).json({
    message: "Fetched successfully",
    data: questions,
  });
};

const addQuestion = async (req, res) => {
  const { name, choices, answer } = req.body;

  const question = new Question({
    name,
    choices,
    answer,
  });

  await question.save();

  res.status(201).json({
    message: "Successfully added",
    data: question,
  });
};

const updateQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, choices, answer } = req.body;

    const question = await Question.findById(id);
    if (!question) {
      return res.status(500).json({
        message: "question doesn't exist",
        data: {},
      });
    }
    const question2 = {};
    question2.name = Question || question.name;
    //   question2.choices = Question || question.choices;
    //   question2.answer= Question || question.answer;

    const newQuestion = await Question.findByIdAndUpdate(id, question2, {
      new: true,
    });
    if (!newQuestion) {
      return res.status(500).json({
        message: "question failed to update",
        data: {},
      });
    }
    return res.status(200).json({
      message: "Updated successfully",
      data: newQuestion,
    });
  } catch (error) {
    console.log("ERROR => ", error);
    return res.status(500).json({
      message: "ERROR on server",
      data: {},
    });
  }
};

const deleteQuestion = async (req, res) => {
  const { id } = req.params;
  const question = await Question.findById(id);
  if (!question) {
    return res.status(500).json({
      message: "question doesn't exist",
      data: {},
    });
  }
  const deletedQuestion = await Question.findByIdAndDelete(id);
  if (!deletedQuestion) {
    return res.status(500).json({
      message: "question failed to delete",
      data: {},
    });
  }
  res.status(200).json({
    message: "Successfully deleted",
    data: deletedQuestion,
  });
};

module.exports = {
  getQuestionByID,
  getQuestion,
  addQuestion,
  updateQuestion,
  deleteQuestion,
};
