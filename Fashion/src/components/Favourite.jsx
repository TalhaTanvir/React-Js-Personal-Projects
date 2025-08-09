import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";


function Favourite() {
  return (
    <section className='w-full py-16'>
        <div className='max-w-7xl mx-auto px-16'>
            {/* Title */}
            <h2 className='text-3xl font-extrabold mb-10'>Young's Favourite</h2>

            {/* Image Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {/* Card 1 */}
                <div className='rounded-xl overflow-hidden shadow-md'>
                    <img src="src/assets/images/young1.png" alt="" className='w-full h-auto object-cover'/>
                <div className='flex justify-between items-center p-4'>
                    <div>
                        <h3 className='font-semibold text-lg'>Trending on instagram</h3>
                        <p className='text-sm text-gray-500'>Explore Now!</p>
                    </div>
                        <div className='text-3xl text-gray-500'><IoIosArrowRoundForward /></div>
                </div>
                </div>
                {/* Card 2 */}
                <div className='rounded-xl overflow-hidden shadow-md'>
                    <img src="src/assets/images/young2.png" alt="" className='w-full h-auto object-cover'/>
                <div className='flex justify-between items-center p-4'>
                    <div>
                        <h3 className='font-semibold text-lg'>All Under $40</h3>
                        <p className='text-sm text-gray-500'>Explore Now!</p>
                    </div>
                        <div className='text-3xl text-gray-500'><IoIosArrowRoundForward /></div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Favourite