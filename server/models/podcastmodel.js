const mongoose = require('mongoose');

const podcastSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['Audio', 'Video'],
    required: true
  },
  file: {
    type: String,
    required: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  ratings: [{
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    review: {
      type: String
    },
    reviewer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }]
});

module.exports = mongoose.model('Podcast', podcastSchema);








 


