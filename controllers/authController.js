const User = require('../models/user')



exports.createUser = async (req, res) => {
  try {
    const user = await User.create({quCount:1})

    res.status(201).redirect('/')

  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error
    })

  }

}

