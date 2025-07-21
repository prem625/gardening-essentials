const mongoose = require('mongoose');

/* it wil contain the name of the cards and the same name shall be provided for rendering  */ 

const Schema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    unique: true,
  }
}, {
  timestamps: true,
});

const model = mongoose.model('cards', Schema);

module.exports = model;

