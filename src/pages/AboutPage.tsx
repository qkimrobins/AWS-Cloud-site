import React from 'react';
import { Cloud, Cpu, Users, Award, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { Container } from '../components/UI/Container';
import { Badge } from '../components/UI/Badge';
import { Button } from '../components/UI/Button';
import { siteContent } from '../content/site';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { about } = siteContent;
  const meetupLink =
    siteContent.socialLinks.find((s) => s.platform === 'meetup')?.url ||
    'https://www.meetup.com/aws-cloud-club-at-central-university-of-jammu/members/?op=all';

  const faqs = [
    {
      q: "What is the AWS Student Builder Group at CUJ?",
      a: "An officially recognized student community at Central University of Jammu focused on cloud computing, DevOps automation, certifications, and guided multi-cloud projects."
    },
    {
      q: "Who can join the community?",
      a: "Any student enrolled at Central University of Jammu across any department or semester. No prior cloud computing experience is needed."
    },
    {
      q: "Are the workshops free of charge?",
      a: "Yes! All workshops, tech talks, hackathons, and study pods are completely free for CUJ students."
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
            <span className="text-blue-400">About Us</span>
          </div>

          <div className="max-w-2xl">
            <Badge variant="blue" size="sm" dot={false} className="mb-3">
              Community Charter
            </Badge>
            <h1 className="text-2xl sm:text-4xl font-bold text-[#F8FAFC] tracking-tight font-['Space_Grotesk'] leading-tight">
              About Our Chapter
            </h1>
            <p className="mt-2.5 text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed">
              Empowering students at Central University of Jammu with hands-on cloud skills, collaborative hackathons, and industry mentorship.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-10 md:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
            {/* Left Column: Mission Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-6 sm:p-7 rounded-3xl apple-glass shadow-xl space-y-4">
                <h2 className="text-lg font-bold text-[#F8FAFC] font-['Space_Grotesk']">
                  Our Mission & Vision
                </h2>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <p>
                    {about.paragraphs[0]}
                  </p>
                  <p>
                    {about.paragraphs[1]}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                  <span className="apple-glass-subtle px-3 py-1 rounded-full flex items-center gap-1.5 text-blue-400 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Student-Led
                  </span>
                  <span className="apple-glass-subtle px-3 py-1 rounded-full flex items-center gap-1.5 text-indigo-400 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Multi-Cloud
                  </span>
                  <span className="apple-glass-subtle px-3 py-1 rounded-full flex items-center gap-1.5 text-purple-400 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" /> All Branches
                  </span>
                </div>
              </div>

              {/* FAQs */}
              <div className="p-6 rounded-3xl apple-glass space-y-3.5 shadow-xl">
                <div className="flex items-center gap-2 text-[#F8FAFC] font-semibold text-sm font-['Space_Grotesk']">
                  <HelpCircle className="w-4 h-4 text-blue-400" />
                  <span>Frequently Asked Questions</span>
                </div>

                <div className="space-y-2.5">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl apple-glass-subtle space-y-1">
                      <div className="text-xs font-semibold text-slate-200">{faq.q}</div>
                      <div className="text-[11px] text-slate-400 leading-relaxed">{faq.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: 4 Strategic Pillars */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-lg font-bold text-[#F8FAFC] font-['Space_Grotesk']">
                Core Pillars
              </h2>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl apple-glass hover:border-blue-400/40 transition-all flex items-start gap-3.5 shadow-md">
                  <div className="p-2.5 rounded-xl apple-glass-subtle text-blue-400 shrink-0">
                    <Cloud className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-[#F8FAFC]">Multi-Cloud Fundamentals</h3>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Hands-on guided labs covering AWS, Azure, and Google Cloud basics.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl apple-glass hover:border-indigo-400/40 transition-all flex items-start gap-3.5 shadow-md">
                  <div className="p-2.5 rounded-xl apple-glass-subtle text-indigo-400 shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-[#F8FAFC]">DevOps & CI/CD</h3>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Docker containerization, automated build pipelines, and Infrastructure as Code.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl apple-glass hover:border-purple-400/40 transition-all flex items-start gap-3.5 shadow-md">
                  <div className="p-2.5 rounded-xl apple-glass-subtle text-purple-400 shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-[#F8FAFC]">Collaborative Building</h3>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Hackathons, open-source projects, and student developer team formations.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl apple-glass hover:border-sky-400/40 transition-all flex items-start gap-3.5 shadow-md">
                  <div className="p-2.5 rounded-xl apple-glass-subtle text-sky-400 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-[#F8FAFC]">Certifications & Careers</h3>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Mentorship pods for AWS certifications, resume reviews, and interview prep.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 flex items-center gap-3">
                <Button
                  href={meetupLink}
                  isExternal
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                >
                  Join the Community
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
