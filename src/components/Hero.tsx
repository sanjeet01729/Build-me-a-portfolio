import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Hi, I'm <span className="text-black">[Your Name]</span>.
            <br />
            A passionate <span className="text-black">[Your Profession]</span>.
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-8">
            I build elegant and efficient web solutions that bring ideas to life.
            Let's create something amazing together.
          </p>
          <a
            href="#contact"
            className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 inline-block"
          >
            Get in Touch
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop"
            alt="Professional portrait of [Your Name]"
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/developer/800/600'; }}
            className="w-full max-w-md h-auto rounded-full object-cover border-4 border-gray-100 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
