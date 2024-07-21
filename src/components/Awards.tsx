
import React,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Award from './Award'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import axios from 'axios';

interface Award{
  title:string;
  image:string;
  body:string;
}

const awards:React.FC = () => {
  const[award,setAward]=useState<Award[]>([])
useEffect(()=>{
axios.get("src/components/awards.json")
.then(cavab=>setAward(cavab.data))
.catch(err=> console.log(err))

},[])
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
           award.map((birMelumat,index)=>(
            <SwiperSlide key={index}> <Award awardTitle={birMelumat.title} awardImg={birMelumat.image} awardParaqraf={birMelumat.body}/></SwiperSlide>

           ))

           
        }
                
                

         </Swiper>
       
    </div>
  )
}

export default awards