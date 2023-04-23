const mongoose = require('mongoose');

const speakerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profileImage: {
    type: String,
    required: true
  },
  podcasts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Podcast',
    required: true
  }],
  speakerRatings: {
    type: Number,
    default: 0
  },
  speakerDescription: {
    type: String,
    required: true
  },
  numberOfRatings: {
    type: Number,
    default: 0
  }
});


module.exports= mongoose.model('Speaker', speakerSchema);