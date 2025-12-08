import React from 'react'
import Image from 'next/image'

function header() {
  return (
    <div className=' py-4 px-16 bg-[#fafafa] text-black'>

        {/* Container */}
        <div className='flex h-auto w-full flex-row justify-between  items-center'>


        {/* Logo */}
        
        <div className=''>OpenPath</div>
        

        {/* Navigation Links */}
        <div className='flex w-auto h-auto flex-row gap-4 items-center'>
            <div>Find A Provider</div>
            <div>About</div>
            <div>Contact</div>
            <div>FAQ</div>
            
            <div className='mx-10 px-4 py-2 w-auto h-auto rounded-full bg-blue-400 flex flex-row items-center gap-2'>
                Login

                <div className='w-6 h-6 rounded-full bg-[#515151]'></div>
            </div>
        </div>

        </div>
        
        {/* Login Item */}
        
    </div>
  )
}

export default header