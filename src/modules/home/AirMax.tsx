import React, { useRef } from 'react'

import {airMax1, airMax2, airMax3}  from '@/assets/index'

import { Swiper, SwiperSlide} from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';

// import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/swiper-bundle.css';

// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import { ChevronLeft, ChevronRight } from 'lucide-react';

function AirMax() {
const swiperRef = useRef<SwiperClass | null>(null);

 const sliderdata= [
  {
    "name": "Nike Air Max Pulse",
    "price": "13995",
    "detail": "Women's Shoes",
    "image": airMax1
  },
  {
    "name": "Nike Air Max Pulse",
    "price": "13995",
    "detail": "Men's Shoes",
    "image": airMax2
  },
  {
    "name": "Nike Air Max 97 SE",
    "price": "13995",
    "detail": "Men's Shoes",
    "image": airMax3
  },
  {
    "name": "Nike Air Max Pulse",
    "price": "13995",
    "detail": "Men's Shoes",
    "image": airMax1
  },
  {
    "name": "Nike Air Max Pulse",
    "price": "13995",
    "detail": "Men's Shoes",
    "image": airMax2
  },


]

  return (
    <div className='w-full py-10'>
      <div className='container mx-auto px-4 md:px-2 xl:px-10'>
        <h1 className='text-xl font-medium text-black'>Best of Air Max</h1>

        <div className='flex justify-end mt-4 md:mt-2'>
            <SlideNextButton swiperRef={swiperRef} />
        </div>
      </div>

        <div className="w-full flex py-4 container mx-auto pl-4 md:pl-2 xl:pl-10 "> {/* Added wrapper for Swiper */}
          
          <Swiper
            spaceBetween={5}
            slidesPerView={3.2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            breakpoints={{
                    
                    400: { slidesPerView: 1 },
                    600: { slidesPerView: 2 },
                    800: { slidesPerView: 3 },
                   
                    
                }}
               
          > 
                   
           {            
            sliderdata.map((card, i)=>(
              <SwiperSlide key={i}>
                <div className='flex items-center      
                                '>
                  
                  <div className=' flex flex-col
                    transition duration-300 ease-in hover:scale-102  
                       
                  '>
                      <img src={card.image} alt='home' />
                      <div className='flex justify-between pt-4'>
                            <div className='space-y-1'>
                                <h1 className='text-xl font-semibold text-gray-800'>{card.name}</h1>
                                <h2 className='text-sm text-gray-500'>{card.detail}</h2>
                            </div>
                            <div>
                                 <span className='font-semibold text-gray-800'>{card.price}</span>
                            </div>
                      </div>                                          
                      
                  </div>
                </div>
              </SwiperSlide>
            ))
           }
      
          </Swiper>

           
        </div>
    </div>
  )
}

export default AirMax


const SlideNextButton: React.FC<{ swiperRef: React.RefObject<SwiperClass | null> }> = ({ swiperRef }) => {
  return (
    <div className=" flex gap-4 ">
      <div className='bg-gray-100 border border-gray-200  rounded-full p-2 flex justify-center items-center'>
        <button onClick={() => swiperRef.current?.slidePrev()} className='text-2xl text-gray-500  '>
          <ChevronLeft />
        </button>
      </div>

      <div className='bg-white/60 border border-gray-200 shadow-sm rounded-full p-2 flex justify-center items-center'>
        <button onClick={() => swiperRef.current?.slideNext()} className='text-2xl text-gray-500 '>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};