
import { useEffect, useState } from 'react';
import axios from 'axios';
import { podcastroute } from '../api/apiroutes';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

const validTypes = ['Audio', 'Video'];

function PodcastForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [episodes, setEpisodes] = useState([{ title: '', url: '' }]);
  const [creator, setCreator] = useState('');

  useEffect(() => {
    async function setuserfunc() {
      if (!localStorage.getItem('chat-nexus-user')) {

      } else {
        setCreator(await JSON.parse(localStorage.getItem('chat-nexus-user')));
      }
    }
    setuserfunc();
  }, []);

  const handleAddEpisode = (e) => {
    e.preventDefault();
    setEpisodes([...episodes, { title: '', url: '' }]);
  };

  const handleEpisodeTitleChange = (index, value) => {
    const updatedEpisodes = [...episodes];
    updatedEpisodes[index].title = value;
    setEpisodes(updatedEpisodes);
  };

  const handleEpisodeUrlChange = (index, value) => {
    const updatedEpisodes = [...episodes];
    updatedEpisodes[index].url = value;
    setEpisodes(updatedEpisodes);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !category || !type || episodes.some((episode) => !episode.title || !episode.url)) {
      return toast.error('Please fill all the required fields for each episode.');
    }

    if (!validTypes.includes(type)) {
      return toast.error('Please select a valid type (Audio or Video).');
    }

    try {
      const response = await axios.post(podcastroute, {
        title,
        description,
        category,
        type,
        episodes,
        creator
      });

      console.log(response.data);
      toast.success('Podcast created successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit} className="bg-gray-800 py-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-gray-700 shadow-lg rounded-lg overflow-hidden">
            <div className="bg-gray-800 h-48 py-12 px-4 sm:px-6 lg:px-8">
              <h3 className="text-lg font-semibold text-white mb-2">Create a new podcast</h3>
            </div>
            <div className="bg-gray-900 px-4 py-5 sm:p-6">
              <label className="block mb-4">
                <span className="text-white font-medium">Title:</span>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-input h-8 text-white mt-1 block w-full rounded-md bg-gray-800 border-gray-700 focus:border-blue-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </label>

              <label className="block mb-4">
  <span className="text-white font-medium">Description:</span>
  <textarea
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    className="form-input h-32 text-white mt-1 block w-full rounded-md bg-gray-800 border-gray-700 focus:border-blue-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out sm:text-sm sm:leading-5"
  ></textarea>
</label>

<label className="block mb-4">
  <span className="text-white font-medium">Category:</span>
  <input
    type="text"
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="form-input h-8 text-white mt-1 block w-full rounded-md bg-gray-800 border-gray-700 focus:border-blue-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out sm:text-sm sm:leading-5"
  />
</label>

<label className="block mb-4">
  <span className="text-white font-medium">Type:</span>
  <select
    value={type}
    onChange={(e) => setType(e.target.value)}
    className="form-select h-8 text-white mt-1 block w-full rounded-md bg-gray-800 border-gray-700 focus:border-blue-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out sm:text-sm sm:leading-5"
  >
    <option value="">Select a type</option>
    <option value="Audio">Audio</option>
    <option value="Video">Video</option>
  </select>
</label>

<div className="mb-4">
                <h4 className="text-white font-medium mb-2">Episodes:</h4>
                {episodes.map((episode, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="text-white font-medium">Episode {index + 1}</h5>
                      {index === episodes.length - 1 && (
                        <button onClick={handleAddEpisode} className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-2 rounded">
                          Add Episode
                        </button>
                      )}
                    </div>
                    <label className="block mb-2">
                      <span className="text-white font-medium">Title:</span>
                      <input
                        type="text"
                        value={episode.title}
                        onChange={(e) => handleEpisodeTitleChange(index, e.target.value)}
                        className="form-input h-8 text-white mt-1 block w-full rounded-md bg-gray-800 border-gray-700 focus:border-blue-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </label>
                    <label className="block mb-2">
                      <span className="text-white font-medium">URL:</span>
                      <input
                        type="text"
                        value={episode.url}
                        onChange={(e) => handleEpisodeUrlChange(index, e.target.value)}
                        className="form-input h-8 text-white mt-1 block w-full rounded-md bg-gray-800 border-gray-700 focus:border-blue-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </label>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded mr-2">
                  Create Podcast
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default PodcastForm;


             
