import React, { useEffect, useState } from "react"
import Screens from "@/components/Screens"
import Card from "@/components/Card"
import CategoryCard from "@/components/CategoryCard"
import ArtistCard from "@/components/ArtistCard"
import Link from "next/link"
import { allspeakerroute } from './api/apiroutes';
import axios from "axios"

export default function Home() {
  const [speakers, setSpeakers] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(allspeakerroute);
        setSpeakers(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);



  return (
    <main className="bg-[#0A0B0D] text-white">
      <Screens screen={0} />
      <div className="md:py-20 lg:px-20 py-12 md:px-12 px-6 h-fit">
        <Screens screen={1} />
      </div>
      <div className="md:py-20 lg:px-20 py-12 md:px-12 px-8 h-fit">
        <div className="flex justify-between items-center">
          <h1 className='text-left font-bold lg:text-3xl md:text-2xl text-xl'>Entertainment<span className="text-sky-500">.</span></h1>
          <Link href='/category/entertaiment'>
            <button className="text-xs px-4 py-1 rounded-3xl view-all">VIEW ALL</button>
          </Link>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 mt-8">
          <Card image="./podcast.jpg" title="migration" />
          <Card image="./podcast.jpg" title="migration" />
          <Card image="./podcast.jpg" title="migration" />
          <Card image="./podcast.jpg" title="migration" />
        </div>
      </div>
      <div className="md:py-20 lg:px-20 py-12 md:px-12 px-8 h-fit">
        <div className="flex justify-between items-center">
          <h1 className='text-left font-bold lg:text-3xl md:text-2xl text-xl'>Lifestyle<span className="text-sky-500">.</span></h1>
          <Link href='/category/lifestyle'>
            <button className="text-xs px-4 py-1 rounded-3xl view-all">VIEW ALL</button>
          </Link>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 mt-8">
          <Card image="./podcast.jpg" title="migration" />
          <Card image="./podcast.jpg" title="migration" />
          <Card image="./podcast.jpg" title="migration" />
          <Card image="./podcast.jpg" title="migration" />
        </div>
      </div>
      <div className="bg-[#121413] md:py-20 lg:px-20 py-12 md:px-12 px-8 h-fit">
        <div className="flex justify-between items-center">
          <h1 className='text-left font-bold lg:text-3xl md:text-2xl text-xl'>Browse by category  <span className="text-sky-500">.</span></h1>
          <button className="text-xs px-4 py-1 rounded-3xl view-all">VIEW ALL</button>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 mt-8">
          <CategoryCard image="./category.jpg" title="Entertainment" />
          <CategoryCard image="./category.jpg" title="Entertainment" />
          <CategoryCard image="./category.jpg" title="Entertainment" />
          <CategoryCard image="./category.jpg" title="Entertainment" />
        </div>
      </div>
      <div className="bg-[#121413] md:py-20 lg:px-20 py-12 md:px-12 px-8 h-fit">
        <h1 className='text-center font-bold lg:text-4xl md:text-3xl text-2xl'>Popular Artists<span className="text-sky-500">.</span></h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 mt-12">
        {speakers.map((speaker) => (
            <ArtistCard key={speaker._id} image={speaker.photo} name={speaker.name} />
          ))}
        </div>
      </div>
    </main>
  )
}
