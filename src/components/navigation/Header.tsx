import React from 'react'
import {jordan} from '@/assets/index'
import {nikeLogo} from  '@/assets/index'
import { Link } from '@tanstack/react-router'
import { Handbag, Heart, Menu, Search, User } from 'lucide-react';


function Header() {
  return (
    <div className='w-full'>
        <div className='bg-gray-200/70'>
          {/* upper Header */}
            <div className='hidden container mx-auto px-4 md:px-2 xl:px-10 lg:flex justify-between'>
              <div className='h-10 w-10 flex justify-center items-center'>
                <img src={jordan} alt="Jordan Image" className='h-full w-full object-contain'/>
              </div>
              <div className='flex gap-3 justify-center items-center text-black font-semibold text-sm'>
               <Link to='/findStore' className='hover:text-gray-600'>
                    Find a Store
                </Link>

                <div className='h-3 w-[1px] bg-black'></div>
               <Link to='/help' className='hover:text-gray-600'>
                    Help
                </Link>

                <div className='h-3 w-[1px] bg-black'></div>
               <Link to='/joinUs' className='hover:text-gray-600'>
                    Join Us
                </Link>

                <div className='h-3 w-[1px] bg-black'></div>
               <Link to='/signIn' className='hover:text-gray-600'>
                    Sign In
                </Link>

                
              </div>
              
            </div>
        </div>
        
        <div className='flex items-center bg-white container mx-auto px-4 md:px-2 xl:px-10 py-2 md:py-3  w-full gap-4 lg:gap-8'>
          <div className='flex justify-start w-full'>
            <Link to='/'>
              <img src={nikeLogo} alt="Nike Logo" className='w-17 aspect-auto' />
            </Link>
          </div>
          
          
          <div className='text-black font-semibold text-[17px] hidden lg:flex gap-6 w-full '>
            <div className='group gap-y-1 flex flex-col shrink-0'>
              <p className=' hover:cursor-pointer '>
                New & Featured
              </p>
              <div className='h-[1.5px] bg-white group-hover:bg-gray-900 '></div>
            </div>
            
            <div className='group space-y-1'>
              <Link to='/men'>
                Men
              </Link>
               <div className='h-[1.5px] bg-white group-hover:bg-gray-900 '></div>
            </div>

            <div className='group space-y-1'>
              <Link to='/women'>
                Women
              </Link>
               <div className='h-[1.5px] bg-white group-hover:bg-gray-900 '></div>
            </div>

            <div className='group space-y-1'>
              <Link to='/kids'>
                Kids
              </Link>
               <div className='h-[1.5px] bg-white group-hover:bg-gray-900 '></div>
            </div>
            
            <div className='group space-y-1'>
              <Link to='/sale'>
                Sale
              </Link>
               <div className='h-[1.5px] bg-white group-hover:bg-gray-900 '></div>
            </div>
            
            <div className='group space-y-1'>
              <Link to='/snkrs'>
                SNKRS
              </Link>
               <div className='h-[1.5px] bg-white group-hover:bg-gray-900 '></div>
            </div>
            
          </div>

          <div className='flex items-center gap-4 w-full justify-end'>
            <div className='bg-gray-100/80 flex gap-1 rounded-full items-center hover:bg-gray-200/70 group'>
                <Search className='text-gray-800 hover:bg-gray-00 group-hover:bg-gray-50 p-2 rounded-full' size={38}/>
                <span className='hidden xl:flex text-gray-600 font-medium mr-20 '>Search</span>
            </div>

            <Heart size={32} strokeWidth={2} className='hidden md:block text-gray-800 p-1 rounded-full hover:cursor-pointer hover:bg-gray-200'/>
            <Handbag size={32} strokeWidth={2} className='hidden md:block text-gray-800 p-1 rounded-full hover:cursor-pointer hover:bg-gray-200'/>
            <User size={24} strokeWidth={2} className='block lg:hidden text-gray-800'/>
            <Menu size={24} strokeWidth={2} className='block lg:hidden text-gray-800'/>
          </div>

          
        </div>

         <div className="flex flex-col items-center text-center text-gray-900 p-3 bg-gray-100">
            <h3 className="font-medium text-xs md:text-base">Hello Nike App</h3>
            <p className="text-xs md:text-sm">Download the app to access everything Nike. <span className="font-medium underline hover:cursor-pointer">Get Your Great</span></p>
          </div>
       
    </div>
  )
}

export default Header