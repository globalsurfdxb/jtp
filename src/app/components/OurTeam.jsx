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
      <h2 className="text-xxxl text-left leading-none">Meet Our Team</h2>
      <div className="flex flex-nowrap justify-center gap-10 w-[400%]">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center w-[20%]">
            <Image
              src={member.image}
              alt={member.name}
              width={500}
              height={800}
              className="w-64 h-auto object-cover mx-auto"
            />
            <h3 className="mt-5 text-2xl font-medium">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default OurTeam