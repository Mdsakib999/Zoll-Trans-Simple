import React from "react";
import { motion } from "framer-motion";
import { FiTruck, FiPackage, FiMapPin } from "react-icons/fi";

const PartnerAbout = () => {
  // Animation variant for sliding up with fade-in
  const upwardMotion = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <div className="bg-white py-20">
      {/* Section 1: Text left, visual right */}
      <div className="lg:w-[80%] mx-auto flex flex-col md:flex-row items-center gap-12 mb-24">
        {/* Text */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left px-4">
          <motion.h1
            {...upwardMotion}
            className="text-3xl md:text-5xl font-semibold text-zinc-900"
          >
            Ihr Partner für Transport
          </motion.h1>
          <motion.p
            {...upwardMotion}
            className="text-zinc-600 leading-relaxed"
          >
            Zoll Trans Service GmbH bietet umfassende Dienstleistungen im Import
            und Export, spezialisiert auf Osteuropa, mit maßgeschneiderten
            Lösungen für Ihre Logistikbedürfnisse.
          </motion.p>
          <motion.div {...upwardMotion}>
            <button className="px-10 py-3 rounded-full border border-zinc-300 font-semibold text-zinc-800 mt-4 hover:bg-zinc-100 transition duration-300">
              Kontaktieren
            </button>
          </motion.div>
        </div>

        {/* Visual with icons */}
        <motion.div
          {...upwardMotion}
          className="md:w-1/2 grid grid-cols-3 gap-6"
        >
          <div className="flex flex-col items-center p-6 bg-zinc-50 rounded-2xl shadow-sm border border-zinc-100">
            <FiPackage className="w-10 h-10 text-zinc-700 mb-3" />
            <span className="text-sm font-medium text-zinc-700">Zollabfertigung</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-zinc-50 rounded-2xl shadow-sm border border-zinc-100">
            <FiMapPin className="w-10 h-10 text-zinc-700 mb-3" />
            <span className="text-sm font-medium text-zinc-700">Transportlösungen</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-zinc-50 rounded-2xl shadow-sm border border-zinc-100">
            <FiTruck className="w-10 h-10 text-zinc-700 mb-3" />
            <span className="text-sm font-medium text-zinc-700">Logistikmanagement</span>
          </div>
        </motion.div>
      </div>

      {/* Section 2: Visual left, text right */}
      <div className="lg:w-[80%] mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Icon cards stacked */}
        <motion.div
          {...upwardMotion}
          className="w-full md:w-1/2 flex flex-col gap-6"
        >
          <div className="flex items-center gap-4 p-6 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm">
            <div className="flex-shrink-0 bg-zinc-100 p-3 rounded-xl">
              <FiTruck className="w-8 h-8 text-zinc-700" />
            </div>
            <div>
              <p className="font-semibold text-zinc-800">Zollabfertigung</p>
              <p className="text-sm text-zinc-600">Effiziente Bearbeitung Ihrer Zollangelegenheiten.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm">
            <div className="flex-shrink-0 bg-zinc-100 p-3 rounded-xl">
              <FiPackage className="w-8 h-8 text-zinc-700" />
            </div>
            <div>
              <p className="font-semibold text-zinc-800">Transportlösungen</p>
              <p className="text-sm text-zinc-600">Individuelle Lösungen für Ihre Transportbedürfnisse.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm">
            <div className="flex-shrink-0 bg-zinc-100 p-3 rounded-xl">
              <FiMapPin className="w-8 h-8 text-zinc-700" />
            </div>
            <div>
              <p className="font-semibold text-zinc-800">Logistikmanagement</p>
              <p className="text-sm text-zinc-600">Optimierung Ihrer gesamten Logistikkette.</p>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left px-4">
          <motion.h1
            {...upwardMotion}
            className="text-3xl md:text-5xl font-semibold text-zinc-900"
          >
            Über uns
          </motion.h1>
          <motion.p
            {...upwardMotion}
            className="text-zinc-600 leading-relaxed"
          >
            Seit 2006 unterstützen wir Sie bei Transport, Logistik und
            Zollabfertigung, um Ihre Waren sicher und effizient ans Ziel zu
            bringen.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default PartnerAbout;