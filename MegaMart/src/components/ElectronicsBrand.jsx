import React from 'react'
import { IoIosArrowForward } from "react-icons/io";


function ElectronicsBrand() {
  return (
    <div className='mx-28 mt-24'>
        <div className='flex items-center justify-between mb-10'>
            <h3 className='font-semibold text-neutral-500 border-b-3 pb-2 border-[#008ECC]'>Top <span className='text-[#008ECC]'>Electronics Brands</span></h3>
            <a href="#" className='flex items-center gap-2'>View All <IoIosArrowForward className='text-[#008ECC] text-xl'/></a>
        </div>
        <div className='flex justify-between'>
            <img src="/images/apple.png" alt="" />
            <img src="/images/realme.png" alt="" />
            <img src="/images/xiaomi.png" alt="" />
        </div>
    </div>
  )
}

export default ElectronicsBrand