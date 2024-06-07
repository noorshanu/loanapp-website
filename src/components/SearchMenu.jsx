import React from 'react'


function SearchMenu() {
  return (
   <section className='bg-[#00AEF3]'>
    <div className='container-wrapper flex justify-center sm:justify-end items-center py-1'>
     
        <div className=" flex flex-col sm:flex-row items-center gap-6">
          <div className="  flex items-center gap-3 ">
            <a
              href="/privacy-policy" target='_blank'
              className=" text-xs sm:text-lg font-sfpro font-normal uppercase  text-[#000000]"
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