import React from 'react'
import FormEnquery from './FormEnquery'
import { BsFillPatchCheckFill } from "react-icons/bs";



function Enquiry() {
  return (
    <div className='container-wrapper'>
  <div className="flex">
    <div className="w-1/2 p-8 bg-gradient-to-r from-[#ca0018] via-[#d7142b] to-[#7d0210] rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-white">Application Form</h2>
      <FormEnquery/>
    </div>
    <div className="w-1/2 p-8 bg-white">
      <h2 className="text-2xl font-bold mb-6">Following Loans We Offer</h2>
      <ul className="list-none list-inside">
        <li className=' flex items-center gap-2 font-sfpro font-bold text-base border-b-2 border-[#ca0018] py-1'> <BsFillPatchCheckFill className=' text-green-500 text-base' /> Home loan</li>
        <li className=' flex items-center gap-2 font-sfpro font-bold text-base border-b-2 border-[#ca0018] py-1'> <BsFillPatchCheckFill className=' text-green-500 text-base' /> Personal loan</li>
       
        
        <li className=' flex items-center gap-2 font-sfpro font-bold text-base border-b-2 border-[#ca0018] py-1'> <BsFillPatchCheckFill className=' text-green-500 text-base' />Vehicle loan</li>
        <li className=' flex items-center gap-2 font-sfpro font-bold text-base border-b-2 border-[#ca0018] py-1'> <BsFillPatchCheckFill className=' text-green-500 text-base' />Business loan</li>
        <li className=' flex items-center gap-2 font-sfpro font-bold text-base border-b-2 border-[#ca0018] py-1'> <BsFillPatchCheckFill className=' text-green-500 text-base' />Education loans</li>
        <li className=' flex items-center gap-2 font-sfpro font-bold text-base border-b-2 border-[#ca0018] py-1'> <BsFillPatchCheckFill className=' text-green-500 text-base' />Loan against securities</li>
        <li className=' flex items-center gap-2 font-sfpro font-bold text-base border-b-2 border-[#ca0018] py-1'> <BsFillPatchCheckFill className=' text-green-500 text-base' />Gold loan</li>
        <li className=' flex items-center gap-2 font-sfpro font-bold text-base border-b-2 border-[#ca0018] py-1'> <BsFillPatchCheckFill className=' text-green-500 text-base' />Loan against property</li>
        <li className=' flex items-center gap-2 font-sfpro font-bold text-base border-b-2 border-[#ca0018] py-1'> <BsFillPatchCheckFill className=' text-green-500 text-base' />Wedding loan</li>
        <li className=' flex items-center gap-2 font-sfpro font-bold text-base border-b-2 border-[#ca0018] py-1'> <BsFillPatchCheckFill className=' text-green-500 text-base' />Flexi loans</li>
        <li className=' flex items-center gap-2 font-sfpro font-bold text-base border-b-2 border-[#ca0018] py-1'> <BsFillPatchCheckFill className=' text-green-500 text-base' />Bridge loan</li>
        <li className=' flex items-center gap-2 font-sfpro font-bold text-base border-b-2 border-[#ca0018] py-1'> <BsFillPatchCheckFill className=' text-green-500 text-base' />Credit cards</li>
        <li className=' flex items-center gap-2 font-sfpro font-bold text-base border-b-2 border-[#ca0018] py-1'> <BsFillPatchCheckFill className=' text-green-500 text-base' />Loan against fixed deposit</li>
        <li className=' flex items-center gap-2 font-sfpro font-bold text-base border-b-2 border-[#ca0018] py-1'> <BsFillPatchCheckFill className=' text-green-500 text-base' />Medical loans</li>
        <li className=' flex items-center gap-2 font-sfpro font-bold text-base border-b-2 border-[#ca0018] py-1'> <BsFillPatchCheckFill className=' text-green-500 text-base' />  Secured loans</li>
                <li className=' flex items-center gap-2 font-sfpro font-bold text-base border-b-2 border-[#ca0018] py-1'> <BsFillPatchCheckFill className=' text-green-500 text-base' />Demand loans</li>
                <li className=' flex items-center gap-2 font-sfpro font-bold text-base border-b-2 border-[#ca0018] py-1'> <BsFillPatchCheckFill className=' text-green-500 text-base' />Overdraft</li>
                <li className=' flex items-center gap-2 font-sfpro font-bold text-base border-b-2 border-[#ca0018] py-1'> <BsFillPatchCheckFill className=' text-green-500 text-base' />Trade credit</li>
                <li className=' flex items-center gap-2 font-sfpro font-bold text-base border-b-2 border-[#ca0018] py-1'> <BsFillPatchCheckFill className=' text-green-500 text-base' />Bajaj Finserv personal loan</li>
                <li className=' flex items-center gap-2 font-sfpro font-bold text-base border-b-2 border-[#ca0018] py-1'> <BsFillPatchCheckFill className=' text-green-500 text-base' />Consolidation loan</li>
                <li className=' flex items-center gap-2 font-sfpro font-bold text-base border-b-2 border-[#ca0018] py-1'> <BsFillPatchCheckFill className=' text-green-500 text-base' />Consumer durable loans</li>
                <li className=' flex items-center gap-2 font-sfpro font-bold text-base border-b-2 border-[#ca0018] py-1'> <BsFillPatchCheckFill className=' text-green-500 text-base' />Cash advances</li>
                <li className=' flex items-center gap-2 font-sfpro font-bold text-base border-b-2 border-[#ca0018] py-1'> <BsFillPatchCheckFill className=' text-green-500 text-base' />LazyPay personal loan</li>
                <li className=' flex items-center gap-2 font-sfpro font-bold text-base border-b-2 border-[#ca0018] py-1'> <BsFillPatchCheckFill className=' text-green-500 text-base' />Loan against PPF</li>
                <li className=' flex items-center gap-2 font-sfpro font-bold text-base border-b-2 border-[#ca0018] py-1'> <BsFillPatchCheckFill className=' text-green-500 text-base' />Visa loan</li>
      </ul>
    </div>
  </div>
    </div>
  
  )
}

export default Enquiry