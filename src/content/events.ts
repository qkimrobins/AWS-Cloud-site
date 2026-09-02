export interface ClubEvent {
  id: string;
  date: string; // YYYY-MM-DD
  displayDate: string;
  title: string;
  category: 'Orientation' | 'AMA' | 'Tech Talk' | 'Workshop' | 'Conference';
  status: 'upcoming' | 'completed';
  location?: string;
  speaker?: string;
  description?: string;
  link?: string;
}

export const events: ClubEvent[] = [
  {
    id: "event-2025-12-26",
    date: "2025-12-26",
    displayDate: "26 Dec 2025",
    title: "AWS Cloud Club CUJ – Core Team Kickoff Meeting",
    category: "Orientation",
    status: "completed",
    location: "Online via Meetup",
    description: "Inaugural Core Team meeting to align club vision, define responsibilities, workflows, and collaboratively plan upcoming community initiatives.",
    link: "https://www.meetup.com/aws-sbg-at-central-university-of-jammu/events/312574203/",
  },
  {
    id: "event-2026-01-26",
    date: "2026-01-26",
    displayDate: "26 Jan 2026",
    title: "AWS Cloud Club - Orientation Program",
    category: "Orientation",
    status: "completed",
    location: "Online via Meetup",
    description: "Official orientation session introducing students to cloud computing, AWS fundamentals, certifications, and hands-on builder roadmap.",
    link: "https://www.meetup.com/aws-sbg-at-central-university-of-jammu/events/313050035/",
  },
  {
    id: "event-2026-03-01",
    date: "2026-03-01",
    displayDate: "01 Mar 2026",
    title: "Interactive Ask Me Anything (AMA) Session",
    category: "AMA",
    status: "completed",
    location: "Online / Community Hub",
    description: "Interactive AMA session organized by AWS Cloud Club CU Jammu to give students clear insights and answer questions on cloud learning and careers.",
    link: "https://www.meetup.com/aws-sbg-at-central-university-of-jammu/events/313571010/",
  },
  {
    id: "event-2026-04-10",
    date: "2026-04-10",
    displayDate: "10 Apr 2026",
    title: "AWS TechXplore 2026 — From Localhost to Cloud",
    category: "Conference",
    status: "completed",
    location: "Central University of Jammu",
    description: "Beginner-friendly hands-on meetup covering AWS cloud fundamentals, real-world application deployment, and AWS IAM security best practices.",
    link: "https://www.meetup.com/aws-sbg-at-central-university-of-jammu/events/314123221/",
  },
  {
    id: "event-2026-06-27",
    date: "2026-06-27",
    displayDate: "27 Jun 2026",
    title: "From Idea to App: Building with Kiro IDE and Kiro CLI",
    category: "Workshop",
    status: "completed",
    location: "Online Event",
    speaker: "Jasdeep Singh Bhalla",
    description: "Hands-on engineering workshop with Jasdeep Singh Bhalla (Senior Software Engineer at GoDaddy). Exploring spec-driven development, scaffolding apps from text, and terminal workflows with Kiro CLI.",
    link: "https://www.meetup.com/aws-sbg-at-central-university-of-jammu/events/315397625/",
  },
  {
    id: "event-2026-07-01",
    date: "2026-07-01",
    displayDate: "01 Jul 2026",
    title: "Agentic AI on AWS - AI Tech Talk Series Hosted by AWS Skills Centers",
    category: "Tech Talk",
    status: "completed",
    location: "Online Event (AWS Skills Centers)",
    description: "Specialized tech talk delving into agentic workflows, autonomous systems, and generative AI infrastructure deployed on Amazon Web Services.",
    link: "https://www.meetup.com/aws-sbg-at-central-university-of-jammu/events/315457980/",
  },
  {
    id: "event-2026-08-21",
    date: "2026-08-21",
    displayDate: "21 Aug 2026",
    title: "AWS Cloud Fundamentals: Your First Step into the Cloud",
    category: "Workshop",
    status: "completed",
    location: "Central University of Jammu, Samba",
    description: "Interactive on-campus AWS meetup for students and beginners covering cloud computing, AWS global infrastructure, core services, Free Tier setup, and practical demos.",
    link: "https://www.meetup.com/aws-sbg-at-central-university-of-jammu/events/316166422/",
  },
  {
    id: "event-2026-08-30",
    date: "2026-08-30",
    displayDate: "30 Aug 2026",
    title: "AI Skills, Careers & Hiring in 2026: From Learning to Landing Opportunities",
    category: "Tech Talk",
    status: "completed",
    location: "Online / Virtual Session",
    speaker: "Pawan Joshi & Hardik Bandhiya",
    description: "Interactive session on navigating AI careers in 2026, employer expectations, building impactful portfolio projects, GitHub/LinkedIn optimization, and technical hiring insights.",
    link: "https://www.meetup.com/aws-sbg-at-central-university-of-jammu/events/316316175/",
  },
];
