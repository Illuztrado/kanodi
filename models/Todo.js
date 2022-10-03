const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  storeLocation: {
    type: String,
    required: true,
  },
  storePrice: {
    type: Number,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  },
  // completed: {
  //   type: Boolean,
  //   required: true,
  // }
})

module.exports = mongoose.model('Todo', TodoSchema)
