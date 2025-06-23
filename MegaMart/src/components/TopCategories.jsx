import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { categories } from '../Data';

function TopCategories() {
  return (
    <div className='mx-28 mt-24'>
        <div className='flex items-center justify-between mb-10'>
            <h3 className='font-semibold text-neutral-500 border-b-3 pb-2 border-[#008ECC]'>Shop From <span className='text-[#008ECC]'>Top Categories</span></h3>
            <a href="#" className='flex items-center gap-2'>View All <IoIosArrowForward className='text-[#008ECC] text-xl'/></a>
        </div>

        <div className='flex justify-between'>
        {
            categories.map((category)=>(
                <div key={category.id} className='border border-[#008ECC]'>
                    <img src={category.image} alt="" className='w-20'/>
                    <p>{category.title}</p>

                </div>
            ))
        }
        </div>
    </div>
  )
}

export default TopCategories