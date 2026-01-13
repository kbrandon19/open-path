"use client"

import React from 'react'
import { SearchIcon } from 'lucide-react'
import FilterOption from "@/components/ui/filter-option"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton
} from "@/components/ui/input-group"
import Image from 'next/image'


function searchField() {
  return (
    <>
    <div className='w-full h-auto flex flex-col items-center justify-center content-center md:flex-row gap-4 p-4 '>
 <InputGroup className='w-auto'>
        <InputGroupInput placeholder="Location..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
            <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary">Search</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      
           
<div>
  <FilterOption
            title="Type"
            options={[
              { value: "providers", label: "Providers" },
              { value: "services", label: "Services" },
              { value: "faqs", label: "FAQs" },
            ]}
            onChange={(vals) => console.log("filters:", vals)}
          />   
          
  </div>
       
    </div>


    </>


  )
}

export default searchField