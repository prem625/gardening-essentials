const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,}

}, {
  timestamps: true,
});

const model = mongoose.model('orders', Schema);

module.exports = model;

