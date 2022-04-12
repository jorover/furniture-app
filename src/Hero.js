import React from 'react';
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const Hero = () => {
  return <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <main className="HeroContainer heroImageOne">
          <div className="Container">
              <article className="HeroContent">
                <article className="HeroText">
                  <h1> Let's give your home<br /> Furnitures that <br /> define it's purpose </h1>           
                  <button type="button" className="btn HeroBtn"> VIEW MORE </button>
                </article>
              </article>
            </div>
        </main>
        
        </SwiperSlide>
        <SwiperSlide>
        <main className="HeroContainer heroImageTwo">
          <div className="Container">
              <article className="HeroContent">
                <article className="HeroText">
                  <h1> Your Home  <br />  deserves  <br /> nothing  short <br /> of the best </h1>           
                  <button type="button" className="btn HeroBtn"> VIEW MORE </button>
                </article>
              </article>
            </div>
        </main>
        </SwiperSlide>
        <SwiperSlide>
        <main className="HeroContainer heroImageThree">
          <div className="Container">
              <article className="HeroContent">
                <article className="HeroText">
                <h1> Let's give your home<br /> the elegance <br /> of comfort. </h1>            
                  <button type="button" className="btn HeroBtn"> VIEW MORE </button>
                </article>
              </article>
            </div>
        </main>
        </SwiperSlide>
      </Swiper>
    </>
};

export default Hero;


