import React from 'react'
import { TbFaceIdError } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='flex flex-col gap-5 w-screen h-[600px] items-center justify-center bg-amber-50'>
        <TbFaceIdError className='text-6xl text-green-500' />
        <h1 className='text-5xl text-green-600'>User Not Found...</h1>
        <p className='text-lg text-gray-400'>Sorry, the page you are looking for doesn’t exist or has been moved.</p>
        <Link to="/" className='px-10 bg-green-500 text-white text-2xl py-1 rounded-xl cursor-pointer hover:bg-green-600'>Back to Home</Link>
    </div>
  )
}

export default Error