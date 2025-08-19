import React from "react";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { IoMailUnreadSharp } from "react-icons/io5";

export const ContactInfo = () => {
  const menuItems = [
    {
      id: 1,
      title: "Visit Our Office",
      description: `930 Hilgard Ave,\nLos Angeles,\nCA 90024, United States`,
      icon: <FaHome />,
      action: null,
    },
    {
      id: 2,
      title: "Give us a call",
      description: `(406) 555-0120\n(407) 222-0456`,
      icon: <FaPhoneAlt />,
      action: "tel",
    },
    {
      id: 3,
      title: "Chat with us",
      description: `hello@yourdomain.com\ncontact@yourname.com`,
      icon: <IoMailUnreadSharp />,
      action: "mail",
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="absolute -top-8 inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-600 text-white text-2xl shadow">
              {item.icon}
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>

              <p className="text-gray-600 whitespace-pre-line leading-relaxed text-sm">
                {item.description}
              </p>

              {item.action === "tel" && (
                <div className="mt-4 flex flex-col items-center gap-2">
                  <a className="text-emerald-600 font-medium" href="tel:+14065550120">
                    (406) 555-0120
                  </a>
                  <a className="text-emerald-600 font-medium" href="tel:+14072220456">
                    (407) 222-0456
                  </a>
                </div>
              )}

              {item.action === "mail" && (
                <div className="mt-4 flex flex-col items-center gap-2">
                  <a className="text-emerald-600 font-medium" href="mailto:hello@yourdomain.com">
                    hello@yourdomain.com
                  </a>
                  <a className="text-emerald-600 font-medium" href="mailto:contact@yourname.com">
                    contact@yourname.com
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
