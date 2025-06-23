import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { deals } from '../Data';



function DealSection() {
  return (
    <div className='mx-28 mt-24'>
        <div className='flex items-center justify-between mb-10'>
            <h3 className='font-semibold text-neutral-500 border-b-3 pb-2 border-[#008ECC]'>Grab the best deal on <span className='text-[#008ECC]'>Smartphones</span></h3>
            {/* <p className='flex items-center gap-2'>View All <IoIosArrowForward className='text-[#008ECC] text-xl'/></p> */}
            <a href="#" className='flex items-center gap-2'>View All <IoIosArrowForward className='text-[#008ECC] text-xl'/></a>
        </div>
        <div className='grid grid-cols-5 gap-3'>
            {
                deals.map((deal)=>(
                    <div key={deal.id} className='border border-[#008ECC] rounded-2xl'>
                        <img src={deal.image} alt="" className='w-28 object-fit m-auto' />
                        <div>
                            <h4>{deal.title}</h4>
                            <p>₹{deal.price}</p>
                            <p className='text-[#249B3E]'>Save- ₹{deal.save}</p>
                        </div>

                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default DealSection