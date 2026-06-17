import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop"
              alt="[Your Name] working on a project"
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/profile/800/600'; }}
              className="w-full h-auto rounded-2xl object-cover shadow-md"
            />
          </div>
          <div className="md:w-1/2 text-gray-900 leading-relaxed text-base">
            <p className="mb-4">
              Hello! I'm [Your Name], a [Your Profession] with a passion for crafting intuitive and visually appealing digital experiences. My journey in web development began [Number] years ago, driven by a curiosity to understand how things work and a desire to build solutions that make a real impact.
            </p>
            <p className="mb-4">
              I specialize in [Key Skill 1, e.g., React, TypeScript, Node.js] and have a strong foundation in [Key Skill 2, e.g., UI/UX principles, database management]. I thrive in environments where I can continuously learn and apply new technologies to solve complex problems.
            </p>
            <p>
              When I'm not coding, you can find me [Hobby 1, e.g., exploring new hiking trails], [Hobby 2, e.g., reading sci-fi novels], or [Hobby 3, e.g., experimenting with new recipes]. I believe in a balanced life, which fuels my creativity and problem-solving skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
