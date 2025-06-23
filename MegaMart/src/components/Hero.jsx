import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";



function Hero() {
  return (
    <div className='bg-[#212844] text-white mx-28 mt-5 h-58 rounded-xl flex justify-between relative'>
        <div className='pt-8 pl-24'>
            <h2 className='text-xl'>Best Deal Online on smart watches</h2>
            <h1 className='text-5xl font-semibold mt-3'>SMART WEARABLE.</h1>
            <h2 className='text-xl font-semibold mt-3'>UP to 80% OFF</h2>
        </div>
        <div className='pr-42 pt-4'>
            <img src="/images/hero watch.png" alt="" className='w-48' />
        </div>
        <div className='bg-white size-16 rounded-full flex items-center justify-center absolute top-20 -left-8'><IoIosArrowBack className='text-[#008ECC]'/></div>
        <div className='bg-white size-16 rounded-full flex items-center justify-center absolute -right-8 top-20'><IoIosArrowForward className='text-[#008ECC]'/></div>
    </div>
  )
}

export default Hero