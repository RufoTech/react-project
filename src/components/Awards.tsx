
import React,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Award from './Award'
import melumatMukafatlari from '../components/awards.json'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';




const awards:React.FC = () => {
  return (
    <div className='awards-card'>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper py-5"
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
      >
        {
            melumatMukafatlari.map((birMelumat)=>(
                <SwiperSlide> <Award awardTitle={birMelumat.title} awardImg={birMelumat.image} awardParaqraf={birMelumat.body}/></SwiperSlide>

            ))
        }
                
                

         </Swiper>
       
    </div>
  )
}

export default awards