import React from "react";
import { motion } from "framer-motion";

const PartnerAbout = () => {
  // Animation variant for sliding up with fade-in
  const upwardMotion = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <div className="bg-white">
      <div className="lg:w-[80%] mx-auto md:flex justify-between items-center mt-20 gap-x-8 mb-10">
        <div className=" lg:w-[40%]">
          <motion.h1
            {...upwardMotion}
            className="md:text-5xl text-3xl text-center md:text-left font-semibold mb-6"
          >
            Ihr Partner für Transport
          </motion.h1>
          <p className="text-center md:text-left px-4 md:px-0">
            Zoll Trans Service GmbH bietet umfassende Dienstleistungen im Import
            und Export, spezialisiert auf Osteuropa, mit maßgeschneiderten
            Lösungen für Ihre Logistikbedürfnisse.
          </p>
          <button className="px-12 py-3 rounded-full border font-semibold text-black mt-8 ml-[30%] md:ml-0  hover:text-indigo-500 transition duration-300 cursor-pointer">
            Kontaktieren
          </button>
        </div>

        <motion.div
          {...upwardMotion}
          className="max-w-[450px] mx-auto md:max-w-[600px] px-6 md:px-0 mt-8 md:mt-0"
        >
          <img
            className="rounded-3xl"
            src="https://media.istockphoto.com/id/1075953222/photo/aerial-view-of-cargo-ship-in-transit.jpg?s=612x612&w=0&k=20&c=wZBOOtb9HSNcUYFGOQIedaMYV1yVFQPcXbSHqy15ziw="
            alt="image"
          />
        </motion.div>
      </div>

      <div className="lg:w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center mt-20 gap-x-8 mb-10 ">
        <div className="h-[350px] md:h-[550px] w-[250px] md:w-[400px] relative ">
          <motion.img
            {...upwardMotion}
            className="rounded-3xl h-full w-full object-fill"
            src="https://thumbs.dreamstime.com/z/truck-parked-front-large-stack-shipping-containers-red-container-two-rows-colorful-343788201.jpg?w=576"
            alt="image"
          />

          <motion.img
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }} // Delayed appearance for the second image
            className="rounded-3xl h-[200px] md:h-[350px] w-[150px] md:w-[250px] object-fill absolute top-20 -right-10 md:top-28 md:-right-42"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4WdJN-SwNhSb5Hi1vftrat4IJDu8OBOph5hQQxjpZfSwEdVHWqmfDrH3GzPOdZfdLqU&usqp=CAU"
            alt="image"
          />
        </div>

        <motion.div
          {...upwardMotion}
          className="lg:w-[40%] px-5 mt-10 md:mt-0 text-center md:text-left"
        >
          <h1 className="md:text-5xl text-3xl font-semibold mb-8 md:mb-16">
            Über uns
          </h1>
          <p>
            Seit 2006 unterstützen wir Sie bei Transport, Logistik und
            Zollabfertigung, um Ihre Waren sicher und effizient ans Ziel zu
            bringen.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerAbout;
