"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-lg shadow-md">
      {" "}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <a href="#portfolio" className="text-2xl font-bold text-blue-600">
          MyPortfolio
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navLinks.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <ul className="flex flex-col p-4 space-y-4">
            {navLinks.map((item) => (
              <li key={item.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-600 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
