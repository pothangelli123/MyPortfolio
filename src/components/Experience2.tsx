"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/experience";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
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
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8">
            <p className="text-sm font-medium text-white/70 uppercase tracking-wider">
              Career Timeline
            </p>
          </div>
          <h2 className="text-heading-lg mb-4">Experience & Education</h2>
          <p className="text-white/60 text-lg">
            2+ years of professional software development experience across startups and enterprises.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-white via-white/50 to-transparent hidden sm:block" />

          <div className="space-y-8 sm:pl-12">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-6 top-2 w-5 h-5 bg-black border-2 border-white rounded-full hidden sm:block" />

                {/* Content */}
                <div className="p-6 bg-white/5 border border-white/10 rounded-lg hover:border-white/30 transition-all duration-300 hover:bg-white/8 cursor-hover">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <span className="text-sm text-white/50 font-medium mt-2 sm:mt-0">
                      {item.period}
                    </span>
                  </div>

                  {/* Company/School */}
                  <p className="text-white/70 font-medium mb-2">
                    {item.company || item.school}
                  </p>

                  {/* Description */}
                  <p className="text-white/60 mb-3">{item.description}</p>

                  {/* Details */}
                  {item.details && item.details.length > 0 && (
                    <ul className="space-y-2">
                      {item.details.map((detail, i) => (
                        <li key={i} className="text-white/50 flex items-start gap-3">
                          <span className="text-white/30 mt-1">•</span>
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

        {/* Achievement summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 p-8 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-lg"
        >
          <h3 className="text-lg font-bold text-white mb-4">Key Achievements</h3>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "20% increase in user engagement through UI optimization",
              "30% faster page load times via performance improvements",
              "30% improvement in disaster recovery readiness",
              "Solved 500+ LeetCode algorithm problems",
            ].map((achievement, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-white/70 mt-1">✓</span>
                <span className="text-white/70">{achievement}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
