import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { assets } from '../../../public/assets/assets';
import MarqueeText from "./sections/MarqueeText"

const Footer = () => {

    const locations = [
        {
          name: "Abu Dhabi",
          address: "P.O. Box 123456, Abu Dhabi, UAE",
          office: "Office #101 - 202",
          phone: "T 971 2 123 4567, F 971 2 765 4321",
        },
        {
          name: "Dubai",
          address: "P.O. Box 413606, Business Bay - Bay Square 8",
          office: "Office #201 - 202",
          phone: "T 971 4 452 1135, F 971 4 452 0458",
        },
        {
          name: "Lebanon",
          address: "P.O. Box 789101, Beirut, Lebanon",
          office: "Office #301 - 404",
          phone: "T 961 1 987 654, F 961 1 456 789",
        },
      ];
    
      const [selected, setSelected] = useState("Dubai");
    
      const currentLocation = locations.find((loc) => loc.name === selected);

  return (
    <footer className="pt-[100px] pb-0 bg-black text-white">
    <div className="container">
      <h2 className="text-xxxl mb-[100px]">Let’s collaborate!</h2>
      <div className="flex items-end mb-[120px]">
        <div className="text-xxl font-light">
        <Link className='leading-none' href={'tel:+971 4 452 1135'}>  +971 4 452 1135 </Link>
        <Link className='leading-none' href={'mailto:clients@jtpartners.com'}>clients<span className='text-[#F9423A]'>@</span>jtpartners.com</Link>
        </div>
        <div>
          <ul className="flex gap-10">
            <li className='font-light text-[15px] uppercase'><Link href={'#'} className='flex gap-[10px] text-[#9D9D9C] transition-all duration-300 hover:text-white hover:scale-125'><span>Instagram</span> <Image src={assets.arrwtp} alt='' height={12} width={12}/></Link></li>
            <li className='font-light text-[15px] uppercase'><Link href={'#'} className='flex gap-[10px] text-[#9D9D9C] transition-all duration-300 hover:text-white hover:scale-125'><span>LinkedIn</span> <Image src={assets.arrwtp} alt='' height={12} width={12}/></Link></li>
            <li className='font-light text-[15px] uppercase'><Link href={'#'} className='flex gap-[10px] text-[#9D9D9C] transition-all duration-300 hover:text-white hover:scale-125'><span>Facebook</span> <Image src={assets.arrwtp} alt='' height={12} width={12}/></Link></li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="flex space-x-4 mb-[50px] justify-center mt-[140px]">
        {locations.map((location) => (
          <button
            key={location.name}
            className={`px-[90px] py-[15px] rounded-full border text-xl font-light ${
              selected === location.name
                ? "border-white text-white"
                : "border-gray-500 text-gray-500"
            } transition-all`}
            onClick={() => setSelected(location.name)}
          >
            {location.name}
          </button>
        ))}
      </div>

      {/* Location Details */}
      {currentLocation && (
        <div className="text-center">
          <h2 className="text-xl font-light uppercase mb-[25px]">
            {currentLocation.name}, UAE
          </h2>
          <p className="text-[#9D9D9C] text-19px">{currentLocation.address}</p>
          <p className="text-[#9D9D9C] text-19px">{currentLocation.office}</p>
          <p className="text-[#9D9D9C] text-19px">
            <span className="text-red-500 font-medium">T</span>{" "}
            {currentLocation.phone.split(",")[0]},{" "}
            <span className="text-red-500 font-medium">F</span>{" "}
            {currentLocation.phone.split(",")[1]}
          </p>
        </div>
      )}
       <div className='mt-[60px]'>
        <Image className='mx-auto invert brightness-0 hover:invert-0 hover:brightness-100 hover:scale-125 duration-300 transition-all cursor-pointer' src={assets.plusico} width={75} height={75}/>
       </div>
      
    </div>
    <MarqueeText/>
  </footer>
  )
}

export default Footer