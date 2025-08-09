import React from 'react'

function Email() {
  return (
    <div className='bg-[#E5C643] flex flex-col justify-center items-center text-center py-24'>
        <h1 className='text-2xl lg:text-3xl max-w-lg font-extrabold text-white'>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h1>
        <p className='text-sm lg:text-xl text-white mt-4'>Type your email down below and be young wild generation</p>
        <span className="flex items-center p-1 bg-white rounded-md overflow-hidden max-w-xs w-full mt-6">
        <input
          type="email"
          placeholder="Enter your email here"
          className="flex-1 px-3 py-1 outline-none text-black"
        />
        <button className="bg-black text-white px-4 py-1 hover:bg-gray-800 uppercase rounded-md cursor-pointer">
          Send
        </button>
      </span>
    </div>
  )
}

export default Email