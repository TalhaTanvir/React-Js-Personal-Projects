import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { essentials } from '../Data'

function Essential() {
  return (
    <div className='mx-28 my-20'>
        <div className='flex items-center justify-between mb-10'>
            <h3 className='font-semibold text-neutral-500 border-b-3 pb-2 border-[#008ECC]'>Daily <span className='text-[#008ECC]'>Essentials</span></h3>
            <a href="#" className='flex items-center gap-2'>View All <IoIosArrowForward className='text-[#008ECC] text-xl'/></a>
        </div>
        <div className='flex justify-between items-center'>
          {
            essentials.map((essential)=>(
              <div key={essential.id}>
                <div className='border border-[#008ECC] rounded-xl px-8 py-14'>
                <img src={essential.image} alt="" className='w-24 h-26'/>
                </div>
                <div  className='text-center mt-4'>
                <p className='text-neutral-500'>{essential.title}</p>
                <h1 className='font-bold'>{essential.discount}</h1>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Essential