import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import { FloatingNav } from '@/components/ui/FloatingNav';
import ThreeBackground from '@/components/ThreeBackground';

export const metadata: Metadata = {
  title: 'My Portfolio | Web Developer',
  description: 'A modern portfolio built with Next.js, Aceternity UI, and Three.js',
  keywords: ['portfolio', 'web developer', 'next.js', 'react', 'three.js'],
};

export default function Home() {
  return (
    <main className="relative bg-pink-50 flex flex-col items-center justify-center overflow-hidden">
      <ThreeBackground />
      <FloatingNav />
      <div className="w-full">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
