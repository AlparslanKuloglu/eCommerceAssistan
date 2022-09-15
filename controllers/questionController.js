const Question = require('../models/question')



exports.createQuestion = async (req, res) => {
  try {
    const user = await Question.create(req.body);

    res.status(201).redirect('/')

  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error
    })

  }

}