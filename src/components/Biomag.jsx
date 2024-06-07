import React from "react";

const benefits = [
  {
    title: "Ethical Banking",
    description: "Islamic banking provides a strong emphasis on moral and socially conscious investing. Alkhair Bank steers clear of investments in industries including alcohol, gambling, and other unethical sectors and instead invests in assets that are generally considered halal (permissible).",
    imgSrc: "images/event/1.png",
  },
  
  {
    title: "Sharia-Compliant Banking",
    description: "Alkhair Bank Adheres To Islamic Banking Principles, Which Means It Operates Without Interest (Riba) And Follows Sharia Guidelines. This Makes It An Attractive Option For Individuals Who Want To Conduct Their Financial Affairs In Accordance With Islamic Principles.",
    imgSrc: "images/event/2.png",
  },


  {
    title: "No Interest (Riba)",
    description: "Conventional Banking Typically Involves The Payment Of Interest, Which Is Prohibited In Islamic Finance. Alkhair Bank Offers Interest-Free Banking Services, Making It An Option For Individuals Who Seek To Avoid Riba.",
    imgSrc: "images/event/3.png",
  },


  {
    title: "Transparency",
    description: "Islamic Banks Like Alkhair Bank Prioritize Transparency In Their Operations. Customers Can Often Access Detailed Information About Their Investments And How The Bank Manages Their Funds.",
    imgSrc: "images/event/4.png",
  },


  {
    title: "Customer-Centric Approach",
    description: "Alkhair Bank May Focus On Providing Personalized Services And Building Long-Term Relationships With Its Customers, Ensuring That Their Financial Needs Are Met Effectively.",
    imgSrc: "images/event/5.png",
  },

  {
    title: "Asset-Backed Financing",
    description: "In Islamic Finance, Transactions Are Often Backed By Tangible Assets. This Means That Loans And Financing Are Typically Tied To Real Assets, Providing A More Secure And Transparent Financial Framework..",
    imgSrc: "images/event/6.png",
  },
];

const BenefitCard = ({ title, description, imgSrc }) => (
  <div className="bg-gradient-to-r from-[#ca0018] via-[#d7142b] to-[#7d0210] rounded-2xl p-2 border-2 border-black h-full ">
    <img src={imgSrc} alt={title} className="mx-auto h-[200px]" />
    <p className="text-2xl text-white font-sfpro font-bold text-center">{title}</p>
    <p className="px-2 text-white text-sm">{description}</p>
  </div>
);

function Biomag() {
  return (
    <section className="py-4 sm:py-14 bg-[#F0FCFF]">
      <div className="container-wrapper">
        <div>
          <h1 className="text-[24px] sm:text-[40px] font-bold text-black text-center">
            Benefits Of Going AL-KHAIR CO-OPERATIVE CREDIT SOCIETY
          </h1>
          <p className="text-[#3D4B69] text-center text-base font-normal">
            Al-Khair Co-Operative Credit Society offers numerous benefits through its unique approach to banking, rooted in ethical and Sharia-compliant principles. One of the key advantages is its commitment to Ethical Banking, focusing on socially responsible investments and avoiding sectors such as alcohol, gambling, and other unethical industries.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-between gap-4 mt-4">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} title={benefit.title} description={benefit.description} imgSrc={benefit.imgSrc} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Biomag;
