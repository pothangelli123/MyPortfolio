"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/50 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Pothan Gelli</h3>
            <p className="text-white/60 text-sm">
              Software Developer building scalable web applications with modern technologies. Based in
              Hyderabad, India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-white transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>
                <Link href="https://github.com" className="hover:text-white transition-colors" target="_blank">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com" className="hover:text-white transition-colors" target="_blank">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://leetcode.com" className="hover:text-white transition-colors" target="_blank">
                  LeetCode
                </Link>
              </li>
              <li>
                <Link href="mailto:pothangelli123@gmail.com" className="hover:text-white transition-colors">
                  Email
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center text-white/50 text-sm"
        >
          <p>© {currentYear} Pothan Gelli. All rights reserved.</p>
          <p className="mt-4 sm:mt-0">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
