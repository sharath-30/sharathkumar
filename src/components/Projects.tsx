

import { ExternalLink, Github, Calendar, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Facial Expression Recognition using Transformer Models",
      description: "Built an advanced facial expression recognition system that classifies 7 human emotions — Angry, Happy, Sad, Surprise, Fear, Disgust, and Neutral — from facial images. The system uses state-of-the-art Transformer architectures (Vision Transformer and Swin Transformer) and a custom CNN. Trained and tested on FER-2013 and CK+ datasets (35k+ images), with performance optimized through data augmentation.",
      technologies: ["Python", "PyTorch", "Kaggle API", "Vision Transformer (ViT)", "Swin Transformer", "Custom CNN"],
      period: "Feb 2025 – May 2025",
      type: "AI/ML Project",
      highlights: ["Compared ViT, Swin Transformer, and Custom CNN", "Used FER-2013 & CK+ benchmark datasets"]
    },
    {
      title: "Evaluating Fine-Tuning Techniques on FLAN-T5 for QA",
      description: "Comprehensive research project comparing zero-shot, few-shot, and Parameter Efficient Fine-Tuning (PEFT) techniques on FLAN-T5 model for question-answering tasks. Evaluated performance using Exact Match and F1 scores.",
      technologies: ["FLAN-T5", "PEFT", "Hugging Face", "Python", "PyTorch"],
      period: "Oct 2023 – Feb 2024",
      type: "Research Project",
      highlights: ["Zero-shot Learning", "Few-shot Learning", "PEFT Implementation", "Performance Evaluation"]
    },
    {
      title: "Neurovision – Brain Tumor Identification",
      description: "Deep learning application for automated brain tumor detection using MRI data. Implemented and compared multiple CNN architectures including Xception and DenseNet201 for accurate medical image classification.",
      technologies: ["CNNs", "Xception", "DenseNet201", "TensorFlow"],
      period: "Oct 2024 – Dec 2024",
      type: "AI/ML Project",
      highlights: ["Medical AI", "CNN Architecture", "Image Classification", "Healthcare Application"]
    },
    {
      title: "Predicting Sports Match Outcomes",
      description: "Machine learning system that predicts sports match results using historical data and statistical analysis. Features an intuitive web interface for users to input match parameters and view predictions.",
      technologies: ["Machine Learning", "Python", "Flask", "Scikit-learn", "Web UI"],
      period: "Jun 2023 – Sep 2023",
      type: "Full-Stack Project",
      highlights: ["Predictive Analytics", "Web Interface", "Data Analysis", "Sports Analytics"]
    },
    {
      title: "AI Virtual Web Assistant",
      description: "Intelligent voice-activated web assistant with natural language processing capabilities. Features voice interaction, speech synthesis, and can perform various web-based tasks through voice commands.",
      technologies: ["NLP", "Speech Recognition", "Python", "Web APIs", "Voice Synthesis"],
      period: "Jun 2022 – Sep 2022",
      type: "AI Assistant",
      highlights: ["Voice Recognition", "Natural Language Processing", "Speech Synthesis", "Web Integration"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Research Project":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      case "AI/ML Project":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Full-Stack Project":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "AI Assistant":
        return "bg-amber-500/20 text-amber-300 border-amber-500/30";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Innovative solutions in AI, machine learning, and full-stack development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 hover:border-amber-400/30 transition-all duration-300 hover:transform hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge className={`${getTypeColor(project.type)} border`}>
                    {project.type}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar size={14} className="mr-1" />
                    {project.period}
                  </div>
                </div>
                <CardTitle className="text-xl text-white leading-tight">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-slate-600 text-gray-400">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} className="bg-slate-700 text-gray-300 hover:bg-slate-600">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
