import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiDiscountPercentLine } from "react-icons/ri";

    




function TopBar() {
  return (
    <div className='flex items-center justify-between bg-[#F5F5F5] px-28 py-2'>
        <p className=' text-gray-500'>Welcome to worldwide Megamart!</p>
        <div className='flex justify-between items-center gap-10'>
            <div className='flex items-center justify-center gap-1 text-gray-500'><IoLocationOutline className='text-[#008ECC]'/><p>Deliver to <span className='font-semibold'>423651</span></p></div>
            <div className='flex items-center justify-center gap-1 text-gray-500'><LiaShippingFastSolid className='text-[#008ECC]'/><p>Track your order</p></div>
            <div className='flex items-center justify-center gap-1 text-gray-500'><RiDiscountPercentLine className='text-[#008ECC]'/><p>All Offers</p></div>
        </div>
    </div>
  )
}

export default TopBar