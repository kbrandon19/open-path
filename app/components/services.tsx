import React from 'react'
import Image from 'next/image'

function services() {
    return (
        <div className="w-full h-auto flex flex-col gap-4 md:flex-row basis px-16">

            {/* container div 0 */}
            <div className='basis-1/4'>
                {/* Image Div */}
                <div className="relative w-auto h-64 basis-1/4 bg-blue-300 ">
                    <Image
                        src="/images/Rectangle 3.jpg"
                        alt="professional"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Text Div */}
                <div className='h-auto my-6 text-center'>
                    <h2 className='font-bold'>Affordable Therapy Program</h2>
                    <p className='text-sm'>Connects users with verified providers offering reduced-rate therapy and sliding-scale mental health services.</p>
                    <p className='hidden'>Learn More</p>
                </div>


            </div>
            {/* container div 1*/}
            <div className='basis-1/4  '>
                {/* Image Div */}
                <div className="relative h-64 basis-1/4 bg-red-100">
                    <Image
                        src="/images/Rectangle 4.jpg"
                        alt="professional"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Text Div */}
                <div className='h-auto my-6 text-center'>
                    <h2 className='font-bold'>Mental Health Resource Library</h2>
                    <p className='text-sm'>Provides educational articles, coping tools, and guidance to support mental wellness and informed care decisions.</p>
                    <p className='hidden'>Learn More</p>
                </div>


            </div>

            {/* container div 2*/}
            <div className='basis-1/4  '>
                {/* Image Div */}
                <div className="relative h-64 basis-1/4 bg-green-200">
                    <Image
                        src="/images/Rectangle 5.jpg"
                        alt="professional"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Text Div */}
                <div className='h-auto my-6 text-center'>
                    <h2 className='font-bold'>Provider Profile Verification & Quality Assurance</h2>
                    <p className='text-sm'>Ensures provider credentials are verified, accurate, and regularly reviewed to maintain platform trust and safety.</p>
                    <p className='hidden'>Learn More</p>
                </div>


            </div>

            {/* container div 3*/}
            <div className='basis-1/4 '>
                {/* Image Div */}
                <div className="relative h-64 basis-1/4 bg-orange-300">
                    <Image
                        src="/images/Rectangle 6.jpg"
                        alt="professional"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Text Div */}
                <div className='h-auto my-6 text-center'>
                    <h2 className='font-bold'>Provider Search & Matching</h2>
                    <p className='text-sm'>Helps users quickly find mental health providers matching specialties, insurance, location, and availability preferences.</p>
                    <p className='underline hidden'>Learn More</p>
                </div>


            </div>


        </div>
    )
}

export default services