import MenuBar from "../components/MenuBar";
import SearchMenu from "../components/SearchMenu";
import Footer from "../components/Footer";
import Disclaimer from "../components/Disclaimer";
import CtaAbout from "../components/CtaAbout";

function About() {
  return (
    <>
      <SearchMenu />
      <MenuBar />
      <div className="container-wrapper">
        <div>
          <h1 className="text-[24px] sm:text-[40px] font-bold text-black text-center mt-2 ">
            About Us
          </h1>
          <div className=" bg-[#00aef3] h-[4px] w-[200px] mx-auto mb-2"></div>
        </div>
        <div className=" flex justify-between flex-col sm:flex-row gap-4 sm:gap-[6rem] my-4 sm:my-[6rem] ">
        <img
            src="images/event/2.png"
            alt=""
            className=" h-[350px] mr-auto border p-2 rounded-md"
          />
        <div className="  max-w-4xl mx-auto my-[4rem] flex flex-col justify-center gap-6">
          <p className=" text-xl">
          Alkhair Loan’s online personal loans offer a fast, convenient, and affordable financing solution that helps borrowers achieve their goals and overcome financial challenges. By providing flexible and accessible funding, Alkhair Loan empowers borrowers to manage unexpected expenses, seize opportunities, and enjoy stress-free moments that might otherwise be difficult to attain. With a focus on delivering value and meeting diverse needs, Alkhair Loan’s personal loans are designed to make life easier and more enjoyable, providing the financial tools needed to live one's best life.
          </p>
          <p className=" text-xl">
            we dedicate ourselves to discovering, developing, and delivering
            innovative and effective  solutions. 
          </p>
        </div>
        </div>


        <div className=" flex justify-between flex-col sm:flex-row gap-4 sm:gap-[6rem] my-4 sm:my-[6rem] ">
          <div>
            <div>
              <h1 className="text-[24px] sm:text-[30px] font-bold text-black  mt-2 ">
                Our Vision
              </h1>
              <div className=" bg-[#00aef3] h-[4px] w-[150px]  mb-2"></div>
            </div>
            <p className=" max-w-3xl text-xl mt-[2rem]">
            Looking to the future, Alkhair Loan aims to be a beacon of hope and financial well-being. We envision a world where financial stability and growth are accessible to all, and our daily efforts are dedicated to making this vision a reality. We are committed to being your trusted partner in financial wellness, providing products and insights that empower you to achieve your financial goals and live your best life.
            </p>
          </div>

          <img
            src="images/vis.jpg"
            alt=""
            className=" h-[350px] mr-auto border p-2 rounded-md"
          />
        </div>

        <div className=" flex justify-between flex-col-reverse sm:flex-row gap-4 sm:gap-[6rem] my-4 sm:my-[6rem] ">
          <img
            src="images/miss.jpg"
            alt=""
            className=" h-[350px] mr-auto border p-2 rounded-md "
          />

          <div>
            <div>
              <h1 className="text-[24px] sm:text-[30px] font-bold text-black  mt-2 ">
                Our Mission
              </h1>
              <div className=" bg-[#00aef3] h-[4px] w-[150px]  mb-2"></div>
            </div>
            <p className=" max-w-4xl text-xl mt-[2rem]">
            At Alkhair Loan, our mission is to empower individuals and communities by providing ethical, Sharia-compliant financial solutions that support their financial aspirations. We strive to offer accessible, transparent, and interest-free banking services that promote financial well-being and growth. Through our commitment to integrity, customer-centricity, and innovation, we aim to build long-term relationships with our clients, helping them navigate financial challenges and achieve their dreams.
            </p>
          </div>
        </div>
        <CtaAbout/>
      </div>
      <Footer />
      <Disclaimer />
    </>
  );
}

export default About;
