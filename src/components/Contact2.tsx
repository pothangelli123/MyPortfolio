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
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
    { name: "GitHub", icon: Code2, url: "https://github.com", color: "text-white" },
    { name: "LinkedIn", icon: Share2, url: "https://linkedin.com", color: "text-white" },
    { name: "Twitter", icon: Globe, url: "https://twitter.com", color: "text-white" },
    { name: "Email", icon: Mail, url: "mailto:pothangelli123@gmail.com", color: "text-white" },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/2 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8">
            <p className="text-sm font-medium text-white/70 uppercase tracking-wider">Get In Touch</p>
          </div>
          <h2 className="text-heading-lg mb-4">Let's Connect</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Interested in working together or just want to say hello? Reach out!
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
              <label className="block text-sm font-medium text-white/80 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:border-white/50 focus:outline-none text-white placeholder-white/40 transition-colors cursor-hover"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:border-white/50 focus:outline-none text-white placeholder-white/40 transition-colors cursor-hover"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:border-white/50 focus:outline-none text-white placeholder-white/40 transition-colors cursor-hover"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:border-white/50 focus:outline-none text-white placeholder-white/40 transition-colors resize-none cursor-hover"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 disabled:opacity-50 cursor-hover"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus === "success" && (
              <p className="text-green-400/80 text-center">✓ Message sent successfully!</p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-400/80 text-center">✗ Failed to send. Please try again.</p>
            )}
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Connect With Me</h3>
              <p className="text-white/60 mb-8">Reach out through any of these channels.</p>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 cursor-hover"
                    >
                      <Icon size={20} className={link.color} />
                      <span className="font-medium text-white">{link.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="p-6 bg-white/5 border border-white/20 rounded-lg">
              <h4 className="font-bold text-white mb-3">Open For</h4>
              <ul className="space-y-2 text-white/70">
                <li>✓ Full-time Opportunities</li>
                <li>✓ Freelance Projects</li>
                <li>✓ Technical Discussions</li>
                <li>✓ Collaborations</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
