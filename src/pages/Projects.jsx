import React from 'react';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Images from '../constants/Images';

const projects = [
  
  {
    title: 'Library',
    description: 'P5',
    link: 'https://library-orcin-kappa.vercel.app/',
    tech: ['CSS', 'HTML', 'SASS', 'React'],
  },
  {
    title: 'Yummy.',
    description: 'P1',
    link: 'https://azaalam-imad.github.io/projet-azaalam-imad/',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Delicious',
    description: 'P2',
    link: 'https://azaalam-imad.github.io/projet-final1/',
    tech: ['CSS', 'HTML', 'SASS'],
  },
  {
    title: 'Moderna.',
    description: 'P3',
    link: 'https://azaalam-imad.github.io/Moderna/',
    tech: ['HTML', 'CSS', 'SASS'],
  },
  {
    title: 'Animes.',
    description: 'P4',
    link: 'https://azaalam-imad.github.io/projet-azaalam-imad/',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
];

const Projects = () => (
  <section
    id="projects"
    className="min-h-screen px-6 py-16 bg-gradient-to-br from-gray-900 via-purple-800 to-gray-900 text-white"
  >
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-14"
      >
        <span className="bg-gradient-to-r from-purple-300 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          My Projects
        </span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 p-6 rounded-2xl shadow-lg hover:shadow-purple-700 transition duration-300 backdrop-blur-md"
          >
            <div className="flex justify-between items-center mb-4">
              <FolderGit2 className="w-6 h-6 text-purple-400" />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-300 hover:underline flex items-center gap-1"
              >
                View <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <div className="h-48 mb-4 overflow-hidden rounded-xl">
              <img
                src={Images[project.description]}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-purple-500/30 text-purple-300 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
