
import { ExternalLink, FileText, Users, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Publications = () => {
  const publications = [
    {
      title: "Neurovision – Deep Learning Approach for Brain Tumor Identification",
      authors: ["Sharath Kumar Amula", "Abhignya Rani.J", "Macha Phani Samhitha", "J. Hima Bindu"],
      journal: "Asian Pacific Journal of Biological Sciences",
      volume: "Volume 6, Issue 9",
      year: "2024",
      pages: "2075-2084",
      doi: "10.33472/AFJBS.6.9.2024.2075-2084",
      link: "https://www.afjbs.com/issue-content/neurovision-deep-learning-approach-for-brain-tumor-identification-1185",
      abstract: "This research presents a comprehensive deep learning approach for automated brain tumor identification using MRI imaging data. The study implements and compares multiple convolutional neural network architectures to achieve high accuracy in medical diagnosis.",
      keywords: ["Deep Learning", "Brain Tumor Detection", "Medical Imaging", "CNN", "MRI Analysis"]
    }
  ];

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Research Publications
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Contributing to the advancement of AI and machine learning research
          </p>
        </div>

        <div className="space-y-8">
          {publications.map((publication, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 hover:border-amber-400/30 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <FileText className="text-amber-400 mr-3" size={24} />
                    <span className="text-sm text-gray-400 bg-slate-700 px-3 py-1 rounded-full">
                      Research Paper
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar size={14} className="mr-1" />
                    {publication.year}
                  </div>
                </div>
                <CardTitle className="text-2xl text-white leading-tight mb-3">
                  {publication.title}
                </CardTitle>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Users size={14} className="mr-2" />
                    <span>{publication.authors.join(", ")}</span>
                  </div>
                  <div>
                    <span className="font-medium">{publication.journal}</span>
                    <span className="mx-2">•</span>
                    <span>{publication.volume}</span>
                    <span className="mx-2">•</span>
                    <span>{publication.year}</span>
                    <span className="mx-2">•</span>
                    <span>pp. {publication.pages}</span>
                  </div>
                  <div>
                    <span className="font-medium">DOI:</span>
                    <span className="ml-2 text-amber-400">{publication.doi}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Abstract</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {publication.abstract}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {publication.keywords.map((keyword, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-700 text-gray-300 text-xs rounded-full">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    variant="outline"
                    className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black"
                    onClick={() => window.open(publication.link, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Paper
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 italic">
            More publications coming soon as research continues...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Publications;
