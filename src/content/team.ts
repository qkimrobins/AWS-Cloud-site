export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  initials: string;
  department?: string;
  bio?: string;
  badge?: string;
  accentColor?: string;
  links?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "mrigank-jaiswal",
    name: "Mrigank Jaiswal",
    role: "Captain",
    image: "assets/team/mrigank.jpg",
    initials: "MJ",
    badge: "Leadership",
    department: "Executive Committee",
    bio: "Guiding the strategic vision, industry partnerships, and multi-cloud roadmap for the AWS Student Builder Group at Central University of Jammu.",
    accentColor: "from-blue-600 to-indigo-700",
  },
  {
    id: "nilesh-kumar",
    name: "Nilesh Kumar",
    role: "Vice Captain",
    image: "assets/team/nilesh.jpg",
    initials: "NK",
    badge: "Leadership",
    department: "Executive Committee",
    bio: "Coordinating inter-departmental initiatives, student mentorship programs, and cloud certification readiness tracks.",
    accentColor: "from-indigo-600 to-purple-700",
  },
  {
    id: "divyani-gupta",
    name: "Divyani Gupta",
    role: "Technical Lead",
    image: "assets/team/divyani.jpg",
    initials: "DG",
    badge: "Technical",
    department: "Cloud Engineering",
    bio: "Designing hands-on architecture labs, DevOps pipelines, containerized demos, and developer workshops.",
    accentColor: "from-purple-600 to-violet-800",
  },
  {
    id: "amrit-puri",
    name: "Amrit Puri",
    role: "Social Media Lead",
    image: "assets/team/amrit.jpg",
    initials: "AP",
    badge: "Outreach",
    department: "Design & Media",
    bio: "Managing digital presence, graphic campaigns, community storytelling, and external communications.",
    accentColor: "from-violet-600 to-indigo-700",
  },
  {
    id: "shivam-yadav",
    name: "Shivam Yadav",
    role: "Events & Outreach Lead",
    image: "assets/team/shivam.jpg",
    initials: "SY",
    badge: "Operations",
    department: "Logistics & Outreach",
    bio: "Leading event operations, campus hackathons, technical speaker coordination, and cross-university collabs.",
    accentColor: "from-blue-500 to-sky-700",
  },
  {
    id: "robins-yadav",
    name: "Robins Yadav",
    role: "Community & Engagement Lead",
    image: "assets/team/robins.jpg",
    initials: "RY",
    badge: "Community",
    department: "Member Engagement",
    bio: "Fostering active student participation, peer study pods, project showcases, and onboarding new builders.",
    accentColor: "from-sky-600 to-blue-800",
  },
];
