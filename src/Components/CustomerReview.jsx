import React from "react";
import { motion } from "framer-motion";

const CustomerReview = () => {
  // Animation Variants
  const backgroundMotion = {
    initial: { scale: 1.1 },
    animate: { scale: 1 },
    transition: { duration: 5, ease: "easeOut" },
  };

  const overlayMotion = {
    initial: { opacity: 0 },
    animate: { opacity: 0.5 },
    transition: { duration: 1, ease: "easeInOut" },
  };

  const textMotion = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <div className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden px-6 md:px-0">
      {/* Background Image */}
      <motion.img
        src="https://images.pexels.com/photos/972939/pexels-photo-972939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Customer Review Background"
        className="w-full h-full object-cover absolute inset-0 z-[-1]"
        {...backgroundMotion}
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black"
        {...overlayMotion}
      ></motion.div>

      {/* Review Content */}
      <motion.div
        className="relative text-white text-center px-6 max-w-sm md:max-w-2xl border p-4 rounded-2xl bg-[#4682B4] b"
        {...textMotion}
      >
        <p className="text-lg sm:text-xl md:text-2xl font-light italic">
          Toller Service! Meine Waren wurden schnell und sicher geliefert. Sehr
          professionelle Abwicklung!
        </p>
        <div className="mt-4">
          <h3 className="text-base sm:text-lg font-semibold">
            - Max Mustermann
          </h3>
          <p className="text-yellow-400 text-lg sm:text-xl">★★★★★</p>
        </div>
      </motion.div>
    </div>
  );
};

export default CustomerReview;
