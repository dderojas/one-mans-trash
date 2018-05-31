const mongoose = require('mongoose');
mongoose.connect('');

let usersSchema = mongoose.Schema({
  username: String,
  password: String,
  created_at: Date,
  gifted: Array,
  claimed: Array,
  karma: Number,
  tokenCount: Number,
  isAdmin: Boolean
})

let User = mongoose.model('User', usersSchema);

module.exports = User;
