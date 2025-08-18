import React from "react";
import { motion } from "framer-motion";

const Transport = () => {
  // Animation variant for sliding up with fade-in
  const upwardMotion = {
    initial: { y: 10, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  // Animation for staggered text content
  const staggeredTextMotion = {
    initial: { y: 20, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, staggerChildren: 0.2 },
  };

  return (
    <section className="bg-blue-200 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          {...upwardMotion}
        >
          Transport und Logistik
        </motion.h2>
        {/* Subtitle */}
        <motion.p className="text-lg text-gray-700 mt-3" {...upwardMotion}>
          Umfassende Dienstleistungen für Import und Export in Osteuropa seit
          2006.
        </motion.p>
      </div>

      {/* Main Content */}
      <div className="lg:mt-20 mt-10 flex flex-col md:flex-row md:justify-between items-center max-w-6xl mx-auto gap-16 mb-16">
        {/* Image Section */}
        <motion.div {...upwardMotion} className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1654026995029-fee529d17f9f?auto=format&fit=crop&w=861&h=619"
            alt="Transport"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-black">
          <motion.div {...staggeredTextMotion} className="mb-6">
            <motion.h3 className="text-xl font-semibold" {...upwardMotion}>
              Transportvermittlung
            </motion.h3>
            <motion.p className="text-gray-600" {...upwardMotion}>
              Effiziente Transportvermittlung für Ihre Handelswaren in
              Osteuropa.
            </motion.p>
          </motion.div>

          <motion.div {...staggeredTextMotion} className="mb-6">
            <motion.h3 className="text-xl font-semibold" {...upwardMotion}>
              Zollabfertigung und Dokumente
            </motion.h3>
            <motion.p className="text-gray-600" {...upwardMotion}>
              Professionelle Unterstützung bei Zollabfertigung und Erstellung
              von Begleitpapieren.
            </motion.p>
          </motion.div>

          <motion.div {...staggeredTextMotion}>
            <motion.h3 className="text-xl font-semibold" {...upwardMotion}>
              Verpackung und Lagerung
            </motion.h3>
            <motion.p className="text-gray-600" {...upwardMotion}>
              Sichere Verpackung und Lagerung Ihrer Waren für einen
              reibungslosen Transport.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Transport;
