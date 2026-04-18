"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/2 border-y border-white/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8">
            <p className="text-sm font-medium text-white/70 uppercase tracking-wider">About Me</p>
          </div>

          <h2 className="text-heading-lg mb-8">Who I Am</h2>

          <div className="space-y-6 text-white/70 leading-relaxed">
            <p className="text-lg">
              I'm a Software Developer at Pegasystems with a passion for building scalable web applications
              and solving complex technical problems. With expertise in Java, React, and cloud technologies,
              I transform ideas into robust solutions.
            </p>

            <p className="text-lg">
              My journey in tech started with a curiosity about how systems work. I've evolved from building
              interactive UIs to architecting full-stack solutions. I'm particularly interested in optimizing
              performance, designing scalable systems, and creating seamless user experiences.
            </p>

            <p className="text-lg">
              When I'm not coding, I'm solving LeetCode problems (500+ solved!), contributing to open-source
              projects, or exploring new technologies. I'm driven by continuous learning and believe in clean,
              maintainable code.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: "2+", label: "Years in Tech" },
              { value: "4+", label: "Major Projects" },
              { value: "500+", label: "Problems Solved" },
              { value: "15+", label: "Technologies" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="p-4 bg-white/5 border border-white/10 rounded-lg text-center hover:border-white/30 transition-all duration-300"
              >
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/50 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
