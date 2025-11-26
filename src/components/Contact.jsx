import React from 'react';
import { portfolioData } from '@/data/portfolioData';

const SocialLink = ({ href, icon, name }) => (
  <a href={href} target="_blank" rel="noopener noreferrer"
    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition">
    <span className="text-2xl">{icon}</span>
    <span className="text-lg font-medium hidden md:inline">{name}</span>
  </a>
);

const Contact = () => {
  const { hero } = portfolioData;

  return (
    <section id="contact" className="py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4">

        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm actively seeking Junior/Associate Full Stack roles and open to collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          <div className="bg-gray-50 p-8 rounded-xl shadow-inner border">
            <h3 className="text-2xl font-bold mb-6">Connect with Me</h3>

            <div className="space-y-6">
              <SocialLink href={`mailto:${hero.email}`} icon="✉️" name={hero.email} />
              <SocialLink href={hero.linkedin} icon="🔗" name="LinkedIn" />
              <SocialLink href={hero.github} icon="🐙" name="GitHub" />
            </div>
          </div>

          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-2xl border-t-4 border-blue-600">

            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

            <form action="YOUR_FORM_ENDPOINT" method="POST" className="space-y-4">

              <div>
                <label className="block mb-1">Name</label>
                <input 
                  type="text" name="name" required
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block mb-1">Email</label>
                <input 
                  type="email" name="email" required
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block mb-1">Message</label>
                <textarea 
                  name="message" rows="4" required
                  className="w-full px-4 py-2 border rounded-lg"
                ></textarea>
              </div>

              <button type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg">
                Send Message
              </button>

            </form>
          </div>
        </div>

        <footer className="mt-16 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {hero.name}. Built with Next.js.
        </footer>

      </div>
    </section>
  );
};

export default Contact;
