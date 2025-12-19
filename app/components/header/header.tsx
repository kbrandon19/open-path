import React from 'react'
import Image from 'next/image'

function header() {
  return (
    <div className='relative w-full h-auto'>
    <div className=' absolute w-full top-0 z-1 py-4 px-16 text-black '>

        {/* Container */}
        <div className='flex h-auto w-full flex-row justify-between  items-center'>


        {/* Logo */}
        
        <div className=''>OpenPath</div>
        

        {/* Navigation Links */}
        <div className='flex w-auto h-auto flex-row gap-10 justify-between'> 
          
          {/* Mobile Menu */}
          <div className='flex md:hidden px-4 py-2 w-auto h-auto rounded-full flex flex-row items-center gap-2'>Menu <div className='w-6 h-6 rounded-full bg-[#515151]'></div></div>

          {/* Desktop Menu */}
            <div className='hidden md:flex w-auto h-auto flex-row gap-4 items-center hidden '>
            <div>Find A Provider</div>
            <div>About</div>
            <div>Contact</div>
            <div>FAQ</div>
            </div>
            
            <div className=' hidden md:flex px-4 py-2 w-auto h-auto rounded-full bg-[#E0B04E] flex flex-row items-center gap-2'>
                Login

                <div className='w-6 h-6 rounded-full bg-[#515151]'></div>
            </div>

           
        </div>

        </div>
        
        {/* Login Item */}
        
    </div></div>
  )
}

export default header