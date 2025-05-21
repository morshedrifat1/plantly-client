
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './ConponentCss/HeroSection.css';
import slide1 from "../assets/banner1.jpg"
import slide2 from "../assets/banner2.jpg"
import slide3 from "../assets/banner3.jpg"

import { Autoplay,Pagination } from 'swiper/modules';

const HeroSection =()=> {
  return (
    <>
      <Swiper
      autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='h-58 sm:h-[350px] md:h-[450px] lg:h-[580px] w-full object-fill rounded-2xl' src={slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-58 sm:h-[350px] md:h-[450px] lg:h-[580px] w-full object-fill rounded-2xl' src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-58 sm:h-[350px] md:h-[450px] lg:h-[580px] w-full object-cover rounded-2xl' src={slide3} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
export default HeroSection