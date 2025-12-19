import React from 'react'

function introBanner() {
  return (


 <div className='w-full h-auto flex flex-center justify-center p-4 md:my-32'>

  <div className=' mx-auto grid grid-cols-1 grid-rows-2 '>

    <div className='max-w-3xl '>
     <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold text-[#3E5B3A] leading-tight'>
      Simplifying access to addiction treatment services.</h1>
      </div>
    
    <div className='max-w-2xl  md:ml-64'>
      <p className='text-base md:text-xl'>
        OpenPath is a cloud-based, mobile-friendly web platform designed 
        to connect individuals seeking addiction treatment with providers who have available services. 
      </p>
    </div>
   

  </div>

</div> 


  )
}

export default introBanner