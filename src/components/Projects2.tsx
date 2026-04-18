"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { ChevronLeft, ChevronRight, ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const featuredProjects = projects.filter((p) => p.featured);

  const nextProject = () => setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  const prevProject = () => setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);

  const currentProject = featuredProjects[currentIndex];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <div className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8">
            <p className="text-sm font-medium text-white/70 uppercase tracking-wider">Featured Work</p>
          </div>
          <h2 className="text-heading-lg mb-4">Featured Projects</h2>
          <p className="text-white/60 text-lg mx-auto max-w-2xl">
            Showcasing my best work with React, Next.js, and modern web technologies.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full">
            <button
              type="button"
              onClick={prevProject}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors duration-300 hover:bg-white/10"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-3xl p-8 bg-white/5 border border-white/10 rounded-lg cursor-default"
            >
            <div className="mb-4">
              <h3 className="text-3xl font-bold text-white mb-2">{currentProject.title}</h3>
              <p className="text-white/60 text-lg">{currentProject.description}</p>
            </div>

            <p className="text-white/70 mb-6 leading-relaxed">{currentProject.longDescription}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {currentProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-white/10 text-white/80 border border-white/20 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-2 justify-center">
              {featuredProjects.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 w-12 rounded-full transition-all duration-300 ${
                    i === currentIndex ? "bg-white" : "bg-white/20"
                  }`}
                />
              ))}
            </div>

            <div className="mt-4 text-center text-white/50 text-sm">
              Use the arrows to switch projects.
            </div>
          </motion.div>

          <button
            type="button"
            onClick={nextProject}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors duration-300 hover:bg-white/10 mx-auto lg:mx-0"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">All Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="p-6 bg-white/5 border border-white/10 rounded-lg hover:border-white/30 transition-all duration-300 hover:bg-white/8 cursor-hover"
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
              >
                <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
                <p className="text-white/60 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-white/10 text-white/70 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-white/10 text-white/70 rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
