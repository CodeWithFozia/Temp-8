import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div>
<div className='lg:flex space-x-20 justify-center'>
<Image src={"/image/Logo@2x (1).svg"} alt='hero-image' width={85} height={87}/>
<Image src={"/image/Logo@2x (2).svg"} alt='hero-image' width={107} height={109}/>
<Image src={"/image/Logo@2x (3).svg"} alt='hero-image' width={135} height={139}/>
<Image src={"/image/Logo@2x (4).svg"} alt='hero-image' width={63} height={65}/>
<Image src={"/image/Logo@2x (5).svg"} alt='hero-image' width={98} height={101}/>
<Image src={"/image/Logo@2x (6).svg"} alt='hero-image' width={113} height={115}/>
<Image src={"/image/Logo@2x (7).svg"} alt='hero-image' width={84} height={87}/>
</div>
</div>
  )
}

export default Logo