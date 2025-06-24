import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { essentials } from '../Data'

function Essential() {
  return (
    // <div className='mx-28 my-20'>
    //     <div className='flex items-center justify-between mb-10'>
    //         <h3 className='font-semibold text-neutral-500 border-b-3 pb-2 border-[#008ECC]'>Daily <span className='text-[#008ECC]'>Essentials</span></h3>
    //         <a href="#" className='flex items-center gap-2'>View All <IoIosArrowForward className='text-[#008ECC] text-xl'/></a>
    //     </div>
    //     <div className='flex justify-between items-center'>
    //       {
    //         essentials.map((essential)=>(
    //           <div key={essential.id}>
    //             <div className='border border-[#008ECC] rounded-xl px-8 py-14'>
    //             <img src={essential.image} alt="" className='w-24 h-26'/>
    //             </div>
    //             <div  className='text-center mt-4'>
    //             <p className='text-neutral-500'>{essential.title}</p>
    //             <h1 className='font-bold'>{essential.discount}</h1>
    //             </div>
    //           </div>
    //         ))
    //       }
    //     </div>
    // </div>



    <div className='px-4 sm:px-10 lg:mx-28 my-10 sm:my-20'>

      {/* Header Section */}
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-8 sm:mb-10'>
        <h3 className='font-semibold text-neutral-500 border-b-2 pb-2 border-[#008ECC] text-lg'>
          Daily <span className='text-[#008ECC]'>Essentials</span>
        </h3>
        <a href="#" className='flex items-center gap-2 text-sm sm:text-base'>
          View All <IoIosArrowForward className='text-[#008ECC] text-lg sm:text-xl' />
        </a>
      </div>

      {/* Essentials Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-10'>
        {essentials.map((essential) => (
          <div key={essential.id} className='text-center'>
            <div className='border border-[#008ECC] rounded-xl px-6 py-10 sm:px-8 sm:py-14 flex items-center justify-center'>
              <img src={essential.image} alt={essential.title} className='w-20 sm:w-24 object-contain' />
            </div>
            <div className='mt-4'>
              <p className='text-neutral-500 text-sm'>{essential.title}</p>
              <h1 className='font-bold text-base'>{essential.discount}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Essential