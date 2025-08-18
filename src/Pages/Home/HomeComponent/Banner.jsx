import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  // Upward motion variant for in-view animation
  const upwardMotion = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <div className="flex justify-center items-center pb-10 bg-indigo-500 text-white py-12">
      <div className="w-full max-w-6xl text-center mx-auto px-4">
        <motion.h1
          {...upwardMotion}
          className="w-full md:w-[70%] mx-auto leading-tight text-3xl md:text-5xl font-semibold mt-16 mb-7"
        >
          Transport und Logistik für Ihr Unternehmen
        </motion.h1>

        <p className="text-lg md:text-xl">
          Zollabfertigung und Transportlösungen für Osteuropa
        </p>

        <button className="px-6 py-3 rounded-full border border-white font-semibold text-white mt-6 hover:bg-white hover:text-indigo-500 transition duration-300 cursor-pointer">
          Jetzt anfragen
        </button>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          <motion.div
            {...upwardMotion}
            className="bg-indigo-400 p-6 flex-1 min-w-[200px] rounded-lg"
          >
            <p className="text-xl font-bold mb-4">Zollabfertigung</p>
            <p className="text-sm md:text-base">
              Effiziente Bearbeitung Ihrer Zollangelegenheiten.
            </p>
          </motion.div>

          <motion.div
            {...upwardMotion}
            className="bg-indigo-400 p-6 flex-1 min-w-[200px] rounded-lg"
          >
            <p className="text-xl font-bold mb-4">Transportlösungen</p>
            <p className="text-sm md:text-base">
              Individuelle Lösungen für Ihre Transportbedürfnisse.
            </p>
          </motion.div>

          <motion.div
            {...upwardMotion}
            className="bg-indigo-400 p-6 flex-1 min-w-[200px] rounded-lg"
          >
            <p className="text-xl font-bold mb-4">Logistikmanagement</p>
            <p className="text-sm md:text-base">
              Optimierung Ihrer gesamten Logistikkette.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
