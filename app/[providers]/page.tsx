import React from 'react'
import SearchField from '../components/searchField'
import ProviderList from '../components/providerList'

function page() {
  return (
    
     <div className=" w-full h-auto lg:px-16">
      <div className=' w-full h-100 flex justify-center items-center p-8 '>
        <h1 className=' bg-blue-200 text-center max-w-3xl text-4xl font-bold p-4'>Finding a therapist shouldn’t be hard, let us help you on your journey to healing.</h1>

      </div>

      <div className='bg-orange-300 w-full h-auto flex justify-center'>
        <SearchField/>
      </div>
      <ProviderList/>
    </div>
    
  )
}

export default page