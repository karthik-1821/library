const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['MEMBER'], required: true },
});

module.exports = mongoose.model('Member', memberSchema);