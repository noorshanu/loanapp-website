import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

function Hero() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero-bg">
            <div className="container-wrapper">
              <div className="  max-w-2xl h-full">
                <div className=" flex justify-center items-center gap-4">
                  <a href="/" className="bg-gradient-to-r from-[#ca0018] via-[#d7142b] to-[#7d0210] rounded-xl text-white px-8 py-2 font-bold">
                    Conatct us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero-bg2">
            <div className="container-wrapper">
              <div className="  max-w-2xl h-full mx-auto">
                <div className=" flex justify-center gap-6 items-center">
                  <a href="/" className="bg-gradient-to-r from-[#ca0018] via-[#d7142b] to-[#7d0210] rounded-xl text-white px-8 py-2 font-bold">
                    About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <div className="flex items-center space-x-5 justify-center my-4">
        <SliderNavigationButton id="prevEl" className="rotate-180" />
        <SliderNavigationButton id="nextEl" />
      </div> */}
    </>
  );
}

export default Hero;
