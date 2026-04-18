"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/skills";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8">
            <p className="text-sm font-medium text-white/70 uppercase tracking-wider">
              Technical Skills
            </p>
          </div>
          <h2 className="text-heading-lg mb-4">Languages & Technologies</h2>
          <p className="text-white/60 text-lg max-w-2xl">
            A comprehensive toolkit for building modern, scalable applications across the full stack.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              className="p-6 bg-white/5 border border-white/10 rounded-lg hover:border-white/30 transition-all duration-300 hover:bg-white/8 cursor-hover"
            >
              <h3 className="text-xl font-bold mb-4 text-white">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full  border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement badges */}
        <motion.div
          initial={{ opacity: 0,  y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            { label: "AWS Certified", value: "Cloud Developer" },
            { label: "HackerRank", value: "Software Engineer" },
            { label: "LeetCode", value: "500+ Problems" },
          ].map((badge, i) => (
            <div
              key={i}
              className="p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-lg text-center hover:border-white/40 transition-all duration-300"
            >
              <p className="text-lg font-bold text-white mb-1">{badge.label}</p>
              <p className="text-white/60">{badge.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
