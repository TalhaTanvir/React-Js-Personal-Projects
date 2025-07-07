import React from 'react'

const questions = [
  {
    id: 1,
    date: '2024-02-25',
    question: 'جامعہ کے فتاوی اور دیگر مواد کو کسی دوسرے فورم پر',
    answer: 'جامعہ کے فتاوی اور دیگر مواد کو کسی دوسرے فورم پر',
  },
  {
    id: 2,
    date: '2024-02-25',
    question: 'جامعہ کے فتاوی اور دیگر مواد کو کسی دوسرے فورم پر',
    answer: 'جامعہ کے فتاوی اور دیگر مواد کو کسی دوسرے فورم پر',
  },
  {
    id: 3,
    date: '2024-02-25',
    question: 'جامعہ کے فتاوی اور دیگر مواد کو کسی دوسرے فورم پر',
    answer: 'جامعہ کے فتاوی اور دیگر مواد کو کسی دوسرے فورم پر',
  },
  {
    id: 4,
    date: '2024-02-25',
    question: 'جامعہ کے فتاوی اور دیگر مواد کو کسی دوسرے فورم پر',
    answer: 'جامعہ کے فتاوی اور دیگر مواد کو کسی دوسرے فورم پر',
  },
];

function Questions() {
  return (
    // <div>
    //     <div>
    //         <img src="/images/questions.png" alt="" />
    //     </div>
    //     <div>
                
    //     </div>
    // </div>


    <div className="min-h-screen bg-[url('/images/questions.png')] bg-cover flex items-center justify-center py-18 mt-22" dir="rtl">
      <div className="bg-white/85 rounded-2xl shadow-lg w-full max-w-6xl py-6 px-10">
        <div className="bg-[#0F766E] text-white text-4xl font-semibold rounded-xl px-34 py-4 w-fit mx-auto mb-6">
          سوالات
        </div>

        {questions.map((q) => (
          <div key={q.id} className="mb-6 border-b border-gray-300 pb-4">
            <p className="text-sm mb-4">تاریخ: {q.date}</p>
            <p className="text-lg font-bold mb-4">{q.question}</p>
            <div className='flex items-center justify-between'>
            <p className="text-sm mb-2">{q.answer}</p>
            <a href="#" className="text-sm text-[#0F766E] hover:underline">
              مزید جانئے
            </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Questions