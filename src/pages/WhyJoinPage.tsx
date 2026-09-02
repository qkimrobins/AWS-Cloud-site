import React, { useState } from 'react';
import { ChevronRight, ArrowRight, Terminal, Code2, Rocket, Award } from 'lucide-react';
import { Container } from '../components/UI/Container';
import { Badge } from '../components/UI/Badge';
import { Button } from '../components/UI/Button';
import { FeatureCard } from '../components/FeatureCard';
import { features } from '../content/features';
import { siteContent } from '../content/site';

interface WhyJoinPageProps {
  onNavigate: (page: string) => void;
}

export const WhyJoinPage: React.FC<WhyJoinPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { hero } = siteContent;

  const categories = ['all', 'Infrastructure', 'Engineering', 'Development', 'Community', 'Growth', 'Credentials'];

  const filteredFeatures = features.filter((feat) => {
    if (activeCategory === 'all') return true;
    return feat.category.toLowerCase() === activeCategory.toLowerCase();
  });

  const roadmapSteps = [
    {
      step: '01',
      title: 'Cloud Foundations',
      description: 'Master core compute (EC2), storage (S3), IAM, and multi-cloud basics.',
      icon: <Terminal className="w-4 h-4 text-blue-400" />,
    },
    {
      step: '02',
      title: 'DevOps & Containers',
      description: 'Build CI/CD pipelines, Docker containers, and automated workflows.',
      icon: <Code2 className="w-4 h-4 text-indigo-400" />,
    },
    {
      step: '03',
      title: 'Projects & Hackathons',
      description: 'Build serverless applications and collaborate in student hackathon teams.',
      icon: <Rocket className="w-4 h-4 text-purple-400" />,
    },
    {
      step: '04',
      title: 'Certs & Careers',
      description: 'Structured study pods for AWS certifications, resume reviews, and prep.',
      icon: <Award className="w-4 h-4 text-sky-400" />,
    },
  ];

  return (
    <div className="pt-24 pb-16 animate-fade-in bg-cloud-radial min-h-screen">
      {/* Page Header */}
      <section className="py-8 md:py-12 border-b border-white/10 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-3">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-blue-400">Why Join</span>
          </div>

          <div className="max-w-2xl">
            <Badge variant="purple" size="sm" dot={false} className="mb-3">
              Member Value
            </Badge>
            <h1 className="text-2xl sm:text-4xl font-bold text-[#F8FAFC] tracking-tight font-['Space_Grotesk'] leading-tight">
              Why Join the Cloud Club
            </h1>
            <p className="mt-2.5 text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed">
              Accelerate your growth with guided labs, hackathon teams, cloud credits, and certification roadmaps.
            </p>
          </div>
        </Container>
      </section>

      {/* Benefits Grid with Filter Tabs */}
      <section className="py-10 md:py-14">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-[#F8FAFC] font-['Space_Grotesk']">
              Member Benefits
            </h2>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white font-semibold shadow-sm'
                      : 'bg-[#10192D] text-slate-400 hover:text-white border border-white/10'
                  }`}
                >
                  {cat === 'all' ? 'All' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            {filteredFeatures.map((feature, index) => (
              <FeatureCard key={feature.id} feature={feature} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* 4-Stage Pathway */}
      <section className="py-10 md:py-14 border-t border-white/10 bg-[#0C1222]/40 relative">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
            <Badge variant="blue" size="sm" dot={false} className="mb-2.5">
              Curriculum Pathway
            </Badge>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F8FAFC] font-['Space_Grotesk']">
              The 4-Stage Builder Roadmap
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {roadmapSteps.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl bg-[#0E1629] border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between space-y-3 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-[#10192D] border border-white/10">
                      {step.icon}
                    </div>
                    <span className="text-lg font-black font-mono text-slate-600">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#F8FAFC] font-['Space_Grotesk']">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <Button
              href={hero.joinCta.href}
              isExternal
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Apply to Join Community
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};
