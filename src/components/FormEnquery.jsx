import React from 'react'

function FormEnquery() {
  return (
    <>
    <form className=''> 
     <div className=' flex items-center justify-between w-full gap-3 '>
     <div className="mb-4 w-full">
          <label className="block text-white">Name</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded" type="text" required />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-white">Email</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded" type="email" required />
        </div>

     </div>
        <div className="mb-4">
          <label className="block text-white">Phone</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded" type="tel" required />
        </div>
        <div className="mb-4">
          <label className="block text-white">Select State</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded" required>
            <option>Select State</option>
            {/* Add your state options here */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-white">Loan Amount</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded" type="number" required />
        </div>
        <div className="mb-4">
          <label className="block text-white">Loan Purpose</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded" required>
            <option>Home loan</option>
            {/* Add other loan purposes here */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-white">Loan Time Duration</label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded" required>
            <option>1-2 Year</option>
            {/* Add other durations here */}
          </select>
        </div>
        <button className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600" type="submit">Submit</button>
      </form>
    </>
  )
}

export default FormEnquery