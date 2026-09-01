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
    accentColor: "from-amber-500 to-orange-600",
  },
  {
    id: "nilesh-kumar",
    name: "Nilesh Kumar",
    role: "Vice Captain",
    image: "assets/team/nilesh.jpg",
    initials: "NK",
    badge: "Leadership",
    accentColor: "from-cyan-500 to-blue-600",
  },
  {
    id: "divyani-gupta",
    name: "Divyani Gupta",
    role: "Technical Lead",
    image: "assets/team/divyani.jpg",
    initials: "DG",
    badge: "Technical",
    accentColor: "from-emerald-500 to-teal-600",
  },
  {
    id: "amrit-puri",
    name: "Amrit Puri",
    role: "Social Media Lead",
    image: "assets/team/amrit.jpg",
    initials: "AP",
    badge: "Outreach",
    accentColor: "from-purple-500 to-pink-600",
  },
  {
    id: "shivam-yadav",
    name: "Shivam Yadav",
    role: "Events & Outreach Lead",
    image: "assets/team/shivam.jpg",
    initials: "SY",
    badge: "Operations",
    accentColor: "from-blue-500 to-indigo-600",
  },
  {
    id: "robins-yadav",
    name: "Robins Yadav",
    role: "Community & Engagement Lead",
    image: "assets/team/robins.jpg",
    initials: "RY",
    badge: "Community",
    accentColor: "from-orange-500 to-amber-600",
  },
];
