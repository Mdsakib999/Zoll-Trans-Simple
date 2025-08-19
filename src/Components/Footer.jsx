import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { IoCallOutline, IoLocationOutline, IoMailOutline } from "react-icons/io5";
// import Logo from "/assets/Logo.png";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-sm">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between md:gap-32">
        {/* Left Side: Logo & Social */}
        <div className="flex flex-col items-center md:items-start">
          <img src="https://img.freepik.com/premium-vector/truck-trailer-logistics-delivery-express-logo-design-template-logo-illustration-black-background_645012-333.jpg?w=360" alt="Transit Logo" className="w-46 h-auto" />
          
        </div>

        {/* Right Side: Newsletter + Links */}
        <div className="flex-1 flex flex-col gap-6 mt-10 md:mt-0">

          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Useful Links */}
            <div>
              <h3 className="font-semibold text-[#02ab08] mb-3 text-lg">
                Company
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "Home", to: "/" },
                  { label: "About us", to: "/uber-uns" },
                  { label: "Services", to: "/dienstleistungen" },
                  { label: "Contact", to: "/kontakt" },
                ].map((link) => (
                  <li key={link.label}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `group relative inline-block transition-colors duration-300 ${
                          isActive ? "text-[#02ab08]" : "text-white"
                        }`
                      }
                    >
                      {link.label}
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Working Hours */}
            <div>
              <h3 className="font-semibold  text-lg text-[#02ab08] mb-3">Useful Links </h3>
              <ul className="space-y-2">
                <li className="hover:text-[#02ab08]"><Link to="/impressum-and-datenschutz">Terms & Condition </Link></li>
                <li className="hover:text-[#02ab08]">Privacy Policy</li>
                <li className="hover:text-[#02ab08]">Refund & Return</li>
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-[#02ab08] text-lg mb-3">Find Us On</h3>
              <div>
                <p className=" flex items-center gap-x-2"> <IoMailOutline /> contact@transit.com</p>
              <p className=" flex items-center gap-x-2 my-2"> <IoCallOutline /> +1 212 425 8617</p>
              <p className=" flex items-center gap-x-2"> <IoLocationOutline /> Aldin street, North Himeshiya, USA</p>
              </div>
              <div className="flex gap-3 mt-3">
            {[FaFacebookF, FaXTwitter, FaInstagram, FaYoutube].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center 
                 text-white hover:bg-white/90 hover:text-black transition-colors duration-300 cursor-pointer"
                >
                  <Icon />
                </div>
              )
            )}
          </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30 text-white/60 text-xs py-4">
        <div className="max-w-7xl mx-auto px-4 text-center ">

          <p className="cursor-default ">
            © 2025 SM IT || All rights reserved
          </p>

        </div>
      </div>
    </footer>
  );
}
