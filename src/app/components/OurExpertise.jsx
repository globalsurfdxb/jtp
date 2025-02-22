import Image from "next/image";
import React from "react";
import srvc01 from "../../../public/assets/img/c03.jpg";
import { assets } from "../../../public/assets/assets";

const OurExpertise = () => {
  return (
    <section className="section-padding bg-black text-white">
      <div className="container">
        <h2 className="text-xxxl text-center leading-none mb-[90px]">
          Our Expertise
        </h2>
        <div className="old-itms mb-[80px]">
          <hr className="bg-gradient-to-r from-white/40 to-transparent h-[1px] border-none"></hr>
          <div className="flex gap-[20px] my-3 opacity-40 font-light text-[20px]">
            <p>01</p>
            <p>Engineering</p>
          </div>
          <hr className="bg-gradient-to-r from-white to-transparent h-[1px] border-none"></hr>
        </div>
        <div className="grid grid-cols-2">
          <div className="h-full flex flex-col">
            <h3 className="current-running text-[80px] leading-none">02</h3>
            <div className="mt-auto">
              <div className="contentb">
                <h3 className="text-xxl mb-[80px]">Architecture</h3>
                <p className="text-xl relative before:content-[''] before:absolute before:bg-gradient-to-b before:h-[30%] before:z-10 before:w-full  before:from-black  before:to-transparent after:content-[''] after:absolute after:bg-gradient-to-t after:h-[30%] after:z-10 after:w-full  after:from-black  after:to-transparent after:right-0 w-[80%]">
                JT Partners JT P is an international multidisciplinary consultant which offers a unique portfolio of architecture,
                </p>
              </div>
            </div>
          </div>
          {/* grid */}
          <div>
            <figure className="before:content-[''] before:absolute before:bg-gradient-to-r before:h-full before:z-10 before:w-[30%]  before:from-black  before:to-transparent after:content-[''] after:absolute after:bg-gradient-to-l after:h-full after:z-10 after:w-[30%]  after:from-black  after:to-transparent after:right-0 relative h-full w-full h-[550px]">
              <Image className="w-full h-full absolute z-0 object-cover " src={srvc01} alt="service" width={1000} height={800} />
            </figure>
          </div>
          {/* grid */}
        </div>
        <div className="text-center mt-[50px] ">
          <Image className="mx-auto" src={assets.plusico} width={50} height={50} alt=""/>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
