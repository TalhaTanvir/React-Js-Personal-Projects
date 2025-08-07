import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";


function NewArrivals() {
  return (
    <div className='m-full'>
    <div className='px-16 mt-10 mx-auto'>
        <h1 className='text-3xl font-extrabold'>NEW ARRIVALS</h1>
        <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
            <div className='w-[200px] md:w-[400px]'>
                <img src="src/assets/images/new1.png" alt="New Arrivals image" />
                <div className='flex justify-between items-center'>
                    <div>
                    <h2 className='font-semibold text-lg'>Hoodies & Sweetshirt</h2>
                    <p className='text-sm font-semibold text-gray-500'>Explore Now!</p>
                    </div>
                    <div className='text-4xl text-gray-500'><IoIosArrowRoundForward /></div>
                </div>
            </div>
            <div className='w-[200px] md:w-[400px]'>
                <img src="src/assets/images/new2.png" alt="New Arrivals image" />
                <div className='flex justify-between items-center'>
                    <div>
                    <h2 className='font-semibold text-lg'>Coats & Parkas</h2>
                    <p className='text-sm font-semibold text-gray-500'>Explore Now!</p>
                    </div>
                    <div className='text-4xl text-gray-500'><IoIosArrowRoundForward /></div>
                </div>
            </div>
            <div className='w-[200px] md:w-[400px]'>
                <img src="src/assets/images/new3.png" alt="New Arrivals image" />
                <div className='flex justify-between items-center'>
                    <div>
                    <h2 className='font-semibold text-lg'>Tees & T-Shirt</h2>
                    <p className='text-sm font-semibold text-gray-500'>Explore Now!</p>
                    </div>
                    <div className='text-4xl text-gray-500'><IoIosArrowRoundForward /></div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default NewArrivals