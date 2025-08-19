import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Testimonials } from "../../Components/Testimonials";

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Simple move-up animation
  const moveUp = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <div className="w-full">
      <div className="bg-[#aed9e7] py-10 md:py-24 ">
        {/* Header Section */}
        <motion.div {...moveUp} className="text-center mb-10 px-3 md:px-0">
          <h1 className="font-md text-4xl lg:text-6xl mb-4">Transport und Logistik</h1>
          <p className="text-gray-600 ">
            Umfassende Dienstleistungen für Import und Export von Handelswaren
            aller Art seit 2006.
          </p>
        </motion.div>

        {/* Services Cards */}
        <div className="flex flex-wrap gap-4 justify-center items-center px-4">
          {[
            {
              img: "https://images.pexels.com/photos/30671086/pexels-photo-30671086/free-photo-of-majestic-cranes-at-cadiz-port-spain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              title: "Zollabfertigung Services",
              desc: "Professionelle Unterstützung bei der Ausstellung und Bearbeitung von Zoll- und Begleitpapieren für Ihre Waren.",
            },
            {
              img: "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              title: "Lagerung und Verpackung",
              desc: "Maßgeschneiderte Lösungen für die sichere Lagerung und Verpackung Ihrer Waren während des Transportes.",
            },
            {
              img: "https://images.pexels.com/photos/14400831/pexels-photo-14400831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              title: "Transportvermittlung",
              desc: "Vertrauen Sie auf unsere Erfahrung und Expertise, um Ihre Waren effizient ans Ziel zu bringen.",
            },
          ].map((service, index) => (
            <motion.div {...moveUp} key={index} className="max-w-md ">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-auto mx-auto rounded-2xl"
              />
              <h2 className="text-2xl font-semibold mt-4">{service.title}</h2>
              <p className="mt-2 text-md text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="px-4 md:px-6 py-16  lg:w-[85%] mx-auto">
        <motion.h1
          {...moveUp}
          className="text-4xl md:text-6xl font-semibold mb-4 text-center md:text-left "
        >
          Transportlösungen
        </motion.h1>
        <motion.p
          {...moveUp}
          className="text-gray-600 max-w-xl mx-auto md:mx-0 text-center md:text-left pb-12 pl-2 "
        >
          Umfassende Dienstleistungen für Import und Export in Osteuropa.
        </motion.p>

        {/* Services List */}
        <div className="flex flex-col gap-16">
          {[
            {
              img: "https://images.pexels.com/photos/30671086/pexels-photo-30671086/free-photo-of-majestic-cranes-at-cadiz-port-spain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              title: "Zollabfertigung",
              desc: "Professionelle Unterstützung bei der Ausstellung und Bearbeitung von Zollpapieren.",
            },
            {
              img: "https://images.pexels.com/photos/30671086/pexels-photo-30671086/free-photo-of-majestic-cranes-at-cadiz-port-spain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              title: "Lagerung",
              desc: "Sichere Lagerung und Verpackung Ihrer Waren für den Transport.",
            },
          ].map((service, index) => (
            <motion.div
              {...moveUp}
              key={index}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="w-full md:w-1/2">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="max-w-md text-center md:text-left">
                <h2 className="text-2xl font-semibold mt-4">{service.title}</h2>
                <p className="mt-4 text-gray-500">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Services;
