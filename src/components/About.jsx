"use client";
import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";

export default function About() {
  const { about } = portfolioData;

  return (
    <section className="relative py-28 bg-slate-950 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-3x1 overflow-hidden border border-slate-800 shadow-3x1">
              <img
                src="/hassan2.jpg"
                alt="Hassan Idris"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-6 bg-cyan-500/10 blur-3xl rounded-full -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-extrabold mb-6">
              About <span className="text-cyan-400">Me</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              {about.summary}
            </p>

            <div className="space-y-6 mb-10">
              {about.sections.map((section, index) => (
                <div key={index}>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {section.title}
                  </h3>
                  <p className="text-slate-400">{section.content}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {about.funFacts.map((fact, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800"
                >
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    {fact.label}
                  </p>
                  <p className="text-xl font-bold text-cyan-400">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
