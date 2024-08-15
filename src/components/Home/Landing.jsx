import React from 'react'
import { FaUtensils } from 'react-icons/fa';
import { BsArrowUpRightCircle } from "react-icons/bs";


const Landing = () => {
  return (
      <div className='m-28 flex '>
          <div className='flex flex-col space-y-5 w-[50%]'>
              <div>
                  <span className='text-xs bg-[#F2F3F5] p-1 rounded font-semibold'>Hi, new friend!</span>
              </div>
              <div>
              <h1 className='text-[#231E41] font-bold text-6xl'>We do not cook,</h1>
              <h1 className='text-[#231E41] font-bold text-6xl'>we create your</h1>
              <h1 className='text-[#231E41] font-bold text-6xl'>emotions!</h1>
              </div>
              <div>
                  <p className='text-[#9090A3] font-semibold'>Consectetur numquam poro nemo veniam</p>
                  <p className='text-[#9090A3] font-semibold'>eligendi rem adipisci quo modi.</p>
              </div>
              <div className='flex space-x-4'>
                  <div className='flex bg-yellow-400 p-3 space-x-3 rounded-lg'>
                  <FaUtensils className='mt-1'  />
                      <a href='/'>Our Menu</a>
                   </div>
                  <div className='flex space-x-4'>
                          <BsArrowUpRightCircle className='mt-4 text-xl font-semibold ' />
                          <button className='text-[#231E41] font-bold'>About us</button>
                      
                  </div>
              </div>
          </div>
          <div className='rounded-full overflow-hidden w-[500px] h-[500px] relative'>
  <img src="https://starbelly-react.vercel.app/img/illustrations/girl.png" className='absolute top-0 w-full h-auto object-cover' alt="" />
</div>


    </div>
  )
}

export default Landing