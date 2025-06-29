
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Certifications = () => {
  const certifications = [
    {
      title: "Generative AI with LLM",
      issuer: "Amazon Web Services",
      year: "2025",
      description: "Advanced training in generative AI techniques and large language model implementation",
      badge: "Latest"
    },
    {
      title: "Google AI Essentials",
      issuer: "Coursera",
      year: "2024",
      description: "Comprehensive foundation in AI concepts and practical applications"
    },
    {
      title: "Google Cloud Program",
      issuer: "Google",
      year: "2023",
      description: "Cloud computing and AI services on Google Cloud Platform"
    },
    {
      title: "Programming Essentials in Python",
      issuer: "Cisco Networking Academy",
      year: "2023",
      description: "Advanced Python programming concepts and best practices"
    },
    {
      title: "Artificial Intelligence, Machine Learning and Deep Learning",
      issuer: "NIT Warangal",
      year: "2022",
      description: "Comprehensive training in AI/ML fundamentals and advanced techniques"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Continuous learning and professional development in AI and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Award className="text-amber-400 flex-shrink-0" size={24} />
                  {cert.badge && (
                    <Badge className="bg-amber-500 text-black text-xs">
                      {cert.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg text-white leading-tight">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar size={14} className="mr-2" />
                    {cert.issuer} • {cert.year}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
