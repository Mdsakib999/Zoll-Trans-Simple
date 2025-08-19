import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Testimonials } from "../../Components/Testimonials";
import { FiShield,FiPackage, FiGlobe, FiTruck,FiFileText, FiClock } from "react-icons/fi";
const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const keyFeatures = [
    {
      icon: FiShield,
      title: "Sichere Zollabfertigung",
      desc: "Alle Zollpapiere werden mit modernster Technologie und höchsten Sicherheitsstandards bearbeitet, inklusive 24/7 Überwachung.",
    },
    {
      icon: FiPackage,
      title: "Bestandsverwaltung",
      desc: "Echtzeit-Tracking und Bestandskontrollsysteme ermöglichen es Ihnen, Lagerbestände zu verwalten und genaue Einblicke in Warenbewegungen zu erhalten.",
    },
    {
      icon: FiGlobe,
      title: "Flexible Lageroptionen",
      desc: "Wählen Sie zwischen kurz-, lang-, oder saisonalen Lagerplänen, die auf Ihre Bedürfnisse und Geschäftsanforderungen zugeschnitten sind.",
    },
    {
      icon: FiTruck,
      title: "Vertriebsnetzwerk",
      desc: "Zugang zu einem umfangreichen Vertriebsnetzwerk, das es einfach macht, Kunden lokal, regional und europaweit zu erreichen.",
    },
    {
      icon: FiFileText,
      title: "Effiziente Auftragsabwicklung",
      desc: "Schnelle und präzise Auftragsbearbeitung gewährleistet prompte Verpackung, Versand und termingerechte Lieferung gemäß Kundenerwartungen.",
    },
    {
      icon: FiClock,
      title: "Reverse-Logistik-Support",
      desc: "Optimierte Rücksendeabwicklung und Bestandsauffüllung zur Verbesserung der Kundenzufriedenheit und Reduzierung von Verschwendung.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-zinc-100 py-20 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div {...fadeInUp} className="mb-8">
            <p className="text-center"> <span className=" rounded-full h-4 animate-pulse bg-black">..</span> Services </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold text-zinc-900 mb-8 leading-tight">
              Keine Sorgen mehr über Versand Probleme
           
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-600 max-w-4xl mx-auto leading-relaxed">
              Unser globales Team aus Lager- und Vertriebsexperten kann Ihnen helfen, das beste Paket 
              wertschöpfender Dienstleistungen entsprechend Ihren Bedürfnissen zu konfigurieren und als 
              Teil unseres Wertangebots einzubeziehen.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-zinc-100 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-100"
                >
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-zinc-800" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-green-500 mb-3">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-zinc-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="bg-zinc-50 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div {...fadeInUp} className="text-center">
              <div className="mb-6">
                <FiTruck className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
                
              </div>
              
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                Wie Sie Loslegen
              </h3>
              
              <p className="text-zinc-600 leading-relaxed">
                Ob Sie Preise finden, eine Buchung vornehmen, Dokumente einreichen oder 
                Ihre Fracht verfolgen müssen - unsere Schritt-für-Schritt-Anleitungen 
                helfen Ihnen dabei, sich zurechtzufinden.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="text-center">
              <div className="mb-6">
                <FiPackage className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
      
              </div>
              
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                Bereit zum Buchen?
              </h3>
              
              <p className="text-zinc-600 leading-relaxed">
                Melden Sie sich an, um Ihre Sendungen online zu buchen, zu verwalten 
                und zu bezahlen, und greifen Sie auf eine Reihe von Produkten und 
                Dienstleistungen zu, die Ihre Lieferkette vereinfachen.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="text-center">
              <div className="mb-6">
                <FiShield className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
               
              </div>
              
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                Werden Sie Logistik-Experte
              </h3>
              
              <p className="text-zinc-600 leading-relaxed">
                Entdecken Sie Einblicke, einführende Videos, erklärende Artikel und 
                gewinnen Sie das Vertrauen, das Sie benötigen, um Ihre Lieferkette zu 
                optimieren.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Services;