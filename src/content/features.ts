export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Cloud' | 'GitBranch' | 'Layers' | 'Calendar' | 'Compass' | 'Award';
  category: string;
  tags: string[];
}

export const features: FeatureItem[] = [
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    description: "Learn cloud fundamentals and work with AWS, Azure, and GCP through guided labs, real-world use cases, and structured learning paths.",
    iconName: "Cloud",
    category: "Infrastructure",
    tags: ["AWS", "Azure", "GCP", "Architecture"],
  },
  {
    id: "devops-automation",
    title: "DevOps & Automation",
    description: "Gain hands-on experience with CI/CD pipelines, Docker, automation tools, and infrastructure as code used in modern software teams.",
    iconName: "GitBranch",
    category: "Engineering",
    tags: ["Docker", "CI/CD", "IaC", "Pipelines"],
  },
  {
    id: "hands-on-projects",
    title: "Hands-on Projects",
    description: "Build practical cloud-based projects that strengthen your portfolio and demonstrate your skills to recruiters.",
    iconName: "Layers",
    category: "Development",
    tags: ["Full-Stack", "Serverless", "Portfolio"],
  },
  {
    id: "events-hackathons",
    title: "Events & Hackathons",
    description: "Participate in workshops, coding events, and hackathons to collaborate with peers and industry professionals.",
    iconName: "Calendar",
    category: "Community",
    tags: ["Workshops", "Hackathons", "Tech Talks"],
  },
  {
    id: "career-guidance",
    title: "Career Guidance",
    description: "Receive mentorship for internships, certifications, resume building, and interview preparation from experienced members.",
    iconName: "Compass",
    category: "Growth",
    tags: ["Mentorship", "Resumes", "Interviews"],
  },
  {
    id: "certification-support",
    title: "Certification Support",
    description: "Prepare for AWS, Azure, and GCP certifications with curated resources, mentorship, and practice sessions.",
    iconName: "Award",
    category: "Credentials",
    tags: ["AWS Certs", "Exam Prep", "Study Groups"],
  },
];
