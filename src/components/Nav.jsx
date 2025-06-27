import React, { useState } from "react";
import { Menu, Home, User, Folder, Mail, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import '../App.css'

const navItems = [
  { icon: <Home />, label: "Home", to: "/", id: "home" },
  { icon: <User />, label: "About", to: "/about", id: "about" },
  { icon: <Folder />, label: "Projects", to: "/projects", id: "projects" },
  { icon: <Mail />, label: "Contact", to: "/contact", id: "contact" },
  { icon: <Layers />, label: "Skills", to: "/skills", id: "skills" },
];

const getPositions = (count, radius) => {
  const angleStep = (2 * Math.PI) / count;
  return Array.from({ length: count }, (_, i) => {
    const angle = i * angleStep - Math.PI / 2;
    return {
      left: `calc(50% + ${radius * Math.cos(angle)}px)`,
      top: `calc(50% + ${radius * Math.sin(angle)}px)`,
      angle,
    };
  });
};

const Nav = () => {
  const [active, setActive] = useState("/");
  const [showNav, setShowNav] = useState(false);

  const radius = 110;
  const positions = getPositions(navItems.length, radius);

  return (
    <>
      <div className="fixed top-5 right-5 z-50">
        <button
          onClick={() => setShowNav(!showNav)}
          className="p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-md transition-all"
          aria-label="Toggle navigation menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 backdrop-blur-sm flex items-center justify-center z-40"
          >
            <div className="relative w-80 h-80 rounded-full border-2 border-purple-600 shadow-[0_0_40px_rgba(180,0,255,0.5)] bg-gradient-to-tr from-purple-900 via-purple-700 to-purple-900 overflow-visible">
          <div className="absolute w-[350px] h-[350px] rounded-full border-2 border-purple-400 opacity-20  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute w-[450px] h-[450px] rounded-full border-2 border-purple-400 opacity-20 animate-spin-slow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>


             
              <div className="absolute w-[280px] h-[280px] rounded-full border border-purple-400 animate-ping opacity-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-[230px] h-[230px] rounded-full border border-purple-300 animate-pulse opacity-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute w-[180px] h-[180px] rounded-full border border-purple-500 animate-spin-slow opacity-15 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>

             
              {[...Array(10)].map((va, i) => {
                const angle = (i / 10) * 2 * Math.PI;
                const dotRadius = radius + 30;
                const left = `calc(50% + ${dotRadius * Math.cos(angle)}px)`;
                const top = `calc(50% + ${dotRadius * Math.sin(angle)}px)`;
                return (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-purple-400 opacity-70 animate-pulse"
                    style={{ left, top }}
                  />
                );
              })}

         
              <div className="relative w-full h-full">
                {navItems.map(({ icon, label, to, id }, i) => {
                  const pos = positions[i];
                  return (
                    <Link
                      key={id}
                      to={to}
                      onClick={() => {
                        setActive(to);
                        setShowNav(false);
                      }}
                      className="absolute flex flex-col items-center gap-1 cursor-pointer select-none"
                      style={{ left: pos.left, top: pos.top, transform: "translate(-50%, -50%)" }}
                      aria-label={label}
                    >
                      {/* Line from center to icon */}
                      <div
                        style={{
                          position: "absolute",
                          width: radius,
                          height: 1,
                          background: "rgba(180,0,255,0.3)",
                          top: "50%",
                          left: "50%",
                          transformOrigin: "left center",
                          transform: `rotate(${pos.angle}rad) translateX(-50%)`,
                          zIndex: 0,
                        }}
                      />

                      <motion.div
                        whileHover={{ scale: 1.2, boxShadow: "0 0 16px rgba(180, 0, 255, 0.9)" }}
                        whileTap={{ scale: 0.95, boxShadow: "0 0 25px rgba(255, 100, 255, 1)" }}
                        animate={active === to ? { boxShadow: "0 0 25px rgba(255, 0, 255, 1)" } : { boxShadow: "none" }}
                        className={`relative w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 text-white border border-white/20 backdrop-blur-sm ${
                          active === to ? "bg-purple-600" : "bg-white/10"
                        }`}
                      >
                        {icon}
                      </motion.div>
                      <span
                        className={`text-xs text-white/80 font-light ${
                          active === to ? "text-purple-400 font-semibold" : ""
                        }`}
                      >
                        {label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
