const Podcast = require('../models/podcastmodel');

module.exports.createpodcast = async (req, res, next) => {
    try {
      const { title, description, category, type,file,creator} = req.body;
  
      if (!title || !description || !category || !type || !file || !creator) {
        return res.status(400).json({ error: 'Please fill all the required fields.' });
      }
  
      await Podcast.create({
        title,
        description,
        category,
        type,
        file,
        creator
      });
  
      return res.status(201).json({ message: 'Podcast created successfully.' });
    } catch (err) {
      next(err);
    }
  };


  module.exports.getallpodcasts = async (req, res, next) => {
    try {
      const podcasts = await Podcast.find()
      return res.json(podcasts);
    } catch (err) {
      next(err);
    }
  };
  
