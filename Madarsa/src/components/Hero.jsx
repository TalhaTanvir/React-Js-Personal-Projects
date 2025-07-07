import React from 'react'

function Hero() {
  return (
    <>
    <div>
        <img src="/images/home-image.png" alt="" />
    </div>

    <div className='grid lg:grid-cols-2 place-items-center gap-y-5.5 mt-22 sm:grid-cols-1' dir='rtl'>

      <div className='flex items-center justify-between border-4 border-[#0F766E] rounded-xl w-185 h-56 px-16'>
        <div className='text-2xl text-[#0F766E] space-y-8 font-semibold'>
          <p>بانی جامعہ حضرت بنوری رحمہ اللہ</p>
          <p> تعارف، علمی و تحقیقی مقالات</p>
        </div>

        <div>
        {/* <img className='bg-[#0F766E]' src="/images/hero1.png" alt="" /> */}
        <img className='w-24' src="/images/hero4.png" alt="" />
        </div>
      </div>

      <div className='flex items-center justify-between border-4 border-[#0F766E] rounded-xl w-185 h-56 px-16'>
        <div className='text-2xl text-[#0F766E] space-y-8 font-semibold'>
          <p>تعارفِ جامعہ بنوری ٹاؤن</p>
          <p>جامعہ اور اس کی شاخیں ایک نظر میں</p>
        </div>
        <div>
        <img className='w-14' src="/images/hero3.png" alt="" />
        </div>
      </div>

      <div className='flex items-center justify-between border-4 border-[#0F766E] rounded-xl w-185 h-56 px-16'>
        <div className='text-2xl text-[#0F766E] space-y-8 font-semibold'>
          <p>دارالافتاء</p>
          <p>آپ کے مسائل اور ان کا حل</p>
        </div>
        <div>
        <img className='w-24' src="/images/hero4.png" alt="" />
        </div>
      </div>

      <div className='flex items-center justify-between border-4 border-[#0F766E] rounded-xl w-185 h-56 px-16'>
        <div className='text-2xl text-[#0F766E] space-y-8 font-semibold'>
          <p>محتمم</p>
          <p>بانی جامعہ حضرت بنوری رحمہ اللہ</p>
        </div>
        <div>
        <img className='w-14' src="/images/hero3.png" alt="" />
        </div>
      </div>

    </div>
    </>
  )
}

export default Hero