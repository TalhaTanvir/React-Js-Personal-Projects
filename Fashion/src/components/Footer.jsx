import React from 'react'
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";




function Footer() {
  return (
    <footer className='bg-black text-gray-300 py-20 px-6 md:px-10'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10'>
            {/* Logo and About */}
        <div>
            <h2 className='text-white text-xl font-bold mb-4'>FASHION</h2>
            <p className='text-white text-sm mb-6'>Complete your style with awesome clothes from us.</p>
            <div className='flex gap-2'>
                <a href="#" className='bg-[#E5C643] p-2 rounded-lg'><RiFacebookFill size={18}/></a>
                <a href="#" className='bg-[#E5C643] p-2 rounded-lg'><FaInstagram size={18}/></a>
                <a href="#" className='bg-[#E5C643] p-2 rounded-lg'><FaTwitter size={18}/></a>
                <a href="#" className='bg-[#E5C643] p-2 rounded-lg'><FaLinkedinIn size={18}/></a>
            </div>
        </div>
        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className='text-white hover:text-[#E5C643] transition'>About</a></li>
            <li><a href="#" className='text-white hover:text-[#E5C643] transition'>Contact us</a></li>
            <li><a href="#" className='text-white hover:text-[#E5C643] transition'>Support</a></li>
            <li><a href="#" className='text-white hover:text-[#E5C643] transition'>Careers</a></li>
          </ul>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2">
            <li><a href="#" className='text-white hover:text-[#E5C643] transition'>Share Location</a></li>
            <li><a href="#" className='text-white hover:text-[#E5C643] transition'>Orders Tracking</a></li>
            <li><a href="#" className='text-white hover:text-[#E5C643] transition'>Size Guide</a></li>
            <li><a href="#" className='text-white hover:text-[#E5C643] transition'>FAQs</a></li>
          </ul>
        </div>
        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className='text-white hover:text-[#E5C643] transition'>Terms & Conditions</a></li>
            <li><a href="#" className='text-white hover:text-[#E5C643] transition'>Privacy Policy</a></li>
          </ul>
        </div>
        </div>
    </footer>

  )
}

export default Footer