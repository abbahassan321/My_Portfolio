"use client";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Code2, Cpu } from "lucide-react";

export default function Hero() {
    const { hero } = portfolioData;

    return (
        <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-slate-950 text-white">

            {/* ================= BACKGROUND ================= */}

            {/* Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />

            {/* Noise */}
            <div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')] pointer-events-none" />

            {/* Engineering Grid */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf814_1px,transparent_1px),linear-gradient(to_bottom,#38bdf814_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(circle_60%_50%_at_50%_40%,#000_65%,transparent_100%)]" />
            </div>

            {/* Floating Icons */}
            <motion.div
                animate={{ y: [0, -25, 0], rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="absolute top-[18%] right-[12%] text-cyan-400/10"
            >
                <Code2 size={180} strokeWidth={0.4} />
            </motion.div>

            <motion.div
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[18%] right-[22%] text-indigo-400/10"
            >
                <Cpu size={120} strokeWidth={0.4} />
            </motion.div>

            {/* ================= CONTENT ================= */}

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-3xl">

                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-6"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        {hero.status || "Available for work"}
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="text-6xl md:text-8xl font-extrabold tracking-tight mb-4"
                    >
                        {hero.name}
                        <span className="text-cyan-400">.</span>
                    </motion.h1>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="text-2xl md:text-4xl font-semibold text-slate-300 mb-6"
                    >
                        {hero.title}
                        <span className="block text-slate-500 font-light text-xl mt-2 italic">
                            {hero.subtitle}
                        </span>
                    </motion.h2>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="text-lg text-slate-400 leading-relaxed max-w-xl mb-10 border-l-4 border-cyan-400/20 pl-6"
                    >
                        {hero.tagline}
                    </motion.p>

                    {/* Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                        className="flex flex-wrap gap-5"
                    >
                        <a
                            href="/projects"
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-slate-900 rounded-lg font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
                        >
                            View Projects
                            <ArrowRight
                                size={18}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </a>

                        <a
                            href={hero.resumeLink}
                            download
                            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white border border-slate-700 rounded-lg font-bold hover:border-cyan-400 transition-all"
                        >
                            Resume.pdf <Download size={18} />
                        </a>

                        <div className="flex items-center gap-4 py-2 px-4 bg-slate-900 rounded-lg border border-slate-800">
                            <a
                                href={hero.github}
                                target="_blank"
                                className="text-slate-400 hover:text-white transition"
                            >
                                <Github size={22} />
                            </a>
                            <div className="w-[1px] h-4 bg-slate-700"></div>
                            <a
                                href={hero.linkedin}
                                target="_blank"
                                className="text-slate-400 hover:text-cyan-400 transition"
                            >
                                <Linkedin size={22} />
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
