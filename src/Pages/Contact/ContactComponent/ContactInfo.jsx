import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export const ContactInfo = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-8 order-1 lg:order-2">
        <div>
          <p className="text-sm text-gray-600 mb-2">Get in Touch With Us</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            We take care about transportation for your business.
          </h3>
          <p className="text-gray-600 leading-relaxed">
            <span className="font-bold">Transit</span> has experience in handling
            the formalities and documentation required for your imports and
            exports. We work with all international stations to guarantee that
            your load will safely reach without any delays.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-xl font-bold mb-6">New York</h4>

          <div className="flex flex-col gap-4">
            {/* Address */}
            <div className="flex items-start gap-3">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white"
                aria-hidden="true"
              >
                <FaMapMarkerAlt className="w-4 h-4" />
              </div>

              <a
                href="https://maps.google.com/?q=2405+Beverley+Rd+Brooklyn+NY+11226"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
              >
                2405 Beverley Rd, Brooklyn, New York 11226, United States
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white">
                <FaEnvelope className="w-4 h-4" />
              </div>

              <a
                href="mailto:office@moovit.com"
                className="text-gray-600 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
              >
                office@moovit.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white">
                <FaPhone className="w-4 h-4" />
              </div>

              <a
                href="tel:+12124258617"
                className="text-gray-600 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
              >
                +1 212 425 8617
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-wrap gap-6 pt-4">
          <a
            href="#"
            className="flex items-center gap-2 text-gray-600 hover:text-[#1877F2] transition-colors duration-200"
            aria-label="Facebook"
          >
            <FaFacebook className="text-lg" />
            <span className="text-sm">Facebook</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-2 text-gray-600 hover:text-[#1DA1F2] transition-colors duration-200"
            aria-label="Twitter"
          >
            <FaTwitter className="text-lg" />
            <span className="text-sm">Twitter</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-2 text-gray-600 hover:text-[#0A66C2] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-lg" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};
