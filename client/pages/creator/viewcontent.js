import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getallpodcasts } from '../api/apiroutes';

function ViewPodcasts() {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(getallpodcasts);
        setPodcasts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="podcastcontainer">
      {podcasts.map((podcast) => (
        <div key={podcast._id} className="podcastcard">
          <h3 className="podcasttitle">{podcast.title}</h3>
          <p className="podcast-description">{podcast.description}</p>
          <div className="podcastmedia">
            {podcast.type === 'Audio' ? (
              <audio controls src={podcast.file} />
            ) : (
              <video controls src={podcast.file} />
            )}
          </div>
          <p className="podcastcategory">Category: {podcast.category}</p>
        </div>
      ))}
    </div>
  );
}

export default ViewPodcasts;


