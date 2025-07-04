import React from 'react'


function Navbar() {

  
  return (
    <nav className='bg-[#0F766E] h-20 px-8 flex justify-between items-center text-white'>
        
            
        <div className='text-xl'>
          <p>شوال 1446ھ 12 اپریل 2025ء</p>
        </div>

        <ul className='flex gap-14 text-2xl cursor-pointer'>
                <li>آن لائین داخلہ</li>
                <li>دعائیں</li>
                <li>کتابیں</li>
                <li>بینات</li>
                <li>دارالافتاء</li>
                <li>سرورق</li>
            </ul>

        <div className='w-48'>
            <img src="./public/images/logo.png" alt="" />
        </div>
    </nav>
  )
}

export default Navbar