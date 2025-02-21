import Image from 'next/image'
import React from 'react'
import srvc01 from '../../../public/assets/img/c03.jpg'

const OurExpertise = () => {
  return (
    <section className="section-padding bg-black text-white">
    <div className="container">
      <h2 className="text-xxxl text-center ">Our Expertise</h2>
      <div className="old-itms">
        <div className="flex gap-4 ">
          <p>01</p>
          <p>Engineering</p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="h-full ">
          <h3 className="current-running text-xxl">02</h3>
          <div className="mt-auto">
          <h3 className="text-xxl">Architecture</h3>
          <div className="contentb">
            <p className="text-xl">
              JT Partners JT P is an international multidisciplinary
              consultant which offers a unique portfolio of architecture,
            </p>
          </div>
          </div>
        </div>
        {/* grid */}
        <div>
          <figure>
              <Image src={srvc01} alt="service" width={1000} height={800}/>
          </figure>
        </div>
          {/* grid */}
      </div>
    </div>
  </section>
  )
}

export default OurExpertise