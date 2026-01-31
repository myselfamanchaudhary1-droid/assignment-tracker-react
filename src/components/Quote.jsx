import React from 'react'

const Quote = ({quote}) => {

  // show loading.. if quote not loaded
  if (!quote) return <div className='basis-1/3 bg-white border-[#e5e7eb] border shadow-[#9ba9b9] shadow rounded mt-8 mx-4 flex items-center justify-center'>Loading...</div>;
  
  return (
            <div className='basis-1/3 bg-white border-[#e5e7eb] border shadow-[#9ba9b9] shadow rounded mt-8 mx-4'>
                <h3 className='text-center font-bold text-xl'>Quote of the day</h3>
                <p className='text- [4px] m-3'>{quote.text} </p>
                <p className='text-sm text-gray-500 mx-2'>- {quote.author}</p>
        </div>
  )
}

export default Quote