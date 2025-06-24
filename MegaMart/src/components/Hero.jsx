import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";



function Hero() {
  return (
    // <div className='bg-[#212844] text-white mx-28 mt-5 h-58 rounded-xl flex justify-between relative'>
    //     <div className='pt-8 pl-24'>
    //         <h2 className='text-xl'>Best Deal Online on smart watches</h2>
    //         <h1 className='text-5xl font-semibold mt-3'>SMART WEARABLE.</h1>
    //         <h2 className='text-xl font-semibold mt-3'>UP to 80% OFF</h2>
    //     </div>
    //     <div className='pr-42 pt-4'>
    //         <img src="/images/hero watch.png" alt="" className='w-48' />
    //     </div>
    //     <div className='bg-white size-16 rounded-full flex items-center justify-center absolute top-20 -left-8'><IoIosArrowBack className='text-[#008ECC]'/></div>
    //     <div className='bg-white size-16 rounded-full flex items-center justify-center absolute -right-8 top-20'><IoIosArrowForward className='text-[#008ECC]'/></div>
    // </div>



    <div className='bg-[#212844] text-white mt-5 rounded-xl px-4 sm:px-10 lg:mx-28 py-6 flex flex-col md:flex-row justify-between items-center relative'>

      {/* Left Content */}
      <div className='text-center md:text-left md:pl-6'>
        <h2 className='text-lg sm:text-xl'>Best Deal Online on smart watches</h2>
        <h1 className='text-3xl sm:text-5xl font-semibold mt-3'>SMART WEARABLE.</h1>
        <h2 className='text-lg sm:text-xl font-semibold mt-3'>UP to 80% OFF</h2>
      </div>

      {/* Hero Image */}
      <div className='mt-6 md:mt-0'>
        <img src="/images/hero watch.png" alt="Hero Watch" className='w-40 sm:w-48 md:w-56' />
      </div>

      {/* Arrows */}
      <div className='absolute top-1/2 left-2 -translate-y-1/2 bg-white w-10 h-10 sm:size-16 rounded-full flex items-center justify-center'>
        <IoIosArrowBack className='text-[#008ECC] text-xl sm:text-2xl' />
      </div>
      <div className='absolute top-1/2 right-2 -translate-y-1/2 bg-white w-10 h-10 sm:size-16 rounded-full flex items-center justify-center'>
        <IoIosArrowForward className='text-[#008ECC] text-xl sm:text-2xl' />
      </div>

    </div>
  )
}

export default Hero