import React from 'react'
import StaticPhoto from '../StaticPhoto'
import offer1 from "../../assets/offer-1.jpg";
import offer2 from "../../assets/offer-2.jpg";
export default function PhotoAdd() {
  return (
    <div className='flex flex-col md:flex-row gap-5 h-[50dvh] md:my-10 mb-10 text-center justify-between w-full '>
          <StaticPhoto photo={offer1} />
          <StaticPhoto photo={offer2} />
    </div>
  )
}
