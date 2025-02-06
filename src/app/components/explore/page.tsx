import React from 'react'
import Image from 'next/image'

const Explore = () => {
  return (
    <div>
       <div>
       <h1 className='w-[648px] h-[52px] flex font-semibold justify-center text-3xl'>
       Explore new and popular styles
       </h1>
        </div>
        
        <div className='flex space-x-2 justify-center items-center ml-[-75px]'>
        <Image src={"/image/hot-category (3).svg"} alt='hero-image' width={1320} height={648}/>
        
        </div>
    </div>
  )
}

export default Explore