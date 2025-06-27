import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import developerAnimation from "../assets/Animation - 1750980368981.json";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const typingSpeed = 70;
  const deletingSpeed = 50;
  const fullName = "Imad Azaalam";
  const navigat = useNavigate();

  useEffect(() => {
    let timeout;
    if (!isDeleting && index <= fullName.length) {
      timeout = setTimeout(() => {
        setDisplayText(fullName.substring(0, index));
        setIndex(index + 1);
      }, typingSpeed);
    } else if (isDeleting && index >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(fullName.substring(0, index));
        setIndex(index - 1);
      }, deletingSpeed);
    }

    if (index === fullName.length + 1) {
      setTimeout(() => setIsDeleting(true), 1000);
    }

    if (index === -1) {
      setIsDeleting(false);
      setIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-gray-900 via-purple-800 to-gray-900 text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-10 md:py-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center items-center md:items-start max-w-xl text-center md:text-left"
      >
        <div className="h-[20vh]">
          <h1 className=" text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-purple-300 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          {displayText}
          <span className="border-r-4 border-purple-400 ml-1 animate-pulse" />
        </h1>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          I’m a <span className="text-purple-300 font-medium">Full-Stack Developer</span> skilled in <span className="text-blue-400 font-medium">React</span>, <span className="text-pink-400 font-medium">JavaScript</span>, <span className="text-purple-300 font-medium">HTML</span>, <span className="text-purple-300 font-medium">CSS</span>, <span className="text-pink-400 font-medium">SASS</span>, <span className="text-blue-400 font-medium">Bootstrap</span>, and <span className="text-purple-300 font-medium">TailwindCSS</span>. I build modern, responsive.
        </p>

        <div className="flex space-x-4 sm:space-x-6 mb-6">
          {[
            { Icon: Github, link: "https://github.com/Azaalam-Imad?tab=repositories" },
            { Icon: Linkedin, link: "#" },
            { Icon: Mail, link: "mailto:azaalamimad2020@gmail.com" },
          ].map(({ Icon, link }, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 transition rounded-full group shadow-md"
            >
              <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            href="/Imad-Azaalam-CV.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-6 py-3 border border-purple-400 text-purple-300 rounded-full hover:bg-purple-600 hover:text-white transition-all font-semibold shadow-lg"
          >
            <FileText className="w-5 h-5" />
            Download CV
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigat("/contact")}
            className="px-6 py-3 border border-pink-400 text-pink-300 rounded-full hover:bg-pink-500 hover:text-white transition-all font-semibold shadow-lg"
          >
            Contact Me
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="mt-12 md:mt-0 md:ml-10 flex items-center justify-center"
      >
        <Lottie
          animationData={developerAnimation}
          loop={true}
          className="w-[250px] sm:w-[300px] md:w-[400px] h-auto"
        />
      </motion.div>
    </div>
  );
};

export default Home;
