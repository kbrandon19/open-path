import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'

function search_cta() {
  return (
    <div className='bg-[#658E9C] w-full h-auto py-8 flex flex-col md:flex-row gap-6  items-center justify-between text-white px-4 md:px-16 mt-64 pb-16'>
        
        <div className='basis-1/2 relative w-auto h-64'>
            <Image
            
            src="/images/Group 7.jpg"
            alt="hand"
            fill
            className="object-cover"
            
            />
        </div>

        <div className='basis-1/2'>
            <h1 className='text-4xl font-bold'>Simplifying access to addiction treatment services.</h1>
            <p className='my-4 text-base'>Our platform connects individuals seeking help with a curated network of verified mental health providers, ensuring personalized and effective care.</p>
            <Input/> <button className='bg-white text-[#658E9C] px-4 py-2 rounded-md font-semibold'>Get Started</button>
        </div>
    </div>
  )
}

export default search_cta