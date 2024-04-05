import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
const Category = () => {
  
  return (
    <div className='max-w-[1200px] mx-auto'>
    <div className='flex my-[20px] items-center justify-between'>
        <div className='text-[25px] font-bold'> What's On Your Mind?</div>
        <div className='flex'>
        <div className=' flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><FaArrowLeft/></div>
        <div className=' flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'><FaArrowRight/></div>
        </div>
      
    </div>
    </div>
  )
}

export default Category
