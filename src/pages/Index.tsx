
import { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Github, Linkedin, ExternalLink, Download, Code, Brain, Database, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import Publications from '@/components/Publications';
import Contact from '@/components/Contact';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'certifications', 'projects', 'publications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation activeSection={activeSection} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Publications />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
