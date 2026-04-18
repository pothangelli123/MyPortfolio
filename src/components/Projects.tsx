"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full mb-6">
            <p className="text-cyan-400 text-sm font-medium">FEATURED WORK</p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">My Projects</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg border border-slate-700 bg-slate-800/30 hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Project card */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-slate-100 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm">{project.description}</p>

                <p className="text-slate-300 leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <Code2 size={18} />
                    Code
                  </Link>
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-slate-300 hover:text-purple-400 transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* View all projects link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center pt-12"
        >
          <Link
            href="#projects"
            className="inline-block px-8 py-3 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:bg-slate-800 hover:border-cyan-400 transition-all duration-300"
          >
            View All Projects ({projects.length})
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
