import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { categories } from '../Data';

function TopCategories() {
  return (
    // <div className='mx-28 mt-24'>
    //     <div className='flex items-center justify-between mb-10'>
    //         <h3 className='font-semibold text-neutral-500 border-b-3 pb-2 border-[#008ECC]'>Shop From <span className='text-[#008ECC]'>Top Categories</span></h3>
    //         <a href="#" className='flex items-center gap-2'>View All <IoIosArrowForward className='text-[#008ECC] text-xl'/></a>
    //     </div>

    //     <div className='flex justify-between'>
    //     {
    //         categories.map((category)=>(
    //             <div key={category.id} className='border border-[#008ECC] text-center object-fit'>
    //                 <img src={category.image} alt="" className='w-24 h-32'/>
    //                 <p className='mt-2 text-sm'>{category.title}</p>

    //             </div>
    //         ))
    //     }
    //     </div>
    // </div>




    <div className='px-4 sm:px-10 lg:mx-28 mt-12 sm:mt-24'>

      {/* Header */}
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-8 sm:mb-10'>
        <h3 className='font-semibold text-neutral-500 border-b-2 pb-2 border-[#008ECC] text-lg'>
          Shop From <span className='text-[#008ECC]'>Top Categories</span>
        </h3>
        <a href="#" className='flex items-center gap-2 text-sm sm:text-base'>
          View All <IoIosArrowForward className='text-[#008ECC] text-lg sm:text-xl' />
        </a>
      </div>

      {/* Categories Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6'>
        {categories.map((category) => (
          <div key={category.id} className='border border-[#008ECC] rounded-xl p-4 text-center'>
            <img src={category.image} alt={category.title} className='w-20 h-28 sm:w-24 sm:h-32 mx-auto object-contain' />
            <p className='mt-3 text-sm font-medium'>{category.title}</p>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default TopCategories