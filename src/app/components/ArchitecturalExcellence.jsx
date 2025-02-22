import Image from 'next/image'
import React from 'react'
import award01 from '../../../public/assets/img/Hero-Image-1.jpg'

const ArchitecturalExcellence = () => {
  return (
    <section className="section-padding" >
    <div className="container">
      <div className="flex justify-between items-end">
        <h2 className="text-xxxl text-left leading-none">Architectural Excellence</h2>
        <h5 className='text-xl text-[#878787]'>Awards & Achievements</h5>
      </div>
      <div className="grid grid-cols-12 justify-end mt-[130px] mb-[120px]">
          <div className="col-span-5">
          </div>
          <div className="col-span-7">
            <p className='text-[19px] mb-4'>01 <span className='text-[#717171]'>- 03</span></p>
              <div className="grid gap-5 grid-cols-3">
              <div className=" border-[#F9423A] border-solid boredr-b border-b-4"></div>
              <div className="border-b border-black  border-solid"></div>
              <div className="border-b border-black  border-solid"></div>
              </div>
          </div>
      </div>
      <div className="mt-10 grid grid-cols-10 gap-[200px]  justify-between">
          <div className="col-span-4">
              <Image src={award01} alt="" width={800} height={800} />
          </div>
          <div className="col-span-6">
            <div className="h-full flex flex-col">
            <h3 className="text-xxl leading-none w-[75%]">DoubleTree by Hilton – Jeddah recognised in International Award</h3>
                 <button 
                            className="mt-6 flex items-center text-[19px] font-light mt-auto  "
                          >
                            <span className="text-2xl mr-3"><Image src={'/assets/img/plusicon.svg'} alt='' width={40} height={40}/></span> Read More
                          </button>
            </div>
          </div>
      </div>
    </div>
  </section>
  )
}

export default ArchitecturalExcellence