import React from 'react'


function SearchMenu() {
  return (
   <section className='bg-gradient-to-r from-[#ca0018] via-[#d7142b] to-[#7d0210]'>
    <div className='container-wrapper flex justify-center sm:justify-end items-center py-1'>
     
        <div className=" flex flex-col sm:flex-row items-center gap-6">
          <div className="  flex items-center gap-3 ">
            <a
              href="/privacy-policy" target='_blank'
              className=" text-xs sm:text-lg font-sfpro font-blod uppercase  text-[#ffffff]"
            >
            Call US On - +91234567890
            </a>
         
       
      
          </div>

          
        </div>
    </div>
   </section>
  )
}

export default SearchMenu