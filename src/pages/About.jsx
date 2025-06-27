import React from 'react';
import { Code, Briefcase, Zap, User } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16"
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-left"
          >
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer building scalable web applications. I love turning complex problems into simple, beautiful designs.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source projects.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { icon: <Code className="w-8 h-8 mx-auto mb-2 text-purple-400" />, number: "50+", label: "Projects" },
                { icon: <Briefcase className="w-8 h-8 mx-auto mb-2 text-pink-400" />, number: "3+", label: "Years" },
                { icon: <Zap className="w-8 h-8 mx-auto mb-2 text-blue-400" />, number: "24/7", label: "Available" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm"
                >
                  {item.icon}
                  <div className="text-xl sm:text-2xl font-bold">{item.number}</div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 relative">
              <div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-spin"
                style={{ animationDuration: '20s' }}
              />
              <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
                <User className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-gray-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
