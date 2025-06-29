
import { Brain, Code, Database, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      skills: [
        "Large Language Models (LLMs)",
        "PEFT (Parameter Efficient Fine-Tuning)",
        "Prompt Engineering",
        "Evaluation Metrics (EM & F1)",
        "Llama2",
        "FLAN-T5",
        "Hugging Face Transformers"
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      skills: [
        "Python",
        "Java",
        "C",
        "R",
        "JavaScript",
        "SQL"
      ]
    },
    {
      title: "Web Development",
      icon: Zap,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      skills: [
        "Full Stack Development",
        "Flask",
        "Servlets & JSP",
        "HTML/CSS",
        "React",
        "REST APIs"
      ]
    },
    {
      title: "Databases & Tools",
      icon: Database,
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
      skills: [
        "SQL",
        "Oracle",
        "Git/GitHub",
        "Docker",
        "AWS",
        "Google Cloud"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            A comprehensive toolkit for AI development and full-stack solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 hover:border-slate-600 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-white">
                  <div className={`p-3 rounded-lg ${category.bgColor} mr-4`}>
                    <category.icon className={category.color} size={24} />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-slate-700 text-gray-300 hover:bg-slate-600 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
