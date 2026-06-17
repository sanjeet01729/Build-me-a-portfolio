import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink?: string;
  liveLink?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, image, tags, githubLink, liveLink }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
      <img
        src={image}
        alt={`Screenshot of ${title}`}
        onError={(e) => { (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/project-fallback/400/300'; }}
        className="w-full h-48 object-cover rounded-xl mb-6"
      />
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500 text-base leading-relaxed mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span key={tag} className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-auto">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-black transition-colors duration-200 flex items-center gap-1"
            aria-label={`View ${title} on GitHub`}
          >
            <Github size={20} /> GitHub
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-black transition-colors duration-200 flex items-center gap-1"
            aria-label={`View live demo of ${title}`}
          >
            <ExternalLink size={20} /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const projectsData: ProjectProps[] = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce application built with modern technologies, featuring user authentication, product listings, shopping cart, and secure checkout.',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80&auto=format&fit=crop',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      githubLink: 'https://github.com/yourusername/ecommerce-platform',
      liveLink: 'https://ecommerce.example.com',
    },
    {
      title: 'Task Management App',
      description: 'A minimalist task management application designed for productivity, allowing users to create, organize, and track their daily tasks with ease.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop',
      tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      githubLink: 'https://github.com/yourusername/task-manager',
      liveLink: 'https://taskmanager.example.com',
    },
    {
      title: 'Portfolio Website',
      description: 'This very portfolio website, showcasing my skills and projects. Built with a focus on clean design, responsiveness, and performance.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80&auto=format&fit=crop',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      githubLink: 'https://github.com/yourusername/portfolio-website',
      liveLink: 'https://yourportfolio.com',
    },
    {
      title: 'Weather Dashboard',
      description: 'A dynamic weather application providing real-time weather data for any city, utilizing a third-party API and interactive UI components.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f0679192?w=800&q=80&auto=format&fit=crop',
      tags: ['JavaScript', 'HTML', 'CSS', 'OpenWeather API'],
      githubLink: 'https://github.com/yourusername/weather-dashboard',
      liveLink: 'https://weather.example.com',
    },
    {
      title: 'Recipe Finder',
      description: 'An application that allows users to search for recipes based on ingredients, dietary restrictions, and cuisine types, fetching data from a recipe API.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80&auto=format&fit=crop',
      tags: ['React', 'API Integration', 'CSS Modules'],
      githubLink: 'https://github.com/yourusername/recipe-finder',
      liveLink: 'https://recipes.example.com',
    },
    {
      title: 'Blog Platform',
      description: 'A simple blog platform where users can create, edit, and publish articles. Features include rich text editing and comment sections.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop',
      tags: ['Next.js', 'GraphQL', 'PostgreSQL', 'Auth0'],
      githubLink: 'https://github.com/yourusername/blog-platform',
      liveLink: 'https://blog.example.com',
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
