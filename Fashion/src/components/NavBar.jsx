import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

const NavLinks = [
  {
    id:1,
    url:"#",
    title:"CATALOGUE",
  },
  {
    id:2,
    url:"#",
    title:"FASHION",
  },
  {
    id:3,
    url:"#",
    title:"FAVOURITE",
  },
  {
    id:4,
    url:"#",
    title:"LIFESTYLE",
  },
]

function NavBar() {

  const[openNav, setOpenNav] = useState(false)

  return (
    <div className='w-full'>
    <div className='flex justify-between items-center px-4 lg:px-16'>

      {/* Website Logo */}

        <div className='cursor-pointer'>
            <img src="src/assets/logo/logo.png" alt="Main Logo" className='w-42'/>
        </div>

        {/* Desktop Menu */}

        <div className='lg:flex items-center gap-9 hidden'>
            <ul className='flex text-md gap-9 font-semibold cursor-pointer'>
              {
                NavLinks.map((link,index)=>(
                  <li key={index}><a href={link.url}>{link.title}</a></li>
                ))
              }
            </ul>
            <button className='bg-black text-white text-[16px] font-semibold py-3 px-4 rounded-md cursor-pointer'>SIGN UP</button>
        </div>

        {/* Mobile Menu Icon */}

        <div className='lg:hidden cursor-pointer text-4xl' onClick={()=> setOpenNav(!openNav)}>
          {openNav ? <IoCloseSharp /> : <AiOutlineMenu />}
        </div>
    </div>

    {/* Mobile Menu DropDown */}
    {
      openNav && (
    <div className='lg:hidden '>
      <ul className='fixed flex flex-col justify-center h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] right-0'>
        {NavLinks.map((link)=>(
          <li key={link.id}>
            <a href={link.url}>
              <p className='w-fit text-xl ml-12 border-b-[1.5px] pb-1 sm:text-[30px]'>{link.title}</p></a>
          </li>

        ))}
      </ul>
    </div>
      )
    }

    </div>
  )
}

export default NavBar