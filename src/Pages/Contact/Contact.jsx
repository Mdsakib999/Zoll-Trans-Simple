import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Contact = () => {
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Thank You!",
      text: "Your message has been sent successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });
    e.target.reset();
  };

  // Animation Variants
  const fadeUp = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/534637743/photo/industrial-port-with-containers.jpg?s=612x612&w=0&k=20&c=J2ejE1ed31TzxqMy1x6-anSCu4CgAb-p2OrNEHLUahI=')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gray-800 bg-opacity-60  mb-"></div>
      <div className="flex flex-col lg:flex-row lg:pt-16 px-4 sm:px-6 md:px-10 md:pb-16 md:mb-10 justify-evenly w-full items-center relative pb-16">
        <motion.div
          className="mt-8 text-center lg:text-left lg:w-[40%]"
          {...fadeUp}
        >
          <h1 className="text-3xl lg:text-5xl font-semibold text-white">
            Kontaktieren Sie uns
          </h1>
          <p className="text-lg text-gray-400 pt-3 lg:w-[75%] pb-5">
            Wir helfen Ihnen gerne bei Transport und Zollabfertigung.
          </p>
        </motion.div>

        <motion.div
          className="lg:w-[50%] w-full px-4 sm:px-6 md:px-8 py-8 border border-gray-200 rounded-lg shadow-md bg-white"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="lg:text-2xl text-xl font-bold mb-6 text-center"
            {...fadeUp}
          >
            Nehmen Sie Kontakt auf
          </motion.div>
          <form onSubmit={handleSubmit} className="w-full">
            <motion.div className="flex flex-wrap -mx-2 mb-6" {...fadeUp}>
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full h-12 border border-gray-300 rounded-md px-4 focus:outline-none focus:border-blue-400 transition duration-300"
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full h-12 border border-gray-300 rounded-md px-4 focus:outline-none focus:border-blue-400 transition duration-300"
                />
              </div>
            </motion.div>
            <motion.div className="mb-6" {...fadeUp}>
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full h-12 border border-gray-300 rounded-md px-4 focus:outline-none focus:border-blue-400 transition duration-300"
              />
            </motion.div>
            <motion.div className="mb-6" {...fadeUp}>
              <textarea
                cols="30"
                rows="10"
                placeholder="Write your Message..."
                required
                className="w-full h-32 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400 transition duration-300"
              ></textarea>
            </motion.div>
            <motion.div
              className="flex items-center justify-center"
              {...fadeUp}
            >
              <button
                type="submit"
                className="rounded-full group mt-2 border border-black hover:border-indigo-500 relative px-7 py-3  overflow-hidden font-bold bg-slate-50 lg:text-lg shadow-md hover:shadow-lg hover:bg-indigo-500  transition duration-300"
              >
                <span className="relative text-black group-hover:text-white">
                Nachricht senden
                </span>
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
