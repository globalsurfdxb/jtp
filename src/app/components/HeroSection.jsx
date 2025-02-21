"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import c01web2 from "../../../public/assets/img/c01web-2.jpg";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Hilton Marjan Island Beach Resort & Spa",
    client: "MR Properties",
    type: "5 Star Hilton Hotel & Branded Residences",
    description:
      "Perched on the captivating Al Marjan Island, the Hilton 5-star hotel masterfully balances serene beachfront luxury with the thrilling allure of a vibrant casino.",
    image: c01web2,
  },
  {
    id: 2,
    title: "Hilton Marjan Island Beach Resort & Spa",
    client: "MR Properties",
    type: "5 Star Hilton Hotel & Branded Residences",
    description:
      "Perched on the captivating Al Marjan Island, the Hilton 5-star hotel masterfully balances serene beachfront luxury with the thrilling allure of a vibrant casino.",
    image: c01web2,
  },
  {
    id: 3,
    title: "Hilton Marjan Island Beach Resort & Spa",
    client: "MR Properties",
    type: "5 Star Hilton Hotel & Branded Residences",
    description:
      "Perched on the captivating Al Marjan Island, the Hilton 5-star hotel masterfully balances serene beachfront luxury with the thrilling allure of a vibrant casino.",
    image: c01web2,
  },
  {
    id: 4,
    title: "Hilton Marjan Island Beach Resort & Spa",
    client: "MR Properties",
    type: "5 Star Hilton Hotel & Branded Residences",
    description:
      "Perched on the captivating Al Marjan Island, the Hilton 5-star hotel masterfully balances serene beachfront luxury with the thrilling allure of a vibrant casino.",
    image: c01web2,
  },
];

const HeroSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = projects.length;

  useEffect(() => {
    const animation = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: `-${100 * (projects.length - 1)}vw`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `${projects.length * 500} top`,
          scrub: 0.6,
          pin: true,
          onUpdate: (self) => {
            const index = Math.round(self.progress * (totalSlides - 1)) + 1;
            setCurrentSlide(index);
          },
        },
      }
    );
    return () => animation.kill();
  }, [totalSlides]);
  useEffect(() => {
    gsap.utils.toArray(".content-box").forEach((box) => {
      gsap.fromTo(
        box,
        { opacity: 1, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);
  
  return (
    <section className="h-screen relative" ref={triggerRef}>
      <div className="absolute left-0 top-0 h-screen w-16 bg-white flex flex-col items-center justify-between py-10 border-r z-10">
        <div className="h-[200px] flex items-center">
          <span className="text-xs tracking-widest font-light rotate-[-90deg] whitespace-nowrap font-custom">
            FEATURED PROJECTS
          </span>
        </div>
        <div className="flex flex-col items-center space-y-5">
          <div className="w-[1px] h-12 bg-gray-300 relative">
            <div className="w-[2px] h-6 bg-red-500 absolute bottom-0"></div>
          </div>
          <span className="text-xs font-bold rotate-[-90deg] whitespace-nowrap">
            {`${currentSlide} - ${totalSlides}`}
          </span>
        </div>
      </div>
      <div className="prject-sec h-full flex flex-wrap" style={{ width: `${projects.length * 100}vw` }} ref={sectionRef}>
        {projects.map((project, index) => (
          <div key={project.id} className="slide h-full w-screen relative overflow-hidden text-white">
            <figure className="h-full w-full absolute -z-50">
              <Image className="h-full w-full absolute object-cover object-center" src={project.image} alt={project.title} width={1800} height={1000} />
            </figure>
            <div className="h-full w-full -z-40 absolute bg-gradient-to-b from-black to-transparent opacity-80"></div>
            <div className="absolute w-full h-full pt-10">
              <div className="container">
                <div className="h-screen relative">
                  <motion.div 
                    className="title"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h1 className="text-xxl text-white leading-none font-custom font-light">
                      {project.title}
                    </h1>
                  </motion.div>
                  <div className="content-box absolute w-[40%] right-0">
                    <h2 className="text-xl">{project.title}</h2>
                    <div className="flex">
                      <div>
                        <p>CLIENT</p>
                        <h6>{project.client}</h6>
                      </div>
                      <div>
                        <p>TYPE</p>
                        <h6>{project.type}</h6>
                      </div>
                    </div>
                    <hr />
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;