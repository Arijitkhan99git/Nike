import React, { useRef } from 'react'
import { gearUp1, gearUp2, gearUp3, gearUp4 } from "@/assets"
import { Swiper, SwiperSlide} from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';

// import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/swiper-bundle.css';

// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import { ChevronLeft, ChevronRight } from 'lucide-react';

function GearUp() {
  const swiperRefMen = useRef<SwiperClass | null>(null);

  const swiperRefWoMen = useRef<SwiperClass | null>(null);

   const gearForMen= [
    {
      "name": "Nike Dri-FIT ADV TechKnit Ultra",
      "price": "3 895",
      "detail": "Men's Short-Sleeve Running Top",
      "image": gearUp1
    },
    {
      "name": "Nike Dri-FIT Challenger",
      "price": "2 495",
      "detail": "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
      "image": gearUp2
    },
    {
      "name": "Nike Dri-FIT ADV TechKnit Ultra",
      "price": "3 895",
      "detail": "Men's Short-Sleeve Running Top",
      "image": gearUp1
    },
    {
      "name": "Nike Dri-FIT Challenger",
      "price": "2 495",
      "detail": "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
      "image": gearUp2
    }, 
  
  ]
   const gearForWomen= [
    {
      "name": "Nike Dri-FIT ADV Run Division",
      "price": "5 295",
      "detail": "Women's Long-Sleeve Running Top",
      "image": gearUp3
    },
    {
      "name": "Nike Fast",
      "price": "3 795",
      "detail": "Women's Mid-Rise 7/8 Running Leggings with Pockets",
      "image": gearUp4
    },
    {
      "name": "Nike Dri-FIT ADV Run Division",
      "price": "5 295",
      "detail": "Women's Long-Sleeve Running Top",
      "image": gearUp3
    },
    {
      "name": "Nike Fast",
      "price": "3 795",
      "detail": "Women's Mid-Rise 7/8 Running Leggings with Pockets",
      "image": gearUp4
    },
    
  ]



  return (
    <div className="w-full container mx-auto px-4 md:px-2 xl:px-10 py-8 md:py-10">
      <h1 className="font-medium text-2xl">GearUp</h1>

      <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-15 justify-between'>

        {/* Men's section */}
        <div >
          <div className='hidden sm:flex items-center justify-end gap-3 '>
              <span className='text-gray-800 font-semibold'>Shop Men's</span>
              <SlideNextButtonMen swiperRef={swiperRefMen} />
          </div>

          <div className="flex py-4"> 
                    
            <Swiper
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => { swiperRefMen.current = swiper; }}

              spaceBetween={10}
              slidesPerView={1.3}
              breakpoints={{
                      
                    500: {
                    slidesPerView: 2.2,
                     spaceBetween: 10
                    },
                    1000: { 
                      slidesPerView: 2,
                        spaceBetween: 15
                    },

                      
                  }}
                  
            > 
                      
              {            
              gearForMen.map((card, i)=>(
                <SwiperSlide key={i}>                             
                    <div className=' flex flex-col hover:cursor-pointer'>
                        <img src={card.image} alt='home' />
                        <div className='flex flex-col 2xl:flex-row gap-2 justify-between pt-4'>
                              <div>
                                  <h1 className='text-base font-medium text-black'>{card.name}</h1>
                                  <h2 className='text-base text-gray-500 line-clamp-2 w-full max-w-[220px]'>{card.detail}</h2>
                              </div>
                              <div className='lg:mr-4'>
                                    <span className='font-semibold text-gray-900'>₹ {card.price}</span>
                              </div>
                        </div>                                          
                        
                    </div>
                </SwiperSlide>
              ))
              }
        
            </Swiper>
      
                  
          </div>
        </div>

        {/* WoMen's section */}
        <div >
          <div className='hidden sm:flex items-center justify-end gap-3 '>
              <span className='text-gray-800 font-semibold'>Shop Women's</span>
              <SlideNextButtonWomen swiperRef={swiperRefWoMen} />
          </div>

          <div className=" flex py-4 "> 
                    
            <Swiper
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => { swiperRefWoMen.current = swiper; }}
              
              spaceBetween={10}
              slidesPerView={1.3}
              breakpoints={{
                      
                    500: {
                    slidesPerView: 2.2,
                    spaceBetween: 10
                    },
                    1000: { 
                      slidesPerView: 2,
                      spaceBetween: 15
                    },

                      
                  }}
                  
            > 
                      
              {            
              gearForWomen.map((card, i)=>(
                <SwiperSlide key={i}>                        
                    <div className=' flex flex-col hover:cursor-pointer'>
                        <img src={card.image} alt='home' />
                        <div className='flex flex-col 2xl:flex-row gap-2 justify-between pt-4'>
                              <div>
                                  <h1 className='text-base font-medium text-black'>{card.name}</h1>
                                  <h2 className='text-base text-gray-500 line-clamp-2 w-full max-w-[220px]'>{card.detail}</h2>
                              </div>
                              <div className='lg:mr-4'>
                                    <span className='font-semibold text-gray-900'>₹ {card.price}</span>
                              </div>
                        </div>                                          
                        
                    </div>
                </SwiperSlide>
              ))
              }
        
            </Swiper>
      
                  
          </div>
        </div>


      
      </div>

    </div>
  )
}

export default GearUp

const SlideNextButtonMen: React.FC<{ swiperRef: React.RefObject<SwiperClass | null> }> = ({ swiperRef }) => {
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

const SlideNextButtonWomen: React.FC<{ swiperRef: React.RefObject<SwiperClass | null> }> = ({ swiperRef }) => {
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