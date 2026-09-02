import React from 'react';
import { ChevronRight, MapPin, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { Container } from '../components/UI/Container';
import { Badge } from '../components/UI/Badge';
import { Button } from '../components/UI/Button';
import { InstagramIcon, LinkedInIcon, MeetupIcon } from '../components/UI/Icons';
import { siteContent } from '../content/site';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const { socialLinks, hero } = siteContent;

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return <InstagramIcon className="w-4 h-4 text-purple-400" />;
      case 'linkedin':
        return <LinkedInIcon className="w-4 h-4 text-blue-400" />;
      case 'meetup':
        return <MeetupIcon className="w-4 h-4 text-sky-400" />;
      default:
        return <ExternalLink className="w-4 h-4 text-slate-400" />;
    }
  };

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
            <span className="text-blue-400">Contact & Community</span>
          </div>

          <div className="max-w-2xl">
            <Badge variant="blue" size="sm" dot={false} className="mb-3">
              Get in Touch
            </Badge>
            <h1 className="text-2xl sm:text-4xl font-bold text-[#F8FAFC] tracking-tight font-['Space_Grotesk'] leading-tight">
              Community Channels
            </h1>
            <p className="mt-2.5 text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed">
              Connect directly with our community or register for the upcoming cohort.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Connect Content */}
      <section className="py-8 md:py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start max-w-5xl mx-auto">
            {/* Left Column: Official Channels & Address */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 rounded-3xl apple-glass shadow-xl space-y-4">
                <div className="flex items-center gap-1.5 text-blue-400 font-mono text-xs uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Official Networks</span>
                </div>

                <div className="space-y-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-2xl apple-glass-subtle hover:border-blue-400/40 hover:bg-white/[0.1] transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl apple-glass-subtle">
                          {getSocialIcon(social.platform)}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-semibold text-[#F8FAFC] group-hover:text-blue-400 transition-colors">
                            {social.label}
                          </div>
                        </div>
                      </div>

                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Campus Location Card */}
              <div className="p-6 rounded-3xl apple-glass shadow-xl space-y-2">
                <div className="flex items-center gap-1.5 text-[#F8FAFC] font-semibold text-xs sm:text-sm font-['Space_Grotesk']">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Campus Chapter Location</span>
                </div>

                <div className="text-xs text-slate-300 space-y-0.5 leading-relaxed">
                  <div className="font-semibold text-slate-200">Central University of Jammu</div>
                  <div>Rahya-Suchani (Bagla), District Samba, J&K - 181143</div>
                </div>
              </div>
            </div>

            {/* Right Column: Member Application Form Box */}
            <div className="lg:col-span-6 p-6 sm:p-7 rounded-3xl apple-glass shadow-xl space-y-4">
              <div className="space-y-1.5">
                <Badge variant="blue" size="sm" dot={false}>
                  Registration
                </Badge>
                <h3 className="text-lg sm:text-xl font-bold text-[#F8FAFC] font-['Space_Grotesk']">
                  Join the Community
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Fill out our official Google Form to join guided workshops, study pods, and hackathon teams.
                </p>
              </div>

              <div className="space-y-2.5 p-4 rounded-2xl apple-glass-subtle text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>100% Free membership</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Open to all semesters & branches</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Official certificates & mentor access</span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  href={hero.joinCta.href}
                  isExternal
                  variant="primary"
                  size="md"
                  icon={<ExternalLink className="w-4 h-4" />}
                  className="w-full justify-center"
                >
                  Open Registration Form
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
