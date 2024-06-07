import React from "react";
import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <section className="bg-[#F0FCFF] mt-8 py-6 sm:py-16">
      <div className="container-wrapper mx-auto">
        <div className=" flex flex-col sm:flex-row justify-between gap-28">
          <div>
            <img src="images/logo.png" alt="" className=" mb-3 h-[200px]" />

            <p className=" max-w-full pr-4 sm:pr-0 sm:max-w-sm mb-2 text-xs font-normal">
              Alkhair Loan’s online personal loans are a fast, convenient, and
              affordable source of financing that help borrowers achieve their
              goals and overcome financial obstacles. By providing flexible and
              accessible access to funds, Alkhair Loan empowers its borrowers to
              manage unexpected expenses, seize opportunities, and enjoy
              stress-free moments that might otherwise be difficult to attain.
            </p>
            <div className=" flex items-center gap-2 pt-2">
              <a href="/" className="  text-lg text-[#000000]">
                <FaXTwitter />
              </a>
              <a href="/" className="  text-lg text-[#000000]">
                <FaFacebook />
              </a>
              <a href="/" className="  text-lg text-[#000000]">
                <FaInstagram />
              </a>
              <a href="/" className=" text-lg text-[#000000]">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div>
            <h2 className=" text-xl text-black font-bold mb-4">Products</h2>

            <div className=" flex flex-col gap-3 items-start justify-start">
              <a href="/" className=" text-lg font-normal ">
              Instant Personal Loans
              </a>
              <a href="/" className=" text-lg font-normal ">
              Instant Short Term Loans
              </a>
              <a href="/" className=" text-lg font-normal ">
              Instant Home Loan
              </a>

              <a href="/" className=" text-lg font-normal ">
              Instant Education Loan
              </a>
              <a href="/" className=" text-lg font-normal ">
              Loan Against Property
              </a>

           
            </div>
          </div>

          <div>
            <h2 className=" text-xl text-black font-bold mb-4">
              Important Links
            </h2>

            <div className=" flex flex-col gap-3 items-start justify-start">
              <a href="/" className=" text-lg font-normal ">
                Home
              </a>
              <a href="/" className=" text-lg font-normal ">
                About us
              </a>
              <a href="/" className=" text-lg font-normal ">
               Contact us 
              </a>
              <a href="/privacy-policy" className=" text-lg font-normal ">
              Term & Condition 
              </a>
              <a href="/privacy-policy" className=" text-lg font-normal ">
                Privacy Policy
              </a>
            </div>
          </div>

          <div>
            <h2 className=" text-xl text-black font-bold mb-4">
              Conatct Us
            </h2>

            <div className=" flex flex-col gap-3 items-start justify-start">
              <a href="/contact-us" className=" text-lg font-normal ">
              Phone: +9123456788990
              </a>
              <a href="/grievance-cell" className=" text-lg font-normal ">
                Email. info@ghghddj.com
              </a>
          
            
             
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
