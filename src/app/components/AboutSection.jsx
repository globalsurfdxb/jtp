import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const AboutSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section className='section-padding' ref={ref}>
      <div className="container">
        <motion.h2 
          className='text-xxxl leading-none'
          initial="hidden" 
          animate={inView ? "visible" : "hidden"} 
          variants={textVariants}
        >
          Design the future Now
        </motion.h2>
        <div className="relative z-10 text-black flex items-end flex-col">
          <motion.div 
            className='w-[70%]'
            initial="hidden" 
            animate={inView ? "visible" : "hidden"} 
            variants={textVariants}
          >
            <p className="text-xl font-light">
              JT Partners JT P is an international multidisciplinary consultant which offers a unique portfolio of architecture, planning, engineering, project management, infrastructure and cost consultancy services.
            </p>
            <button 
              className="mt-6 flex items-center text-red-500"
            >
              <span className="text-2xl mr-2">+</span> Know More Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
