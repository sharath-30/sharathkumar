import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experience = {
    title: "Software Engineer",
    company: "ICICI Bank",
    period: "Apr 2023 – Jul 2024",
    location: "India",
    responsibilities: [
      "Developed scalable Spring Boot microservices integrated with Apache Kafka for asynchronous loan processing.",
      "Built React and Redux Toolkit dashboards with real-time Kafka-driven updates for loan officers.",
      "Designed PostgreSQL schemas and Redis caching, reducing API response time by 35%.",
      "Integrated Flask microservices for OCR validation and risk scoring into the Java backend.",
      "Automated deployments on AWS EKS using Docker, Helm, and Terraform.",
      "Implemented Jenkins CI/CD pipelines with SonarQube and Fortify for secure, high-quality builds.",
      "Added Prometheus and Grafana dashboards for real-time system monitoring.",
      "Helped cut loan processing time from 14 to 5 days with microservices and Kafka integration."
    ],
    technologies: [
      "Spring Boot", "Apache Kafka", "React", "Redux Toolkit", 
      "PostgreSQL", "Redis", "Flask", "AWS EKS", 
      "Docker", "Helm", "Terraform", "Jenkins", 
      "SonarQube", "Prometheus", "Grafana"
    ]
  };

  return (
    <section id="experience" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-8 h-8 text-amber-400" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Experience
          </h2>
        </div>

        <Card className="bg-slate-800/80 border-slate-700 hover:border-amber-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
              <div>
                <CardTitle className="text-2xl text-white mb-2">
                  {experience.title}
                </CardTitle>
                <div className="text-xl text-amber-400 font-semibold mb-3">
                  {experience.company}
                </div>
              </div>
              <div className="flex flex-col gap-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {experience.technologies.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="secondary"
                  className="bg-slate-700/50 text-amber-400 border-slate-600 hover:bg-slate-700"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardHeader>

          <CardContent>
            <div className="space-y-3">
              {experience.responsibilities.map((responsibility, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300 leading-relaxed">
                    {responsibility}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
