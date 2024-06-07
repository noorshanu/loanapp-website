import React from "react";

function Vision() {
  return (
    <section className="bg-[#F0FCFF]  py-16">
      <div className="container-wrapper">
        <div>
          <h1>
            <h1 className=" text-black text-[24px] sm:text-[50px] font-bold text-center  ">
              Simple 3-Step Process
            </h1>
          </h1>

          <p className=" text-[#3D4B69] text-center text-base font-normal mx-auto max-w-2xl my-2 ">
            Get the Funds You Need in Just 3 Simple Steps with Our Easy Loan
            Process
          </p>
        </div>

        <div className=" flex flex-col sm:flex-row items-center justify-evenly gap-4 my-8">
          <div className="bg-gradient-to-r from-[#ca0018] via-[#d7142b] to-[#7d0210] rounded-2xl p-2 border-2 border-black h-full ">
            <p className="text-2xl text-white font-sfpro font-bold text-center">
              Step-1
            </p>
            <p className="px-2 text-white text-sm">
              Begin The Loan Application Process By Filling Out A Simple Form
              With Your Basic Information, Desired Loan Amount, And Monthly
              Income. This Should Only Take A Few Minutes Of Your Time.
            </p>
          </div>


          <div className="bg-gradient-to-r from-[#ca0018] via-[#d7142b] to-[#7d0210] rounded-2xl p-2 border-2 border-black h-full ">
            <p className="text-2xl text-white font-sfpro font-bold text-center">
            Step-2
            </p>
            <p className="px-2 text-white text-sm">
            After Submitting Your Loan Application, You Will Receive An Email Requesting Any Additional Documents Needed To Complete The Application Process. Your Eligibility For The Loan Will Also Be Assessed Based On Company Criteria.
            </p>
          </div>



          <div className="bg-gradient-to-r from-[#ca0018] via-[#d7142b] to-[#7d0210] rounded-2xl p-2 border-2 border-black h-full ">
            <p className="text-2xl text-white font-sfpro font-bold text-center">
            Step-3
            </p>
            <p className="px-2 text-white text-sm">
            Once Your Eligibility Has Been Confirmed, A Representative Will Contact You By Phone To Finalize The Loan Process. Once Approved, Your Loan Will Be Disbursed Quickly And Efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
