import React from 'react'

function Navbar() {
  return (
    <nav dir='rtl' className='flex bg-[#0F766E] h-20 text-white items-center justify-between px-8 fixed top-0 right-0 left-0'>

      <div>
        <img className='w-46' src="/images/logo.png" alt="" />
      </div>

      <div>
        <ul className='flex text-xl gap-12'>
          <li><a href="#">سرورق</a></li>
          <li><a href="#">دارالافتاء</a></li>
          <li><a href="#">بینات</a></li>
          <li><a href="#">کتابیں</a></li>
          <li><a href="#">دعائیں</a></li>
          <li><a href="#">آن لائین داخلہ</a></li>
        </ul>
      </div>

      <div>
        <p dir='rtl' className='text-lg'>13 شوال 1446ھ &nbsp;&nbsp;&nbsp;&nbsp; 12 اپریل 2025 ء</p>
      </div>
      
    </nav>
  )
}

export default Navbar