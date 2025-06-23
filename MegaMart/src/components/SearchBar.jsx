import React from 'react'
import { BiMenuAltLeft } from "react-icons/bi";
import { LuSearch } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";
import { FiUser } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";




function SearchBar() {
  return (
    <div className='flex items-center justify-between px-28 py-5'>
        <div className='flex gap-3'>
            <BiMenuAltLeft className='text-4xl text-[#008ECC]' />
            {/* <img src="/images/menu.png" alt="" className='w-6'/> */}
            <h1 className='text-2xl font-semibold text-[#008ECC]'>MegaMart</h1>
        </div>
        <div className='flex items-center gap-10'>
            <div className='flex items-center '>
                <LuSearch className='text-[#008ECC]'/>
                <input type="text" placeholder='Search essential, groceries and more...' className='bg-transparent outline-none text-gray-600 placeholder-gray-400' />
                <TfiMenuAlt className='text-[#008ECC]'/>
            </div>
            <div className='flex gap-10'>
                <div className='flex items-center gap-1'>
                    <FiUser className='text-[#008ECC]'/>
                    <p>Sign Up/Sign In</p>
                </div>
                <div className='flex items-center gap-1'>
                    <TiShoppingCart className='text-[#008ECC]'/>
                    <p>Cart</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBar