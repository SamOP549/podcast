import React from 'react'
import { useRouter } from 'next/router'
import { Table } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    {
        name: "Epidose 1",
        date: "15 Dec, 2020",
        duration: "1:30",
    },
    {
        name: "Epidose 1",
        date: "15 Dec, 2020",
        duration: "1:30",
    },
    {
        name: "Epidose 1",
        date: "15 Dec, 2020",
        duration: "1:30",
    },
    {
        name: "Epidose 1",
        date: "15 Dec, 2020",
        duration: "1:30",
    },
    {
        name: "Epidose 1",
        date: "15 Dec, 2020",
        duration: "1:30",
    },
];

const Podcast = () => {
    const router = useRouter()
    const { slug } = router.query
    return (
        <div className='bg-teal-700 text-white pt-10'>
            <div className="md:py-20 lg:px-20 py-12 md:px-12 px-8 h-fit">
                <div className='flex md:flex-row flex-col md:items-end items-start justify-between'>
                    <div className='md:w-1/4 w-1/2'>
                        <img className='shadow-2xl drop-shadow-2xl' src='/podcast.jpg' alt='' />
                    </div>
                    <div className='md:w-3/4 w-full md:pl-20 md:mt-0 mt-10'>
                        <p className='text-sm font-semibold'>Podcast</p>
                        <p className='lg:text-5xl md:text-4xl text-3xl font-bold mt-4'>Learn English Stories While Sleeping</p>
                        <p className='text-sm font-semibold mt-4'>By <span className='text-sky-500'>Bedtime Story</span></p>
                    </div>
                </div>
                <TableContainer className='mt-10 bg-inherit'>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className='text-gray-200'>#</TableCell>
                                <TableCell className='text-gray-200'>Title</TableCell>
                                <TableCell className='text-gray-200'>Date</TableCell>
                                <TableCell className='text-gray-200'></TableCell>
                                <TableCell className='text-gray-200' align="right">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-auto">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow
                                    className='hover:bg-[rgb(255,255,255,0.2)] group'
                                    key={row.name}
                                >
                                    <TableCell className='border-none text-gray-200 group-hover:hidden block'>
                                        {index + 1}
                                    </TableCell>
                                    <TableCell sx={{ width: 20, height: 20 }} className='border-none text-gray-200 group-hover:block hidden cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                        </svg>
                                    </TableCell>
                                    <TableCell className='border-none text-gray-200'>{row.name}</TableCell>
                                    <TableCell className='border-none text-gray-200'>{row.date}</TableCell>
                                    <TableCell className='border-none text-gray-200 group-hover:hidden block'> </TableCell>
                                    <TableCell sx={{ width: 20, height: 20 }} className='border-none text-gray-200 group-hover:block hidden cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </TableCell>
                                    <TableCell className='border-none text-gray-200' align="right">{row.duration}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default Podcast