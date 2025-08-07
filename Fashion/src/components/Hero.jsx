import React from 'react'

function Hero() {
  return (
    <secction className='w-full bg-[#F4F6F5]'>
      <div className='max-w-7xl mx-auto px-6 py-20 flex'>
        <div className='flex-1'>
            <h1 className='text-7xl font-extrabold leading-tight'>
            <div><span className='bg-[#FFFFFF]'>LET’S</span></div>
            <div><span>EXPLORE</span></div>
            <div className='bg-[#EBD96B] transform -skew-y-3 max-w-90'><span className='transform skew-y-3 inline-block'>UNIQUE</span></div>
            <div><span>CLOTHES.</span></div>
            </h1>
            <p className='mt-6 text-xl'>Live for Influential and Innovative fashion!</p>
            <button className='mt-6 text-white bg-black text-lg py-2 px-5 rounded-lg'>Shop Now</button>
        </div>
      
        <div className='flex-1'>
            <img src="src/assets/images/hero-image.png" alt="Fashion Girl" className='w-full h-auto object-cover'/>
        </div>
      </div>
    </secction>
  )
}

export default Hero