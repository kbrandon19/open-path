import React from 'react'

function introBanner() {
  return (


 <div className='w-full h-auto flex p-4 my-80 lg:px-16'>

  <div className=' mx-auto grid grid-cols-1 grid-rows-2 text-center md:text-left'>

    <div className='max-w-3xl '>
     <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold text-[#3E5B3A]'>
      Simplifying access to addiction treatment services.</h1>
      </div>
    
    <div className='max-w-xl  md:ml-64 m-2 md:m-0'>
      <p className='text-base md:text-xl text-gray-700'>
        OpenPath is a cloud-based, mobile-friendly web platform designed 
        to connect individuals seeking addiction treatment with providers who have available services. 
      </p>
    </div>
   

  </div>

</div> 


  )
}

export default introBanner