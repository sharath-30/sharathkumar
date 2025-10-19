
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-300 flex items-center justify-center text-6xl font-bold text-slate-800">
              SA
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Sharath Kumar
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Amula
            </span>
          </h1>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm">
              AI Engineer
            </span>
            <span className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm">
              Full-Stack Developer
            </span>
            <span className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm">
              Software Engineer
            </span>
          </div>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate and detail-oriented Software Engineer who loves turning ideas into reliable, high-performing applications. At ICICI Bank, I built scalable Spring Boot microservices, integrated real-time Kafka pipelines, and developed intuitive React dashboards that enhanced system efficiency. With hands-on experience across Java, Python, AWS, Docker, Kubernetes, and DevOps tools, I enjoy solving problems end-to-end — from backend logic to cloud deployment. I'm driven by curiosity, innovation, and a desire to create technology that makes a real impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black font-semibold px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={scrollToAbout}
              className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-8 py-3 text-lg"
            >
              Learn More
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="mailto:sharathkumar3a2@gmail.com"
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://linkedin.com/in/sharathamula30"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/sharath-30"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors duration-200"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-amber-400" />
      </div>
    </section>
  );
};

export default Hero;
