import React from 'react'
import { IoIosArrowDown } from "react-icons/io";


function NavBar() {
  return (
    <div className='mx-28 py-3'>
        <ul className='flex items-center justify-between'>
            <li className='flex items-center gap-2 cursor-pointer'>Groceries <IoIosArrowDown className='text-[#008ECC]' /></li>
            <li className='flex items-center gap-2 cursor-pointer'>Premium Fruits <IoIosArrowDown className='text-[#008ECC]' /></li>
            <li className='flex items-center gap-2 cursor-pointer'>Home & Kitchen <IoIosArrowDown className='text-[#008ECC]' /></li>
            <li className='flex items-center gap-2 cursor-pointer'>Fashion <IoIosArrowDown className='text-[#008ECC]' /></li>
            <li className='flex items-center gap-2 cursor-pointer'>Electronics <IoIosArrowDown className='text-[#008ECC]' /></li>
            <li className='flex items-center gap-2 cursor-pointer'>Beauty <IoIosArrowDown className='text-[#008ECC]' /></li>
            <li className='flex items-center gap-2 cursor-pointer'>Home Improvement <IoIosArrowDown className='text-[#008ECC]' /></li>
            <li className='flex items-center gap-2 cursor-pointer'>Sports, Toys & Luggage <IoIosArrowDown className='text-[#008ECC]' /></li>
        </ul>
    </div>
  )
}

export default NavBar