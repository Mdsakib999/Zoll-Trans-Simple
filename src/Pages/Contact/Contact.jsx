import React from "react";
import { motion } from "framer-motion";
import { ContactForm } from "./ContactComponent/ContactForm";
import { ContactInfo } from "./ContactComponent/ContactInfo";

const Contact = () => {
  const fadeUp = {
    initial: { y: 20, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div {...fadeUp} className="mb-8">
          
            <p className=""> <span className=" rounded-full h-4 animate-pulse bg-black">..</span> Contact </p>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 pt-2">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl">
            We take care of transportation for your business. Fill out the form
            and our team will contact you shortly.
          </p>
        </motion.div>

        {/* Layout: on md+ two columns (form | info), stacked on mobile */}
        <motion.div
          {...fadeUp}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
        >
          <div className="md:col-span-7">
            <ContactForm />
          </div>

          <div className="md:col-span-5">
            <ContactInfo />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
