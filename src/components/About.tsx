"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-block px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full mb-6">
            <p className="text-cyan-400 text-sm font-medium">ABOUT ME</p>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-8">Who Am I?</h2>

          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p className="text-lg">
              I'm a passionate full-stack developer with 4+ years of experience building web
              applications that users love. I specialize in creating seamless experiences using
              modern technologies like React, Next.js, and Node.js.
            </p>

            <p className="text-lg">
              My journey in tech started with a curiosity about how things work on the web. Since
              then, I've grown to love solving complex problems and building features that make
              a real impact. I'm particularly interested in performance optimization, scalable
              architecture, and creating exceptional user experiences.
            </p>

            <p className="text-lg">
              When I'm not coding, you'll find me contributing to open-source projects, writing
              technical blog posts, or exploring new technologies. I'm always eager to learn and
              collaborate with talented people.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <p className="text-cyan-400 text-2xl font-bold">4+</p>
                <p className="text-slate-400">Years Experience</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <p className="text-purple-400 text-2xl font-bold">20+</p>
                <p className="text-slate-400">Projects Completed</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <p className="text-pink-400 text-2xl font-bold">100%</p>
                <p className="text-slate-400">Satisfaction Rate</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <p className="text-cyan-400 text-2xl font-bold">10+</p>
                <p className="text-slate-400">Technologies</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
