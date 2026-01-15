import React from 'react'
import SearchField from '../components/searchField'
import ProviderList from '../components/providerList'

function page() {
  return (
    
     <div className=" w-full h-auto lg:px-16">
      <div className=' w-full h-screen flex flex-col justify-center items-center p-8 gap-10 '>
        <h1 className=' text-center max-w-3xl text-5xl font-semibold p-4'>Finding a therapist shouldn’t be hard, let us help you on your journey to healing.</h1>
                <SearchField/>


      </div>

      <div className=' w-full h-auto flex justify-center'>
      </div>
      <ProviderList/>
    </div>
    
  )
}

export default page