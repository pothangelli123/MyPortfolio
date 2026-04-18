"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/experience";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full mb-6">
            <p className="text-cyan-400 text-sm font-medium">EXPERIENCE & EDUCATION</p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">My Journey</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 ml-5 hidden sm:block" />

          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="relative pl-16 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-12 h-12 bg-slate-950 border-2 border-cyan-400 rounded-full flex items-center justify-center text-cyan-400 font-bold hidden sm:flex">
                  {index + 1}
                </div>

                <div className="ml-0 sm:ml-4 p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-100">
                      {item.title}
                    </h3>
                    <span className="text-sm text-cyan-400 font-medium mt-1 sm:mt-0">
                      {item.period}
                    </span>
                  </div>

                  {/* Company/School */}
                  {item.company && (
                    <p className="text-slate-400 font-medium mb-3">{item.company}</p>
                  )}
                  {item.school && (
                    <p className="text-slate-400 font-medium mb-3">{item.school}</p>
                  )}

                  {/* Description */}
                  <p className="text-slate-300 mb-3">{item.description}</p>

                  {/* Details */}
                  {item.details && item.details.length > 0 && (
                    <ul className="space-y-2">
                      {item.details.map((detail, i) => (
                        <li
                          key={i}
                          className="text-slate-400 flex items-start gap-2"
                        >
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
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
