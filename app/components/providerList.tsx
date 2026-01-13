import React from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'


function providerList() {
  return (
    <div>
            {/* Provider List Wrapper */}
    <div className='w-full h-auto flex flex-col md:flex-row gap-4 p-4 '>
            <div className='max-w-72 h-auto'>
              
              <div className='p-2 bg-white'>
                <Image src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1768273358/Open%20Path/Providers/David_Brooks_caaxxk.jpg`} alt="Therapist 1" width={200} height={225} className=''/>
                <div className='my-4'><Star/></div>
                <h1 className='text-2xl font-bold'>David Brook</h1>
                {/* <p className='text-wrap'>Anger Management, Addiction, Stress</p> */}
              </div>

            </div>

    </div>
    </div>
  )
}

export default providerList