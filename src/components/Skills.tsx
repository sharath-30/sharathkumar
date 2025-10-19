
import { Brain, Code, Database, Zap, Server, Cloud, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: Server,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      skills: [
        "Java",
        "Spring Boot",
        "Flask",
        "RESTful APIs",
        "gRPC",
        "Redis",
        "PostgreSQL",
        "Apache Kafka"
      ]
    },
    {
      title: "Frontend Development",
      icon: Code,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      skills: [
        "React",
        "Redux Toolkit",
        "Axios",
        "HTML5",
        "CSS3",
        "JavaScript"
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      skills: [
        "AWS (EKS, RDS, S3)",
        "Docker",
        "Kubernetes",
        "Helm",
        "Terraform",
        "Jenkins",
        "CI/CD",
        "SonarQube",
        "Fortify"
      ]
    },
    {
      title: "Data & Machine Learning",
      icon: Brain,
      color: "text-rose-400",
      bgColor: "bg-rose-500/10",
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "PyTorch",
        "TensorFlow",
        "OpenCV",
        "Matplotlib",
        "Seaborn",
        "Vision Transformer"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
