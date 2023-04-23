import { useState } from 'react';
import axios from 'axios';
import { podcastroute } from '../api/apiroutes';
import toast, { Toaster } from 'react-hot-toast';

const validTypes = ['Audio', 'Video'];

function PodcastForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [file, setfile] = useState('');

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
    <h1>creator upload</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <label>
        Category:
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </label>
      <br />
      <label>
        Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">-- Select Type --</option>
          <option value="Audio">Audio</option>
          <option value="Video">Video</option>
        </select>
      </label>
      <br />
      <label>
        URL:
        <input type="text" value={file} onChange={(e) => setfile(e.target.value)} />
      </label>
      <br />
      <button type="submit">Create Podcast</button>
    </form>
    </>
  );
}


  export default PodcastForm;

