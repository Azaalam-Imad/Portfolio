import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaSass, FaBootstrap
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiGnubash, SiTailwindcss } from "react-icons/si";
import { motion } from 'framer-motion';

const skills = [
  { icon: <FaHtml5 />, label: 'HTML', color: '#e34c26' },
  { icon: <FaCss3Alt />, label: 'CSS', color: '#264de4' },
  { icon: <IoLogoJavascript />, label: 'JavaScript', color: '#f0db4f' },
  { icon: <FaReact />, label: 'React', color: '#61DBFB' },
  { icon: <SiGnubash />, label: 'Bash', color: '#89e051' },
  { icon: <FaGitAlt />, label: 'Git', color: '#f34f29' },
  { icon: <FaGithub />, label: 'GitHub', color: '#fff' },
  { icon: <FaSass />, label: 'Sass', color: '#cd6799' },
  { icon: <SiTailwindcss />, label: 'TailwindCSS', color: '#38bdf8' },
  { icon: <FaBootstrap />, label: 'Bootstrap', color: '#7952b3' },
];

const Skills = () => {
  return (
<section
  id="skills"
  className="min-h-screen py-16 px-6 bg-gradient-to-br from-gray-900 via-purple-800 to-gray-900 text-white flex items-center justify-center"
>
  <div className="max-w-6xl mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl sm:text-5xl font-bold mb-14"
    >
      <span className="bg-gradient-to-r from-purple-300 via-pink-400 to-blue-400 bg-clip-text text-transparent">
        My Skills
      </span>
    </motion.h2>

    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center p-6 bg-white/10 rounded-2xl shadow-lg hover:shadow-purple-700 hover:scale-105 transition-all duration-300"
        >
          <div className="mb-4 text-4xl" style={{ color: skill.color }}>
            {skill.icon}
          </div>
          <h3 className="text-lg font-semibold text-white">{skill.label}</h3>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Skills;
