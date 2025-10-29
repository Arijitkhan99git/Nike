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
    "price": "13 995",
    "detail": "Women's Shoes",
    "image": airMax1
  },
  {
    "name": "Nike Air Max Pulse",
    "price": "13 995",
    "detail": "Men's Shoes",
    "image": airMax2
  },
  {
    "name": "Nike Air Max 97 SE",
    "price": "13 995",
    "detail": "Men's Shoes",
    "image": airMax3
  },
  {
    "name": "Nike Air Max Pulse",
    "price": "13 995",
    "detail": "Men's Shoes",
    "image": airMax1
  },
  {
    "name": "Nike Air Max Pulse",
    "price": "13 995",
    "detail": "Men's Shoes",
    "image": airMax2
  },


]

  return (
    <div className='w-full py-10'>
      <div className='container mx-auto px-4 md:px-2 xl:px-10 flex justify-between items-center'>
        <h1 className='text-2xl font-medium text-black'>Best of Air Max</h1>

        <div className='hidden sm:flex items-center gap-2 '>
            <span className='text-gray-800 font-semibold'>Shop</span>
            <SlideNextButton swiperRef={swiperRef} />
        </div>
      </div>

        <div className="w-full flex py-4 container mx-auto pl-4 md:pl-2 xl:pl-10 "> 
          
          <Swiper
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}

            // spaceBetween={10}
            slidesPerView={1.3}
            breakpoints={{
                    
                     500: {
                      slidesPerView: 2.2,
                      // spaceBetween: 10
                    },
                    600: { 
                      slidesPerView: 2.4,
                      // spaceBetween: 10 
                    },

                    1024: { slidesPerView: 3.2,
                      // spaceBetween:10 
                     },
                   
                    
                }}
               
          > 
                   
           {            
            sliderdata.map((card, i)=>(
              <SwiperSlide key={i}>
                <div className='flex items-center mr-5'>              
                  <div className=' flex flex-col'>
                      <img src={card.image} alt='home' />
                      <div className='flex flex-col lg:flex-row gap-2 justify-between pt-4'>
                            <div>
                                <h1 className='text-lg font-semibold text-gray-900'>{card.name}</h1>
                                <h2 className='text-base text-gray-500'>{card.detail}</h2>
                            </div>
                            <div className='lg:mr-3'>
                                 <span className='font-semibold text-gray-900'>₹ {card.price}</span>
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
    <div className=" flex gap-3 ">
      <div className='bg-gray-100  rounded-full p-2 flex justify-center items-center border border-white hover:border-blue-500'>
        <button onClick={() => swiperRef.current?.slidePrev()} >
          <ChevronLeft strokeWidth={1} className='text-gray-500' size={28}/>
        </button>
      </div>

      <div className='bg-gray-200 rounded-full p-2 flex justify-center items-center border border-white hover:border-blue-500'>
        <button onClick={() => swiperRef.current?.slideNext()} >
          <ChevronRight strokeWidth={1} className='text-black' size={28}/>
        </button>
      </div>
    </div>
  );
};