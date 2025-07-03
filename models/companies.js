const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  message : {
    type: String,
  }

}, {
  timestamps: true,
});

const model = mongoose.model('User', userSchema);

module.exports = model;

