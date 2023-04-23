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
  const [file, setfile] = useState('');
  const [creator, setcreator] = useState('');

  useEffect(() => {
    async function setuserfunc() {
      if (!localStorage.getItem("chat-nexus-user")) {

      } else {
        setcreator(await JSON.parse(localStorage.getItem("chat-nexus-user")));
      }
    }
    setuserfunc();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !category || !type || !file) {
      return toast.error('Please fill all the required fields.');
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
        file,
        creator
      });

      console.log(response.data);
      toast.success('Podcast created successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (<>
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
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-input mt-1 block w-full text-white rounded-md bg-gray-800 border-gray-700 focus:border-blue-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
        </label>
        <label className="block mb-4">
          <span className="text-white font-medium">Category:</span>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="form-input h-8 text-white mt-1 block w-full rounded-md bg-gray-800 border-gray-700 focus:border-blue-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
        </label>
        <label className="block mb-4">
          <span className="text-white font-medium">Type:</span>
          <select value={type} onChange={(e) => setType(e.target.value)} className="form-select text-white h-8 mt-1 block w-full rounded-md bg-gray-800 border-gray-700 focus:border-blue-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out sm:text-sm sm:leading-5">
            <option value="">-- Select Type --</option>
            <option value="Audio">Audio</option>
            <option value="Video">Video</option>
          </select>
        </label>
        <label className="block mb-4">
          <span className="text-white font-medium">URL:</span>
          <input type="text" value={file} onChange={(e) => setfile(e.target.value)} className="form-input h-8 text-white mt-1 block w-full rounded-md bg-gray-800 border-gray-700 focus:border-blue-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
        </label>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Create Podcast</button>
      </div>
    </div>
  </div>
</form>
<div className='bg-gray-800 h-20 flex items-center justify-center'>
<Link href="/creator/dashboard" passHref={true} legacyBehavior={true}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Go back to creator dashboard
                  </button>
                </Link>
</div>


    </>
  );
}


  export default PodcastForm;

