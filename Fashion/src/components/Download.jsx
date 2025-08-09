import React from 'react'

function Download() {
  return (
    <section className='w-full px-16'>
        <div className='flex flex-col lg:flex-row mt-20 items-center gap-10'>
            {/* Download App Section */}
            <div className='flex-1 text-center lg:text-left'>
                <h1 className='text-2xl lg:text-3xl font-extrabold'>DOWNLOAD APP & <br /> GET THE VOUCHER!</h1>
                <p className='mt-5 text-gray-600 max-w-xs'>Get 30% off for first transaction using Rondovision mobile app for now.</p>
                <div className='flex gap-4 mt-8'>
                    <div><img src="src/assets/images/androidstore.png" alt="" className='w-26'/></div>
                    <div><img src="src/assets/images/applestore.png" alt="" className='w-26'/></div>
                </div>
            </div>

            {/* Image Section */}

            <div className='flex-1 flex justify-center'>
                <img src="src/assets/images/mobile.png" alt="" className='w-64 md:w-80'/>
            </div>
        </div>
    </section>
  )
}

export default Download