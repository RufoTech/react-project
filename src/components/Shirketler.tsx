import React from 'react'
import Shirket from './Shirket'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay} from 'swiper/modules';

const Shirketler:React.FC = () => {
  return (
  <section className='shirketler-section'>
     <div className="shirket">
     <div className='container'>
     <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        
        
        className="mySwiper d-flex"
      >
         <SwiperSlide><Shirket companyLogo="/assets/images/shirketler/shirketler1.svg"/></SwiperSlide>
         <SwiperSlide><Shirket companyLogo="/assets/images/shirketler/shirketler2.svg"/></SwiperSlide>
         <SwiperSlide><Shirket companyLogo="/assets/images/shirketler/shirketler3.svg"/></SwiperSlide>
         <SwiperSlide><Shirket companyLogo="/assets/images/shirketler/shirketler4.svg"/></SwiperSlide>
         </Swiper>

         
         
    </div>
   </div>
  </section>
  )
}

export default Shirketler