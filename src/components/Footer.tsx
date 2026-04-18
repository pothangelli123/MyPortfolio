"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 gradient-text">Quick Links</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="#about" className="hover:text-cyan-400 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-cyan-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-cyan-400 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4 gradient-text">Resources</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link
                  href="#"
                  className="hover:text-purple-400 transition-colors"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-purple-400 transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-purple-400 transition-colors"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-purple-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 gradient-text">Stay Updated</h3>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to get updates on new projects and articles.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-slate-800/50 border border-slate-700 rounded text-sm focus:border-cyan-400 focus:outline-none text-slate-100"
              />
              <button className="px-4 py-2 bg-cyan-400 text-slate-950 text-sm font-semibold rounded hover:bg-cyan-300 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center text-slate-400 text-sm"
        >
          <p>© {currentYear} Your Name. All rights reserved.</p>
          <p className="mt-4 sm:mt-0">
            Built with{" "}
            <span className="text-cyan-400 font-semibold">Next.js</span> &{" "}
            <span className="text-purple-400 font-semibold">Framer Motion</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
