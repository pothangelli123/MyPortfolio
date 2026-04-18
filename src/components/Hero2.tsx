"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Parallax background elements */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-10 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
              <p className="text-sm font-medium text-white/80">
                Software Developer • Pegasystems
              </p>
            </div>
          </motion.div>

          {/* Main heading - Geometric Modern */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-heading-xl"
          >
            <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent block mb-4">
              POTHAN GELLI
            </span>
            <span className="text-white/70 text-4xl md:text-5xl font-bold">
              Full-Stack Developer & Problem Solver
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            Building scalable web applications and solving complex problems with Java, React,
            and modern cloud technologies. AWS Certified Developer with 500+ LeetCode problems solved.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 py-8"
          >
            {[
              { label: "Years Experience", value: "2+" },
              { label: "Projects Built", value: "4+" },
              { label: "Problems Solved", value: "500+" },
              { label: "Tech Stack", value: "15+" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Link
              href="#projects"
              className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 cursor-hover"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/5 transition-all duration-300 cursor-hover"
            >
              Let's Connect
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
