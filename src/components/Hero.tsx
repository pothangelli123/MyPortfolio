"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-block px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full">
              <p className="text-cyan-400 text-sm font-medium">
                Welcome to my portfolio ✨
              </p>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="gradient-text">Full-Stack Developer</span>
            <br />
            <span className="text-slate-300">& Problem Solver</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            I build modern, scalable web applications with cutting-edge technologies.
            Passionate about creating intuitive user experiences and robust backend systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              View My Work <ArrowRight size={20} />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:bg-slate-800 hover:border-cyan-400 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="pt-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-slate-500 text-sm">Scroll to explore</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
