import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      <div className="sm:w-1/2 mb-10 px-8 bg-green-700 text-white">
       
        <h2 className="title-font text-4xl font-medium text-white mt-6 mb-3">
          About Us - Comforty
        </h2>
        <p className="leading-relaxed text-base">
          At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
        </p>
        <Link href={"/components/products"}>
        <button className="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
          View Collection
        </button>
        </Link>
      </div>
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image
            alt="content"
            className="object-cover object-center h-full w-full"
            src="/image/Image Block.svg" width={400} height={400}
          />
        </div>
    
      </div>
    </div>
  </div>
             
  <div className='text-center px-4 py-14'>
      <h1 className='text-4xl font-bold'>What makes our Brand Different</h1>
    </div>

    <div className='mt-3  gap-4 justify-between'>
       <Image src={"/image/Group 163@2x.svg"} alt='hero-image' width={1320} height={244}/>
    </div>


</section>

  )
}

export default About