import React from "react";
import { FiTruck, FiPackage, FiMapPin, FiArrowRight } from "react-icons/fi";

const PartnerAbout = () => {
  const services = [
    {
      icon: FiTruck,
      title: "Transportvermittlung",
      description: "Effiziente Transportvermittlung für Ihre Handelswaren in Osteuropa mit zuverlässigen Partnern.",
      color: "bg-red-50",
      iconColor: "text-red-500"
    },
    {
      icon: FiPackage,
      title: "Zollabfertigung & Dokumente",
      description: "Professionelle Unterstützung bei Zollabfertigung und Erstellung von Begleitpapieren für reibungslose Abwicklung.",
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: FiMapPin,
      title: "Verpackung & Lagerung",
      description: "Sichere Verpackung und Lagerung Ihrer Waren für einen reibungslosen Transport und optimale Lagerhaltung.",
      color: "bg-pink-50",
      iconColor: "text-pink-500"
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        
 <p className="text-center"> <span className=" rounded-full h-4 animate-pulse bg-black">..</span> Services </p>
        <div className="text-center mb-16">
        
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            Umfassende <span className="text-[#02ab08]">Logix Services</span> Zugeschnitten auf
            <br />
            Ihre Einzigartigen <span className="text-[#02ab08]">Bedürfnisse</span>
          </h1>
        </div>

        {/* Services Cards */}
        <div className="space-y-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group  p-8  border-b border-gray-200  transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className={`bg-zinc-100 p-4 rounded-xl`}>
                      <IconComponent className={`w-8 h-8 text-zinc-800`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed max-w-2xl">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center group-hover:bg-zinc-900 transition-colors duration-300">
                      <FiArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services Preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="bg-zinc-50 p-3 rounded-lg w-fit mb-4">
              <div className="w-6 h-6 bg-zinc-800 rounded"></div>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Express Delivery</h4>
            <p className="text-gray-600 text-sm">Schnelle Lieferung für zeitkritische Sendungen.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="bg-zinc-50 p-3 rounded-lg w-fit mb-4">
              <div className="w-6 h-6 bg-zinc-800 rounded"></div>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Supply Chain Management</h4>
            <p className="text-gray-600 text-sm">Optimierung Ihrer gesamten Lieferkette.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="bg-zinc-50 p-3 rounded-lg w-fit mb-4">
              <div className="w-6 h-6 bg-zinc-800 rounded"></div>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Cross-Border Solutions</h4>
            <p className="text-gray-600 text-sm">Nahtlose grenzüberschreitende Logistiklösungen.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerAbout;