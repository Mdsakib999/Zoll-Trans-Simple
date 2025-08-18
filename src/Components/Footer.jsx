import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="md:w-[95%] md:gap-x-3 lg:gap-0 flex flex-col  md:flex-row my-20 items-center mx-auto  lg:mr-12 ">
        <div className="flex-1 lg:mx-24 mt-10  px-5 md:px-0">
          <p className="lg:text-4xl text-2xl font-semibold md:mb-5 mb-4 text-center lg:text-left">
            Standorte
          </p>
          <p className="text-lg text-gray-500 pt-3  lg:w-[75%]  pb-5 text-center lg:text-left">
            Zoll Trans Service GmbH bietet umfassende Logistik- und
            Zollabfertigungsdienste in Velten und darüber hinaus, insbesondere
            für den osteuropäischen Markt.
          </p>
          <div className="p-4 flex flex-col gap-x-3">
            <p className="flex text-xl items-center font-bold">
              <CiLocationOn className=" text-2xl " /> Adresse
            </p>
            <p className="ml-6 mt-1 text-gray-700">
              Zum Stichkanal 1 A,
              <br /> 16727 Velten .
            </p>
          </div>

          <div className="p-4 flex flex-col gap-x-3">
            <p className="flex text-xl items-center font-bold gap-1">
              <FaRegClock className=" text-xl " /> Öffnungszeiten
            </p>
            <p className="ml-6 mt-1 text-gray-700">Mo-Fr 9-17</p>
          </div>
        </div>

        <div className="lg:w-[40%] md:w-[60%] w-[95%] h-[300px] lg:h-[480px] md:h-[230px]  mt-5 md:mt-0 ">
          <iframe
            className="w-full h-full rounded-xl shadow-x"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d38714.93609226072!2d13.209312!3d52.665694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a90010fee01efd%3A0xdda2a76225c4095d!2sZum%20Stichkanal%201A%2C%2016727%20Velten%2C%20Germany!5e0!3m2!1sen!2sus!4v1739745371620!5m2!1sen!2sus"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <footer className="bg-[#2F4F4F] text-white py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">Transport</h1>
              <p className="mb-6">
                Ihr Partner für Transport und Logistiklösungen.
              </p>
            </div>
            <p className="text-sm">© 2024. All rights reserved.</p>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col justify-center">
            <h2 className="font-bold text-lg mb-2">Zoll-Trans-Service GmbH</h2>
            <p className="mb-1">Zum Stichkanal 1 A</p>
            <p className="mb-1">16727 Velten</p>
            <a
              href="mailto:customs@zoll-trans.de"
              className="text-blue-300 underline mb-1"
            >
              customs@zoll-trans.de
            </a>
            <p className="font-bold">+49 (0) 4065 580053</p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-center">
            <h3 className="font-bold mb-3">SERVICE</h3>
            <label htmlFor="email" className="mb-2">
              Ihre E-Mail-Adresse
            </label>
            <input
              type="email"
              id="email"
              placeholder="Geben Sie Ihre E-Mail ein"
              className="px-3 py-2 rounded-md text-black mb-3 focus:outline-none bg-white"
            />
            <button className="bg-[#4682B4] hover:bg-[#74abd8] text-white font-medium py-2 px-4 rounded-full">
              Anfrage jetzt senden
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
