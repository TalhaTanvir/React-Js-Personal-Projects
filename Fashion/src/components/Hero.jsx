import React from 'react'

function Hero() {
  return (
    <secction className='w-full bg-[#F4F6F5]'>
      <div className='max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center gap-10'>
        <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-5xl md:text-7xl font-extrabold leading-tight '>
            <div><span className='bg-[#FFFFFF]'>LET’S</span></div>
            <div><span>EXPLORE</span></div>
            <div className='bg-[#EBD96B] transform -skew-y-3 max-w-90'><span className='transform skew-y-3 inline-block'>UNIQUE</span></div>
            <div><span>CLOTHES.</span></div>
            </h1>
            <p className='mt-6 text-lg md:text-xl text-gray-700'>Live for Influential and Innovative fashion!</p>
            <button className='mt-6 text-white bg-black text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-300'>Shop Now</button>
        </div>
      
        <div className='flex-1'>
            <img src="src/assets/images/hero-image.png" alt="Fashion Girl" className='w-full h- object-cover'/>
        </div>
      </div>
    </secction>
  )
}

export default Hero