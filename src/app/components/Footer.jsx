import React, { useState } from 'react'

const Footer = () => {

    const locations = [
        {
          name: "Abu Dhabi",
          address: "P.O. Box 123456, Abu Dhabi, UAE",
          office: "Office #101 - 202",
          phone: "T 971 2 123 4567, F 971 2 765 4321",
        },
        {
          name: "Dubai",
          address: "P.O. Box 413606, Business Bay - Bay Square 8",
          office: "Office #201 - 202",
          phone: "T 971 4 452 1135, F 971 4 452 0458",
        },
        {
          name: "Lebanon",
          address: "P.O. Box 789101, Beirut, Lebanon",
          office: "Office #301 - 404",
          phone: "T 961 1 987 654, F 961 1 456 789",
        },
      ];
    
      const [selected, setSelected] = useState("Dubai");
    
      const currentLocation = locations.find((loc) => loc.name === selected);

  return (
    <footer className="section-padding bg-black text-white">
    <div className="container">
      <h2 className="text-xxxl">Let’s collaborate!</h2>
      <div className="flex">
        <div className="text-xxl ">
          +971 4 452 1135 clients@jtpartners.com
        </div>
        <div>+971 4 452 1135 clients@jtpartners.com</div>
      </div>
      <hr />
      <div className="flex space-x-4 mb-6 justify-center mt-10">
        {locations.map((location) => (
          <button
            key={location.name}
            className={`px-6 py-2 rounded-full border ${
              selected === location.name
                ? "border-white text-white"
                : "border-gray-500 text-gray-500"
            } transition-all`}
            onClick={() => setSelected(location.name)}
          >
            {location.name}
          </button>
        ))}
      </div>

      {/* Location Details */}
      {currentLocation && (
        <div className="text-center">
          <h2 className="text-lg font-semibold">
            {currentLocation.name}, UAE
          </h2>
          <p className="text-gray-400">{currentLocation.address}</p>
          <p className="text-gray-400">{currentLocation.office}</p>
          <p className="text-gray-400">
            <span className="text-red-500 font-bold">T</span>{" "}
            {currentLocation.phone.split(",")[0]},{" "}
            <span className="text-red-500 font-bold">F</span>{" "}
            {currentLocation.phone.split(",")[1]}
          </p>
        </div>
      )}
       
    </div>
  </footer>
  )
}

export default Footer