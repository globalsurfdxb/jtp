import React from 'react'
import plusico from "../../../public/assets/img/plusicon.svg";
import Image from 'next/image';
const News = () => {
  return (
    <section
      className="section-padding bg-gradient-to-b from-[#F5F5F5] to-transparent"
    >
      <div className="container text-right flex justify-end">
        <div className='w-[90%]'>
          <h2 className="text-xxxl text-left leading-none pl-[35px] mb-[50px]">News</h2>
          <div className="nws-items border-b border-black/20 border-t">
            <div className="items p-[50px]  flex justify-between items-start">
              <h3 className="text-xl w-[60%] text-start">
                NEOM announces Elanan, a unique wellness retreat embedded in
                nature
              </h3>
              <p className="w-[20%] text-[#878787]">15-05-2025</p>
              <Image src={plusico} alt="" width={30} height={30} />
            </div>
            <div className="items p-[50px] bg-black text-white flex justify-between">
            <h3 className="text-xl w-[60%] text-start">
                Future Hospitality Summit 2025 – Dubai
              </h3>
              <p className="w-[20%] text-[#878787]">15-05-2025</p>
              <Image src={plusico} alt="" width={50} height={50} />
            </div>
            <div className="items p-[50px] flex justify-between items-start">
            <h3 className="text-xl w-[60%] text-start">
                NEOM announces Elanan, a unique wellness retreat embedded in
                nature
              </h3>
              <p className="w-[20%] text-[#878787]">15-05-2025</p>
              <Image src={plusico} alt="" width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News