import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((s) => !s);

  const linkClass = ({ isActive }) =>
    `transition duration-200 ${isActive ? "font-semibold" : "font-normal"} hover:text-zinc-900`;

  return (
    <nav className=" bg-white border-b border-zinc-200 sticky top-0 z-40">
      <div className="max-w-[1200px] mx-auto relative px-4 md:px-6 h-20 flex items-center">
        {/* Left: Logo (no flex-grow) */}
        <div className="flex items-center flex-none">
          <NavLink to="/" aria-label="Home">
            <img
              src="https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-fast-delivery-icon-delivery-icon-png-image_2047531.jpg"
              alt="Logo"
              className="h-14 md:h-16"
            />
          </NavLink>
        </div>

        {/* Center: Desktop Links (absolute center) */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center space-x-8 text-zinc-700 text-lg">
            <NavLink to="/" className={linkClass}>
              Startseite
            </NavLink>
            <NavLink to="/dienstleistungen" className={linkClass}>
              Dienstleistungen
            </NavLink>
            <NavLink to="/uber-uns" className={linkClass}>
              Über uns
            </NavLink>
          </div>
        </div>

        {/* Right: Kontakt button + Hamburger (no flex-grow) */}
        <div className="flex items-center flex-none ml-auto">
          {/* Desktop contact button */}
          <div className="hidden md:block">
            <NavLink
              to="/kontakt"
              className="inline-block px-6 py-2 rounded-md bg-zinc-800 text-white font-semibold hover:bg-zinc-700 transition"
            >
              Kontakt
            </NavLink>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden ml-4 p-2 rounded-md text-zinc-700"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (slides down) */}
      <div
        className={`md:hidden fixed inset-x-0 top-0 bg-white shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ zIndex: 40 }}
      >
        <div className="flex items-center justify-between p-4 border-b border-zinc-100">
          <NavLink to="/" onClick={toggleMenu} aria-label="Home">
            <img
              src="https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-fast-delivery-icon-delivery-icon-png-image_2047531.jpg"
              alt="Logo"
              className="h-12"
            />
          </NavLink>
          <button onClick={toggleMenu} className="p-2" aria-label="Close menu">
            <FaTimes size={18} />
          </button>
        </div>

        <div className="flex flex-col items-center gap-6 py-8">
          <NavLink to="/" onClick={toggleMenu} className="text-lg text-zinc-800">
            Startseite
          </NavLink>
          <NavLink to="/dienstleistungen" onClick={toggleMenu} className="text-lg text-zinc-800">
            Dienstleistungen
          </NavLink>
          <NavLink to="/uber-uns" onClick={toggleMenu} className="text-lg text-zinc-800">
            Über uns
          </NavLink>

          {/* Mobile Kontakt button */}
          <div className="w-10/12">
            <NavLink
              to="/kontakt"
              onClick={toggleMenu}
              className="block text-center px-6 py-3 rounded-md bg-zinc-800 text-white font-semibold hover:bg-zinc-700 transition"
            >
              Kontakt
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
