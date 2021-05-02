const Quiz = require("../../../models/Quiz");

const getQuizByID = async (req, res) => {
  try {
    const { id } = req.params;
    const quiz = await Quiz.findById(id).populate("Questions");
    if (!quiz) {
      return res.status(500).json({
        message: "Quiz doesn't exist",
        data: {},
      });
    }
    res.status(200).json({
      message: "Fetched one successfully",
      data: quiz,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server Error",
      data: {},
    });
  }
};

const addQuiz = async (req, res) => {
  const { Subject, Questions } = req.body;
  const { id } = req.params;

  const quiz = new Quiz({
    Subject,
    Questions,
  });

  await quiz.save();

  res.status(201).json({
    message: "Successfully added",
    data: quiz,
  });
};

module.exports = {
  getQuizByID,
  addQuiz,
};
