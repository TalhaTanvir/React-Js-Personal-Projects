import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";



function Footer() {
  return (
    // <footer className='bg-[#008ECC] px-28 text-white relative overflow-hidden'>
    //     <div className='py-16 flex items-center gap-68'>
    //     <div>
    //         <h1 className='text-4xl font-bold mb-6'>MegaMart</h1>
    //         <h2 className='font-semibold'>Contact Us</h2>
    //         <div className='flex items-start gap-2 mt-4'>
    //             <FaWhatsapp className='mt-1'/>
    //             <div className='flex flex-col leading-tight text-sm'>
    //             <p>Whats App</p>
    //             <p>+1 202-918-2132</p>
    //             </div>
    //         </div>
    //          <div className='flex items-start gap-2 mt-3'>
    //             <TbPhoneCall className='mt-1'/>
    //             <div className='flex flex-col leading-tight text-sm'>
    //             <p>Call Us</p>
    //             <p>+1 202-918-2132</p>
    //             </div>
    //         </div>
    //         <h2 className='font-semibold mt-5 mb-3'>Download App</h2>
    //         <div className='flex w-34 gap-3'>
    //             <img src="/images/app store.png" alt=""  className='cursor-pointer'/>
    //             <img src="/images/play store.png" alt="" className='cursor-pointer' />
    //         </div>
    //     </div>
    //     <div className='flex gap-22'>
    //     <div>
    //         <h2 className='text-md border-b-2 mb-4 pb-2 w-fit'>Most Popular Categories</h2>
    //         <ul className='list-disc text-xs font-light space-y-4 ml-6'>
    //             <li><a href="#">Staples</a></li>
    //             <li><a href="#">Beverages</a></li>
    //             <li><a href="#">Personal Care</a></li>
    //             <li><a href="#">Home Care</a></li>
    //             <li><a href="#">Baby Care</a></li>
    //             <li><a href="#">Vegetables & Fruits</a></li>
    //             <li><a href="#">Snacks & Foods</a></li>
    //             <li><a href="#">Dairy & Bakery</a></li>
    //         </ul>
    //     </div>
    //     <div>
    //         <h2 className='text-md border-b-2 mb-4 pb-2 w-fit'>Customer Services</h2>
    //         <ul className='list-disc text-xs font-light space-y-4 ml-6'>
    //             <li><a href="#">About Us</a></li>
    //             <li><a href="#">Terms & Conditions</a></li>
    //             <li><a href="#">FAQ</a></li>
    //             <li><a href="#">Privacy Policy</a></li>
    //             <li><a href="#">E-waste Policy</a></li>
    //             <li><a href="#">Cancellation & Return Policy</a></li>
    //         </ul>
    //     </div>

    //     </div>
    //     </div>
    //     <hr className='text-[#05ABF3]'/>
    //     <p className='text-center py-4 font-light'>© 2025 All rights reserved. Reliance Retail Ltd.</p>

    //     {/* <div className="absolute top-0 right-0 size-110 bg-[#05ABF3] outline opacity-20 rounded-full translate-x-1/3 -translate-y-1/3"></div> */}
    //     <div className='absolute top-0 right-0 translate-x-1/3 -translate-y-1/3'>
    //         <div className='size-118 rounded-full border-2 border-[#0C9BDA] flex items-center justify-center'>
    //             <div className='size-110 bg-[#0C9BDA] rounded-full'></div>
    //         </div>
    //     </div>
    // </footer>





    <footer className='bg-[#008ECC] text-white relative overflow-hidden px-4 sm:px-10 lg:px-28'>
      <div className='py-10 flex flex-col lg:flex-row items-start justify-between gap-12'>

        {/* Contact Info + App Download */}
        <div>
          <h1 className='text-3xl sm:text-4xl font-bold mb-6'>MegaMart</h1>
          <h2 className='font-semibold'>Contact Us</h2>

          <div className='flex items-start gap-2 mt-4'>
            <FaWhatsapp className='mt-1' />
            <div className='flex flex-col leading-tight text-sm'>
              <p>WhatsApp</p>
              <p>+1 202-918-2132</p>
            </div>
          </div>

          <div className='flex items-start gap-2 mt-3'>
            <TbPhoneCall className='mt-1' />
            <div className='flex flex-col leading-tight text-sm'>
              <p>Call Us</p>
              <p>+1 202-918-2132</p>
            </div>
          </div>

          <h2 className='font-semibold mt-5 mb-3'>Download App</h2>
          <div className='flex gap-3'>
            <img src="/images/app store.png" alt="App Store" className='w-24 cursor-pointer' />
            <img src="/images/play store.png" alt="Play Store" className='w-24 cursor-pointer' />
          </div>
        </div>

        {/* Links Section */}
        <div className='flex flex-col sm:flex-row gap-10'>
          <div>
            <h2 className='text-md border-b-2 mb-4 pb-2 w-fit'>Most Popular Categories</h2>
            <ul className='list-disc text-xs font-light space-y-4 ml-6'>
              <li><a href="#">Staples</a></li>
              <li><a href="#">Beverages</a></li>
              <li><a href="#">Personal Care</a></li>
              <li><a href="#">Home Care</a></li>
              <li><a href="#">Baby Care</a></li>
              <li><a href="#">Vegetables & Fruits</a></li>
              <li><a href="#">Snacks & Foods</a></li>
              <li><a href="#">Dairy & Bakery</a></li>
            </ul>
          </div>
          <div>
            <h2 className='text-md border-b-2 mb-4 pb-2 w-fit'>Customer Services</h2>
            <ul className='list-disc text-xs font-light space-y-4 ml-6'>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">E-waste Policy</a></li>
              <li><a href="#">Cancellation & Return Policy</a></li>
            </ul>
          </div>
        </div>

      </div>

      <hr className='border-[#05ABF3]' />
      <p className='text-center py-4 font-light text-sm'>© 2025 All rights reserved. Reliance Retail Ltd.</p>

      {/* Decorative Bubble */}
      <div className='absolute top-0 right-0 translate-x-1/3 -translate-y-1/3'>
        <div className='w-72 h-72 rounded-full border-2 border-[#0C9BDA] flex items-center justify-center'>
          <div className='w-64 h-64 bg-[#0C9BDA] rounded-full'></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer