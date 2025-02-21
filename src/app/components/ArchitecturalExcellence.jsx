import Image from 'next/image'
import React from 'react'
import award01 from '../../../public/assets/img/Hero-Image-1.jpg'

const ArchitecturalExcellence = () => {
  return (
    <section className="section-padding" >
    <div className="container">
      <div className="flex justify-between items-end">
        <h2 className="text-xxxl text-left leading-none">Architectural Excellence</h2>
        <h5>Awards & Achievements</h5>
      </div>
      <div className="grid grid-cols-12 justify-end mt-10">
          <div className="col-span-5">
          </div>
          <div className="col-span-7">
              <div className="grid gap-5 grid-cols-3">
              <div className="border-b border-red border-solid"></div>
              <div className="border-b border-black  border-solid"></div>
              <div className="border-b border-black  border-solid"></div>
              </div>
          </div>
      </div>
      <div className="mt-10 grid grid-cols-10 gap-[100px]  justify-between">
          <div className="col-span-4">
              <Image src={award01} alt="" width={800} height={800} />
          </div>
          <div className="col-span-6">
              <h3 className="text-xxl leading-none ">DoubleTree by Hilton – Jeddah recognised in International Award</h3>
          </div>
      </div>
    </div>
  </section>
  )
}

export default ArchitecturalExcellence