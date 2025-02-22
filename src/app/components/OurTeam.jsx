import Image from 'next/image';
import React from 'react'

   
const OurTeam = () => {

    const teamMembers = [
        {
          name: "Joe Tabet",
          role: "Founder & Managing Director",
          image: "/assets/img/Joe-Tabet 1.jpg", // Replace with actual image path
        },
        {
          name: "Joseph Damien",
          role: "Commercial Projects Director",
          image: "/assets/img/IMG_6473a 1.jpg", // Replace with actual image path
        },
        {
          name: "Ghada Tabet",
          role: "HR & Admin Director",
          image: "/assets/img/Ghada-Tabet 1.jpg", // Replace with actual image path
        },
        {
          name: "Joe Tabet",
          role: "Founder & Managing Director",
          image: "/assets/img/Joe-Tabet 1.jpg", // Replace with actual image path
        },
        {
          name: "Joseph Damien",
          role: "Commercial Projects Director",
          image: "/assets/img/IMG_6473a 1.jpg", // Replace with actual image path
        },
        {
          name: "Ghada Tabet",
          role: "HR & Admin Director",
          image: "/assets/img/Ghada-Tabet 1.jpg", // Replace with actual image path
        },
        {
          name: "Ghada Tabet",
          role: "HR & Admin Director",
          image: "/assets/img/Ghada-Tabet 1.jpg", // Replace with actual image path
        },
        {
          name: "Joe Tabet",
          role: "Founder & Managing Director",
          image: "/assets/img/Joe-Tabet 1.jpg", // Replace with actual image path
        },
        {
          name: "Joseph Damien",
          role: "Commercial Projects Director",
          image: "/assets/img/IMG_6473a 1.jpg", // Replace with actual image path
        },
        {
          name: "Ghada Tabet",
          role: "HR & Admin Director",
          image: "/assets/img/Ghada-Tabet 1.jpg", // Replace with actual image path
        },
      ];

  return (
    <section className="section-padding">
    <div className="container">
      <h2 className="text-xxxl text-left leading-none mb-[100px]">Meet Our Team</h2>
      <div className="flex flex-nowrap justify-center w-[300%]">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center w-[20%]">
            <figure className='h-[450px] border-b border-black/20 mb-[50px]'>
            <Image
              src={member.image}
              alt={member.name}
              width={500}
              height={800}
              className="h-full object-contain object-left"
            />
            </figure>
            <div className='text-start'>
            <h3 className="mb-[15px] text-xl">{member.name}</h3>
            <p className="text-[#878787]">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default OurTeam