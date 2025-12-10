'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SparklesCore } from '@/components/ui/sparkles';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-30"></div>
      
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent glow-text">
              Subham
            </span>
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-muted-foreground md:text-xl">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent font-semibold">
              Full Stack Developer
            </span>
            {' | '}
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent font-semibold">
              UI/UX Designer
            </span>
            {' | '}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent font-semibold">
              AI Enthusiast
            </span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button 
              size="lg" 
              className="px-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <p className="mb-2 text-sm text-muted-foreground font-medium">Scroll Down</p>
            <div className="w-6 h-10 border-2 rounded-full border-gradient-to-r from-purple-500 to-pink-500 flex justify-center p-1 glow-border">
              <motion.div
                className="w-1 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
