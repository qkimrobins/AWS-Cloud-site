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
    id: "event-2026-01-26",
    date: "2026-01-26",
    displayDate: "26 Jan 2026",
    title: "Introduction & Orientation of Central University Jammu Cloud Club, Central University Of Jammu",
    category: "Orientation",
    status: "completed",
    location: "Central University of Jammu",
    description: "Welcome session introducing students to the AWS Student Builder Group / Cloud Club roadmap, community vision, and upcoming cloud initiatives.",
  },
  {
    id: "event-2026-03-01",
    date: "2026-03-01",
    displayDate: "01 Mar 2026",
    title: "Interactive Ask Me Anything Session (AMA)",
    category: "AMA",
    status: "completed",
    location: "Online / Community Hub",
    description: "Open forum and interactive discussion answering student queries about cloud learning paths, student opportunities, and getting started with AWS.",
  },
  {
    id: "event-2026-04-10",
    date: "2026-04-10",
    displayDate: "10 Apr 2026",
    title: "AWS TechXplore",
    category: "Conference",
    status: "completed",
    location: "CUJ Auditorium & Labs",
    description: "Comprehensive technical exploration covering cloud architecture patterns, real-world deployment demos, and builder showcases.",
  },
  {
    id: "event-2026-06-27",
    date: "2026-06-27",
    displayDate: "27 Jun 2026",
    title: "From Idea to App: Building with IDE & Kiro CLI with Jasdeep Singh Bhalla",
    category: "Workshop",
    status: "completed",
    location: "Virtual Hands-on Workshop",
    speaker: "Jasdeep Singh Bhalla",
    description: "Hands-on engineering workshop exploring developer workflows, modern cloud-connected IDEs, and rapid deployment with Kiro CLI.",
  },
  {
    id: "event-2026-07-01",
    date: "2026-07-01",
    displayDate: "01 Jul 2026",
    title: "Agentic AI on AWS - AI Tech Talk Series Hosted by AWS Skills Centers",
    category: "Tech Talk",
    status: "completed",
    location: "AWS Skills Centers",
    description: "Specialized tech talk delving into agentic workflows, autonomous systems, and generative AI infrastructure deployed on Amazon Web Services.",
  },
];
