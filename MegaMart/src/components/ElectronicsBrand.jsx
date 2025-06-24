import React from 'react'
import { IoIosArrowForward } from "react-icons/io";


function ElectronicsBrand() {
  return (
    // <div className='mx-28 mt-24'>
    //     <div className='flex items-center justify-between mb-10'>
    //         <h3 className='font-semibold text-neutral-500 border-b-3 pb-2 border-[#008ECC]'>Top <span className='text-[#008ECC]'>Electronics Brands</span></h3>
    //         <a href="#" className='flex items-center gap-2'>View All <IoIosArrowForward className='text-[#008ECC] text-xl'/></a>
    //     </div>
    //     <div className='flex justify-between'>
    //         <img src="/images/apple.png" alt="" />
    //         <img src="/images/realme.png" alt="" />
    //         <img src="/images/xiaomi.png" alt="" />
    //     </div>
    // </div>




     <div className='px-4 sm:px-10 lg:mx-28 mt-12 sm:mt-24'>
      
      {/* Header Section */}
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-8 sm:mb-10'>
        <h3 className='font-semibold text-neutral-500 border-b-2 pb-2 border-[#008ECC] text-lg'>
          Top <span className='text-[#008ECC]'>Electronics Brands</span>
        </h3>
        <a href="#" className='flex items-center gap-2 text-sm sm:text-base'>
          View All <IoIosArrowForward className='text-[#008ECC] text-lg sm:text-xl' />
        </a>
      </div>

      {/* Brand Logos */}
      <div className='flex flex-wrap justify-center sm:justify-between gap-6 sm:gap-10'>
        <img src="/images/apple.png" alt="Apple" className='w-28 sm:w-32 object-contain' />
        <img src="/images/realme.png" alt="Realme" className='w-28 sm:w-32 object-contain' />
        <img src="/images/xiaomi.png" alt="Xiaomi" className='w-28 sm:w-32 object-contain' />
      </div>
      
    </div>
  )
}

export default ElectronicsBrand