import React from "react";
import { motion } from "framer-motion";
import BannerImg from "../../../assets/cargo-4.jpg";

export default function Banner() {
  const upwardMotion = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <div
      className="relative flex justify-center items-center pb-10 h-screen"
      aria-label="Banner section with background image"
    >
      <img
        src={BannerImg}
        alt="Cargo and logistics"
        className="absolute inset-0 w-full h-full object-cover "
      />

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent -z-0" />

      <div className="w-full max-w-6xl text-left mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          <div className="md:w-1/2">
            <motion.h1
              {...upwardMotion}
              className="w-full md:w-[90%] leading-tight text-3xl md:text-5xl lg:text-6xl font-semibold mt-16 mb-7 text-white"
            >
              Transport und Logistik für Ihr Unternehmen
            </motion.h1>

            <motion.p
              {...upwardMotion}
              className="text-lg md:text-xl md:w-[85%] text-white/90"
            >
              Zollabfertigung und Transportlösungen für Osteuropa
            </motion.p>

            <motion.button
              {...upwardMotion}
              className="px-6 py-3 rounded-md border bg-zinc-800 font-semibold text-white mt-6 hover:bg-white hover:text-zinc-900 transition duration-300 cursor-pointer"
            >
              Jetzt anfragen
            </motion.button>
          </div>

          {/* Right: Cards (kept original texts) */}
          <div className="md:w-1/2 mt-6 md:mt-16">
            <div className="grid grid-cols-1 gap-4 md:gap-6 text-white">
              <motion.div
                {...upwardMotion}
                className="bg-zinc-800/80 p-6 rounded-lg flex items-start gap-4 shadow-xl hover:translate-y-[-4px] transition-transform duration-200"
              >
                <div className="flex-1">
                  <p className="text-xl font-bold mb-4 text-green-500">
                    Zollabfertigung
                  </p>
                  <p className="text-sm md:text-base">
                    Effiziente Bearbeitung Ihrer Zollangelegenheiten.
                  </p>
                </div>
              </motion.div>

              <motion.div
                {...upwardMotion}
                className="bg-zinc-800/80 p-6 rounded-lg flex items-start gap-4 shadow-xl hover:translate-y-[-4px] transition-transform duration-200"
              >
                <div className="flex-1">
                  <p className="text-xl font-bold mb-4 text-green-500">
                    Transportlösungen
                  </p>
                  <p className="text-sm md:text-base">
                    Individuelle Lösungen für Ihre Transportbedürfnisse.
                  </p>
                </div>
              </motion.div>

              <motion.div
                {...upwardMotion}
                className="bg-zinc-800/80 p-6 rounded-lg flex items-start gap-4 shadow-xl hover:translate-y-[-4px] transition-transform duration-200"
              >
                <div className="flex-1">
                  <p className="text-xl font-bold mb-4 text-green-500">
                    Logistikmanagement
                  </p>
                  <p className="text-sm md:text-base">
                    Optimierung Ihrer gesamten Logistikkette.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
