"use client";
import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const { hero } = portfolioData;

  return (
    <section className="relative py-28 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            Let’s <span className="text-cyan-400">Connect</span>
          </h2>
          <p className="text-slate-400">
            Open to junior / associate full-stack roles and collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 bg-slate-900/60 border border-slate-800 rounded-2xl p-10">
          {/* Info */}
          <div>
            <h3 className="font-bold mb-6">Contact Info</h3>
            <div className="space-y-4 text-slate-300 text-sm">
              <a href={`mailto:${hero.email}`} className="flex gap-3 hover:text-cyan-400">
                <Mail size={18} /> {hero.email}
              </a>
              <a href={hero.linkedin} className="flex gap-3 hover:text-cyan-400">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href={hero.github} className="flex gap-3 hover:text-cyan-400">
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <input
              placeholder="Your name"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-400 outline-none"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-400 outline-none"
            />
            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-400 outline-none"
            />
            <button className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-lg flex items-center justify-center gap-2">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
