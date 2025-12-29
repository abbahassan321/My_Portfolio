"use client";
import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ExternalLink, Github, Lock } from "lucide-react";

export default function Projects() {
  const projects = portfolioData.projects || [];

  return (
    <section className="relative py-28 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Production-ready systems across FinTech, EdTech, and Utility platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400/40 transition"
            >
              <span className="text-xs font-bold text-cyan-400 uppercase">
                {project.category}
              </span>

              <h3 className="text-xl font-bold mt-3 mb-3 hover:text-cyan-400 transition">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack?.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm">
                {project.links?.code ? (
                  <a
                    href={project.links.code}
                    target="_blank"
                    className="flex items-center gap-2 text-slate-300 hover:text-white"
                  >
                    <Github size={16} /> Code
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-slate-500">
                    <Lock size={16} /> Private
                  </span>
                )}

                {project.links?.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
