const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
  name: String,
  image: String,
  countInsStock: {
    type: Number,
    required: true
  }
})

exports.Product = mongoose.model('Product', productSchema)