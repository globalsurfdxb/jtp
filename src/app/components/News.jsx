import React from 'react'
import plusico from "../../../public/assets/img/plusicon.svg";
import Image from 'next/image';
const News = () => {
  return (
    <section
      className="section-padding bg-gradient-to-b from-[#F5F5F5] to-transparent"
    >
      <div className="container">
        <div>
          <h2 className="text-xxxl text-left leading-none">News</h2>
          <div className="nws-items">
            <div className="items p-10  flex justify-between">
              <h3 className="text-xl w-[60%]">
                NEOM announces Elanan, a unique wellness retreat embedded in
                nature
              </h3>
              <p className="w-[20%]">15-05-2025</p>
              <Image src={plusico} alt="" width={50} height={50} />
            </div>
            <div className="items p-10 bg-black text-white flex justify-between">
              <h3 className="text-xl w-[60%]">
                Future Hospitality Summit 2025 – Dubai
              </h3>
              <p className="w-[20%]">15-05-2025</p>
              <Image src={plusico} alt="" width={50} height={50} />
            </div>
            <div className="items p-10 flex justify-between">
              <h3 className="text-xl w-[60%]">
                NEOM announces Elanan, a unique wellness retreat embedded in
                nature
              </h3>
              <p className="w-[20%]">15-05-2025</p>
              <Image src={plusico} alt="" width={50} height={50} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News