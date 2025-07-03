const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 8000;

async function connectDB(url) {
  return mongoose.connect(url)
}

module.exports = { connectDB ,app , PORT};