const mongoose = require('mongoose');

const { Schema } = mongoose;

const meSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Me = mongoose.model('Me', meSchema);

module.exports = Me;