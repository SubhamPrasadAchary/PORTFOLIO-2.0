'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import portfolioImg from '../public/projects/portfolio.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'RUMBLE-ROULETTE',
      description:
        'Experience the thrill of roulette with this interactive online game!',
      technologies: ['React', 'JavaScript', 'CSS'],
      githubUrl: 'https://github.com/SubhamPrasadAchary/RUMBLE-ROULETTE-.git',
      liveUrl: 'https://rumble-roulette.vercel.app/',
      image: '/projects/roulette.jpg',
      
    },
    {
      title: 'Memory Maze game',
      description: 'Memorize a glowing path from green start to red goal, then trace it from memory before time runs out.',
      technologies: ['React', 'Vercel', 'TypeScript', 'JavaScript'],
      liveUrl: 'https://memory-maze-psi.vercel.app/',
      githubUrl: 'https://github.com/SubhamPrasadAchary/MEMORY-MAZE',
      image: '/projects/livefit .jpg',
    },
    {
      title: 'MY Portfolio',
      description:
        'A modern and responsive portfolio website built with React and Tailwind CSS.',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com/SubhamPrasadAchary/MY-PORTFOLIO.git',
      liveUrl: '#',
      image: portfolioImg,
      
    },
  ];

  const handleOpenLink = (url: string) => {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="projects" className="py-16 relative">
      <div className="absolute inset-0 animated-gradient opacity-30"></div>
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img 
                    src={typeof project.image === 'string' ? project.image : project.image.src} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">{project.title[0]}</div>
                    <div className="text-sm">Project Preview</div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleOpenLink(project.liveUrl)}
                  >
                    View Live
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleOpenLink(project.githubUrl)}
                  >
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="px-8"
            onClick={() => handleOpenLink('https://github.com/SubhamPrasadAchary?tab=repositories')}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
