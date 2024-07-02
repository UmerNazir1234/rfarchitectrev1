import React from 'react'

const NewsLetter = () => {
  return (
    <div>

<div className="bg-[#EDAC18] p-6 mx-auto w-[1240px] rounded-xl h-[176px]">
      <div className="max-w-[1240px] md:flex justify-between mx-auto py-[50px]">
        <div>
          <h1 className="font-bold text-white text-3xl md:text-[40px]">
          Subscribe  to our Newsletter
          </h1>
          
        </div>
        <div>
            <input type="text" className="p-3 mr-2 text-slate-400 rounded-full" placeholder='Enter you email' />
            <button className="bg-black text-white rounded-full p-3 mt-8  ">Subscribe</button> <br/>
            
        </div>
      </div>
    </div>

    </div>
  )
}

export default NewsLetter