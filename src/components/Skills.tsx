"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/skills";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full mb-6">
            <p className="text-cyan-400 text-sm font-medium">SKILLS & TECHNOLOGIES</p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">What I Can Do</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">
                {skillGroup.category}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-wrap gap-2"
              >
                {skillGroup.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <span className="text-slate-300 text-sm">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
