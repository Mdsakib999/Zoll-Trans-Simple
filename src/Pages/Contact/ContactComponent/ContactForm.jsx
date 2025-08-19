import React, { useState } from "react";
import Swal from "sweetalert2";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple required fields check
    if (!formData.name || !formData.email || !formData.phone || !formData.city) {
      Swal.fire({
        icon: "warning",
        title: "Bitte ausfüllen",
        text: "Bitte füllen Sie alle Pflichtfelder aus.",
        confirmButtonText: "OK",
      });
      return;
    }

    // Here you would send `formData` to your API
    console.log("Form submitted:", formData);

    Swal.fire({
      title: "Vielen Dank!",
      text: "Ihre Nachricht wurde erfolgreich versendet.",
      icon: "success",
      confirmButtonText: "OK",
    });

    // reset
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      message: "",
    });
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-md p-6 md:p-8 lg:p-10 text-gray-800"
        aria-label="Contact form"
      >
        <p className="text-sm text-gray-500 mb-6">
          We appreciate your interest — please complete the form and we will
          contact you to discuss warehousing, distribution, air/ocean freight or
          any other logistics needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col">
            <span className="text-xs text-gray-600 mb-1">Your name *</span>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full rounded-md border border-gray-200 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-xs text-gray-600 mb-1">Email *</span>
            <input
              type="email"
              name="email"
              placeholder="email@domain.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full rounded-md border border-gray-200 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-xs text-gray-600 mb-1">Phone Number *</span>
            <input
              type="tel"
              name="phone"
              placeholder="+49 123 456 789"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full rounded-md border border-gray-200 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-xs text-gray-600 mb-1">City *</span>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="w-full rounded-md border border-gray-200 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </label>
        </div>

        <label className="flex flex-col mt-4">
          <span className="text-xs text-gray-600 mb-1">Message</span>
          <textarea
            name="message"
            placeholder="Tell us about your shipment or request (optional)"
            value={formData.message}
            onChange={handleInputChange}
            rows={6}
            className="w-full rounded-md border border-gray-200 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition resize-vertical"
          />
        </label>

        <div className="mt-6 flex items-center justify-center md:justify-start">
          <button
            type="submit"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-md bg-green-600 hover:bg-green-700 text-white font-semibold transition"
          >
            Send Message
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};
