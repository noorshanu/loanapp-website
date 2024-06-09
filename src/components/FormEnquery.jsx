import React, { useState } from 'react';

function FormEnquery() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    state: '',
    phoneNumber: '',
    loanAmount: '',
    loanPurpose: 'Home loan',
    loanTimeDuration: '1-2 Year'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      state: formData.state,
      phone_number: formData.phoneNumber,
      loan_amount: formData.loanAmount,
      loan_purpose: formData.loanPurpose,
      loan_time_duration: formData.loanTimeDuration
    };

    try {
      const response = await fetch('http://nitinekkaloanapp.pythonanywhere.com/v1/add_leads/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        alert('Thanks for filling up the form!');
        // Reset form after submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          state: '',
          phoneNumber: '',
          loanAmount: '',
          loanPurpose: 'Home loan',
          loanTimeDuration: '1-2 Year'
        });
      } else {
        alert('Failed to submit the form.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <>
      <form className='#enquery' onSubmit={handleSubmit}>
        <div className='flex items-center justify-between w-full gap-3 '>
          <div className="mb-4 w-full">
            <label className="block text-white">First Name</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-white">Last Name</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-white">Email</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Phone</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Select State</label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Select State</option>
            <option>Andhra Pradesh</option>
            <option>Arunachal Pradesh</option>
            <option>Assam</option>
            <option>Bihar</option>
            <option>Chhattisgarh</option>
            <option>Goa</option>
            <option>Gujarat</option>
            <option>Haryana</option>
            <option>Himachal Pradesh</option>
            <option>Jharkhand</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Maharashtra</option>
            <option>Madhya Pradesh</option>
            <option>Manipur</option>
            <option>Meghalaya</option>
            <option>Mizoram</option>
            <option>Nagaland</option>
            <option>Odisha</option>
            <option>Punjab</option>
            <option>Rajasthan</option>
            <option>Sikkim</option>
            <option>Tamil Nadu</option>
            <option>Tripura</option>
            <option>Telangana</option>
            <option>Uttar Pradesh</option>
            <option>Uttarakhand</option>
            <option>West Bengal</option>
            <option>Andaman & Nicobar (UT)</option>
            <option>Chandigarh (UT)</option>
            <option>Delhi</option>
            <option>Jammu & Kashmir</option>
            <option>Ladakh</option>
            <option>Lakshadweep</option>
            <option>Puducherry (UT)</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-white">Loan Amount</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded"
            type="number"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Loan Purpose</label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded"
            name="loanPurpose"
            value={formData.loanPurpose}
            onChange={handleChange}
            required
          >
            <option>Home loan</option>
            <option>Personal loan</option>
            <option>Vehicle loan</option>
            <option>Business loan</option>
            <option>Education loans</option>
            <option>Loan against securities</option>
            <option>Gold loan</option>
            <option>Loan against property</option>
            <option>Wedding loan</option>
            <option>Flexi loans</option>
            <option>Bridge loan</option>
            <option>Credit cards</option>
            <option>Loan against fixed deposit</option>
            <option>Medical loans</option>
            <option>Secured loans</option>
            <option>Demand loans</option>
            <option>Overdraft</option>
            <option>Trade credit</option>
            <option>Bajaj Finserv personal loan</option>
            <option>Consolidation loan</option>
            <option>Consumer durable loans</option>
            <option>Cash advances</option>
            <option>LazyPay personal loan</option>
            <option>Loan against PPF</option>
            <option>Visa loan</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-white">Loan Time Duration</label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded"
            name="loanTimeDuration"
            value={formData.loanTimeDuration}
            onChange={handleChange}
            required
          >
            <option>1-2 Year</option>
            {/* Add other durations here */}
          </select>
        </div>
        <button className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600" type="submit">Submit</button>
      </form>
    </>
  );
}

export default FormEnquery;
