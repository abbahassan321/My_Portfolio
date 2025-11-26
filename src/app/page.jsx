import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { portfolioData } from '@/data/portfolioData';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <section className="h-[60vh] flex flex-col justify-center items-center text-center px-4 bg-white border-b">
        <h1 className="text-6xl font-extrabold text-gray-900">
          {portfolioData.hero.name}
        </h1>
        <h2 className="text-3xl font-semibold text-blue-600 mt-2">
          {portfolioData.hero.title}
        </h2>
        <p className="text-xl text-gray-600 mt-4 max-w-2xl">
          {portfolioData.hero.tagline}
        </p>

        <a href="#projects"
          className="mt-8 px-8 py-3 bg-gray-800 text-white rounded-lg">
          Explore My Work
        </a>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />

    </main>
  );
}
