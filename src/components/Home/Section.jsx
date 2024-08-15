import React from 'react'
import { BsArrowUpRightCircle } from "react-icons/bs";





const Section = () => {
  return (
    <div className='m-28 flex flex-col space-y-9'>
        <div>
            <div className='flex flex-col space-y-6'>
                  <h1 className='font-bold text-4xl text-[#231E41]'>What do you <span className='bg-[#F9FAFC]'>like today?</span> </h1>  
                <div className='flex justify-between'>
                    <div>
                        <p className='text-[#9090A3] font-semibold'>Consectetur numquam poro nemo veniam</p>
                        <p className='text-[#9090A3] font-semibold'>eligendi rem adipisci quo modi.</p>
                    </div>
                        <div className='flex space-x-3 border bg-[#F5C332] px-4 py-4 rounded-lg'>
                          <BsArrowUpRightCircle className='mt-1 text-xl font-semibold' />
                          <button className='text-[#262147] font-semibold text-sm'>Go shopping now</button>
                        </div>
                </div>  
            </div> 
        </div>  
    <div className='flex flex-col space-y-6'>
    <div className='flex space-x-6'>  
        <div className='w-[50%] rounded-lg bg-[#F9FAFC] py-7'>
                <div className='flex justify-around'>
                    <div className='relative'>
                            <img src="https://starbelly-react.vercel.app/img/categories/1.png" className='w-[60px] relative z-10' alt='hello' />
                        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-0'>
                            <div className='text-yellow-400 bg-yellow-400 rounded-full w-[30px] h-[30px]'></div>
                    </div>
                </div>
                <div className='flex flex-col space-y-2'>
                    <a href="/" className='text-[#231E41] font-bold text-xl'>Starters</a>
                    <p className='text-[#9090A3] font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing</p> 
                </div>
            </div>
        </div>
        <div className='w-[50%] rounded-lg bg-[#F9FAFC] py-7'>
            <div className='flex justify-around'>
                    <div className='relative'>
                            <img src="https://starbelly-react.vercel.app/img/categories/2.png" className='w-[60px] relative z-10' alt='hello' />
                        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-0'>
                            <div className='text-yellow-400 bg-yellow-400 rounded-full w-[30px] h-[30px]'></div>
                    </div>
                </div>
                <div className='flex flex-col space-y-2'>
                    <a href="/" className='text-[#231E41] font-bold text-xl'>Main Dishes</a>
                    <p className='text-[#9090A3] font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing</p> 
                </div>
            </div>
        </div>
        </div>  
    <div className='flex space-x-6'>  
        <div className='w-[50%] rounded-lg bg-[#F9FAFC] py-7'>
                <div className='flex justify-around'>
                    <div className='relative'>
                            <img src="https://starbelly-react.vercel.app/img/categories/3.png" className='w-[60px] relative z-10' alt='hello' />
                        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-0'>
                            <div className='text-yellow-400 bg-yellow-400 rounded-full w-[30px] h-[30px]'></div>
                    </div>
                </div>
                <div className='flex flex-col space-y-2'>
                    <a href="/" className='text-[#231E41] font-bold text-xl'>Drinks</a>
                    <p className='text-[#9090A3] font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing</p> 
                </div>
            </div>
        </div>
        <div className='w-[50%] rounded-lg bg-[#F9FAFC] py-7'>
            <div className='flex justify-around'>
                    <div className='relative'>
                            <img src="https://starbelly-react.vercel.app/img/categories/4.png" className='w-[60px] relative z-10' alt='hello' />
                        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-0'>
                            <div className='text-yellow-400 bg-yellow-400 rounded-full w-[30px] h-[30px]'></div>
                    </div>
                </div>
                <div className='flex flex-col space-y-2'>
                    <a href="/" className='text-[#231E41] font-bold text-xl'>Desserts</a>
                    <p className='text-[#9090A3] font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing</p> 
                </div>
            </div>
        </div>     
    </div>  
        

          
            
        
        
              
    </div>
    </div>
  )
}

export default Section