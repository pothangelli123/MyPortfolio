"use client";

import { motion } from "framer-motion";
import { Mail, Code2, Share2, Globe } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 3000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Code2,
      url: "https://github.com",
      color: "hover:text-cyan-400",
    },
    {
      name: "LinkedIn",
      icon: Share2,
      url: "https://linkedin.com",
      color: "hover:text-purple-400",
    },
    {
      name: "Twitter",
      icon: Globe,
      url: "https://twitter.com",
      color: "hover:text-pink-400",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:you@example.com",
      color: "hover:text-cyan-400",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <div className="inline-block px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full mb-6">
            <p className="text-cyan-400 text-sm font-medium">GET IN TOUCH</p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Let's Collaborate</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none text-slate-100 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none text-slate-100 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none text-slate-100 transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-cyan-400 focus:outline-none text-slate-100 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>

            {submitStatus === "success" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-cyan-400 text-center"
              >
                ✓ Message sent successfully!
              </motion.p>
            )}
            {submitStatus === "error" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-pink-400 text-center"
              >
                ✗ Failed to send message. Please try again.
              </motion.p>
            )}
          </motion.form>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Connect with me</h3>
              <p className="text-slate-400 mb-6">
                Reach out through any of these channels. I'll get back to you as soon as
                possible!
              </p>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 bg-slate-800/50 border border-slate-700 rounded-lg transition-all duration-300 hover:border-slate-600 ${link.color}`}
                    >
                      <Icon size={24} />
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="p-6 bg-slate-800/30 border border-slate-700 rounded-lg">
              <h4 className="text-lg font-semibold mb-2 text-slate-100">
                Available for
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>✓ Full-time positions</li>
                <li>✓ Freelance projects</li>
                <li>✓ Consulting</li>
                <li>✓ Collaborations</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
