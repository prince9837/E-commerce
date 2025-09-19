import React from 'react'
import { ScaleLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='w-screen h-[500px] flex items-center justify-center'>
        <ScaleLoader/>
    </div>
  )
}

export default Loader