import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  const images = [
    "https://images.pexels.com/photos/167676/pexels-photo-167676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1211787/pexels-photo-1211787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3057963/pexels-photo-3057963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/30671086/pexels-photo-30671086/free-photo-of-majestic-cranes-at-cadiz-port-spain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  // Simple variant for a slight upward movement
  const upwardMotion = {
    initial: { y: 10 },
    animate: { y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="px-6 py-10 lg:py-16 ">
      {/* Text Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between mb-16 "
        {...upwardMotion}
      >
        <div className="max-w-2xl mb-8 md:mb-0 leading-7 text-md">
          <motion.h1
            className="text-4xl md:text-5xl font-medium mb-4 text-center md:text-left tracking-wide py-6"
            {...upwardMotion}
          >
            Ihr Partner für <br /> Transport und Logistik
          </motion.h1>
          <motion.p className="text-gray-600 mb-4 max-w-xl  text-center md:text-left" {...upwardMotion}>
            Zoll Trans Service GmbH bietet seit 2006 umfassende Dienstleistungen
            im Import und Export, spezialisiert auf Osteuropa. Vertrauen Sie auf
            unsere maßgeschneiderten Lösungen für Ihre Transportbedürfnisse.
          </motion.p>
          <Link to="/kontakt">
            <motion.button
              className="p-4 border rounded-4xl w-45 my-10 ml-[25%] md:ml-0 hover:text-indigo-500 cursor-pointer transition duration-300"
              {...upwardMotion}
            >
              Kontakt
            </motion.button>
          </Link>
        </div>

        {/* Main Image */}
        <motion.div
          className="w-full md:w-1/2 h-80 md:h-auto"
          {...upwardMotion}
        >
          <img
            src="https://images.pexels.com/photos/30671086/pexels-photo-30671086/free-photo-of-majestic-cranes-at-cadiz-port-spain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Zollabfertigung Services"
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
      </motion.div>

      {/* Image Grid Section */}
      <div>
        <motion.h1
          className="text-4xl md:text-5xl font-medium mb-4 text-center tracking-wide "
          {...upwardMotion}
        >
          Zoll Trans
        </motion.h1>
        <motion.p
          className="text-center mb-8 text-gray-600 pb-10 pt-6 "
          {...upwardMotion}
        >
          Ihr Partner für Transport, Logistik und Zollabfertigung seit 2006.
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-[3/4]"
              {...upwardMotion}
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openModal(image)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          {...upwardMotion}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <motion.div
            className="bg-white p-4 md:p-6 rounded-lg shadow-2xl z-10 max-w-3xl mx-4 relative"
            {...upwardMotion}
          >
            {/* Close Button */}
            <button
              className="absolute -top-3 -right-3 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors z-20"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Image */}
            <img
              src={selectedImage}
              alt="Selected"
              className="max-h-[80vh] w-auto object-contain rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default About;
