import React from "react";
import { FiTruck, FiPackage, FiMapPin, FiArrowRight } from "react-icons/fi";

const PartnerAbout = () => {
  const services = [
    {
      icon: FiTruck,
      title: "Transportvermittlung",
      description:
        "Effiziente Transportvermittlung für Ihre Handelswaren in Osteuropa mit zuverlässigen Partnern.",
      color: "bg-red-50",
      iconColor: "text-red-500",
    },
    {
      icon: FiPackage,
      title: "Zollabfertigung & Dokumente",
      description:
        "Professionelle Unterstützung bei Zollabfertigung und Erstellung von Begleitpapieren für reibungslose Abwicklung.",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: FiMapPin,
      title: "Verpackung & Lagerung",
      description:
        "Sichere Verpackung und Lagerung Ihrer Waren für einen reibungslosen Transport und optimale Lagerhaltung.",
      color: "bg-pink-50",
      iconColor: "text-pink-500",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
    
            <p className="text-center"> <span className=" rounded-full h-4 animate-pulse bg-black">..</span> Services </p>
          

        <div className="md:text-center mb-12">
          <h1 className="text-2xl md:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
            Umfassende <span className="text-[#02ab08]">Logix Services</span> <br />
            Zugeschnitten auf Ihre Einzigartigen <span className="text-[#02ab08]">Bedürfnisse</span>
          </h1>
        </div>

        {/* Services list */}
        <div className="space-y-4 md:space-y-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group p-4 sm:p-6 border-b border-gray-200 transition-all duration-300 cursor-pointer"
              >
                {/* Responsive layout: stack on xs, row on sm+ */}
                <div className="flex flex-col sm:flex-row items-end sm:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    <div className="bg-zinc-100 p-3 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-zinc-800" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow: shrinks on small screens and sits at bottom with margin */}
                  <div className="flex-shrink-0 mt-3 sm:mt-0">
                    <button
                      aria-label={`Mehr über ${service.title}`}
                      className="w-20 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-700 flex items-center justify-center group-hover:bg-zinc-900 transition-colors duration-300"
                    >
                      <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional services preview */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="bg-zinc-50 p-3 rounded-lg w-fit mb-4">
              <div className="w-5 h-5 bg-zinc-800 rounded"></div>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Express Delivery</h4>
            <p className="text-gray-600 text-sm sm:text-sm">Schnelle Lieferung für zeitkritische Sendungen.</p>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="bg-zinc-50 p-3 rounded-lg w-fit mb-4">
              <div className="w-5 h-5 bg-zinc-800 rounded"></div>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Supply Chain Management</h4>
            <p className="text-gray-600 text-sm sm:text-sm">Optimierung Ihrer gesamten Lieferkette.</p>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="bg-zinc-50 p-3 rounded-lg w-fit mb-4">
              <div className="w-5 h-5 bg-zinc-800 rounded"></div>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Cross-Border Solutions</h4>
            <p className="text-gray-600 text-sm sm:text-sm">Nahtlose grenzüberschreitende Logistiklösungen.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerAbout;
