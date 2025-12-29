"use client";
import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="relative py-28 bg-slate-950 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            Technical <span className="text-cyan-400">Stack</span>
          </h2>
          <p className="text-slate-400 max-w-2xl">
            My expertise spans the full software development lifecycle, with
            strong focus on Java Spring Boot, modern JavaScript frameworks,
            and scalable backend systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/5 transition-all"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 text-cyan-400/80 group-hover:text-cyan-400 transition">
                {group.icon}
              </div>

              {/* Category */}
              <h3 className="text-lg font-bold mb-4">
                {group.category}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium rounded-md
                               bg-slate-800 text-slate-300
                               border border-slate-700
                               group-hover:border-cyan-400/30
                               transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
