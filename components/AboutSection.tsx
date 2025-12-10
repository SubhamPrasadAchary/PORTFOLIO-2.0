import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 relative">
      <div className="absolute inset-0 animated-gradient opacity-30"></div>
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                4th-year B.Tech CSE student at Amity University, passionate about coding, web development, and AI, actively building projects and continuously learning. Ex-intern@JabszGamingStudiosLLP.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                With experience in both frontend and backend development, I enjoy tackling complex problems and 
                creating seamless user experiences that make a difference.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-3">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    Skills & Technologies
                  </span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'HTML','TypeScript', 'Node.js', 'Tailwind CSS', 'JavaScript', 'Vite', 'Git', 'Vercel', 'MongoDB', 'DSA', 'Github'].map((skill, index) => {
                    const gradients = [
                      'from-purple-500 to-pink-500',
                      'from-blue-500 to-cyan-500', 
                      'from-green-500 to-emerald-500',
                      'from-orange-500 to-yellow-500',
                      'from-red-500 to-pink-500',
                      'from-indigo-500 to-purple-500',
                      'from-cyan-500 to-blue-500',
                      'from-emerald-500 to-green-500'
                    ];
                    return (
                      <span
                        key={skill}
                        className={`px-3 py-1 bg-gradient-to-r ${gradients[index % gradients.length]} text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative w-64 h-64 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full overflow-hidden shadow-2xl">
                  <img 
                    src="/your-photo.jpg" 
                    alt="Subham" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
