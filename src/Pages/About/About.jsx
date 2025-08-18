import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Slide } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";
import { FaCheck } from "react-icons/fa";
import { WorkingProcess } from "./About component/WorkingProcess";

const About = () => {

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const [ref, inView] = useInView();

    const stats = [
  {
    value: 100,
    suffix: "%",
    title: "On-Time Delivery",
    desc: "We guarantee timely delivery for every shipment, ensuring your business never skips a beat.",
  },
  {
    value: 650,
    suffix: "+",
    title: "Global Clients",
    desc: "Trusted by clients worldwide who depend on us for reliable and cost-effective logistics.",
  },
  {
    value: 24,
    suffix: "/7",
    title: "Customer Support",
    desc: "Our support team is always available to help you with logistics inquiries or emergencies.",
  },
];




  return (
    <div>
      <div className="px-6 py-10 lg:py-16 max-w-7xl mx-auto md:py-20 flex flex-col lg:flex-row  items-center gap-16 mb-16">
      {/* left div */}
      <div className="w-full lg:w-1/2 space-y-5 lg:pl-6 text-center lg:text-left ">
          <h2 className="text-3xl sm:text-4xl font-bold ">
            Discover Transit: Your Logistics Partner Discover Transit: Your Logistics Partner
          </h2>

          <p className="text-sm sm:text-base text-black/70 leading-relaxed text-justify px-3 md:px-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem laudantium quis, voluptatibus sint deserunt quam
            dolores quibusdam iste, porro, aliquam id autem quaerat quae! Rem,
            nesciunt id corrupti fugiat, cum, sunt consectetur assumenda dolorem
            quia recusandae soluta! Perspiciatis nesciunt ut est hic nostrum
            porro laudantium eaque, quis voluptates, minima ipsum!
          </p>

          {/* Stats */}
          <div ref={ref} className="grid md:grid-cols-2 gap-5 pt-2">
            {[
              "Merchants Nationwide",
              "Industries Nationwide",
              "Retailers Nationwide",
              "Outlets Nationwide",
            ].map((label, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="bg-[#02ab08] w-8 h-8 rounded-full flex items-center justify-center p-1 ">
                  <FaCheck className="text-white" />
                </div>
                <div className="text-md text-start">
                  <p className="font-semibold">
                    {inView ? (
                      <CountUp start={0} end={400} duration={2.5} />
                    ) : (
                      "0"
                    )}
                    +
                  </p>

                  <p>{label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-x-10 mt-12">
            <button className="b px-7 bg-black text-white hover:text-black hover:bg-white rounded-md py-2 font-semibold">Contact Us</button>
            <button className="b px-5 bg-white text-black hover:text-white hover:bg-black rounded-md py-3 font-semibold">Schedule A Call</button>
          </div>


        </div>

      {/* Right div */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="max-w-md sm:max-w-lg space-y-4 mx-auto lg:mx-0">
          {stats.map((stat, index) => (
            <div className="rounded hover:bg-gray-100 px-5 py-4" key={index}>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#02ab08] ">
                {inView && (
                <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
                )}
              </h1>
              <hr className="border border-t border-gray-400 w-40" />
              <Slide className="" direction="up">
                <h2 className="w-40 sm:w-48 my-2 font-bold text-lg sm:text-xl">
                  {stat.title}
                </h2>
                <p className="text-sm sm:text-base leading-snug">{stat.desc}</p>
              </Slide>
            </div>
          ))}
        </div>
      </div>
    </div>


          <WorkingProcess></WorkingProcess>
    </div>
  );
};

export default About;
