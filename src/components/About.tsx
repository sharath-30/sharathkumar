
import { GraduationCap, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about continuous learning and always eager to explore and embrace new technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white mb-4">My Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed mb-6">
                As an AI graduate specializing in Large Language Models and generative AI, I bring a unique blend of 
                theoretical knowledge and practical experience. My journey in technology has been driven by curiosity 
                and a passion for solving complex problems through innovative solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I thrive in collaborative environments and enjoy working on projects that push the boundaries of what's 
                possible with AI and web technologies. My goal is to contribute to meaningful projects that make a 
                positive impact on society.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-white">
                  <GraduationCap className="mr-3 text-amber-400" size={24} />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white">M.S. in Artificial Intelligence</h4>
                  <p className="text-gray-400">Worcester Polytechnic Institute</p>
                  <p className="text-sm text-gray-500">Expected 2026</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white">B.Tech in Computer Science and Business Systems</h4>
                  <p className="text-gray-400">MGIT Hyderabad</p>
                  <p className="text-sm text-gray-500">2024</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-white">
                  <MapPin className="mr-3 text-amber-400" size={24} />
                  Location & Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-gray-300">Based in Massachusetts, USA</p>
                  <p className="text-gray-400">Open to opportunities worldwide</p>
                  <p className="text-sm text-gray-500">Available for remote work</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
