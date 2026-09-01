export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  platform: 'instagram' | 'linkedin' | 'meetup' | 'github' | 'twitter';
  label: string;
  url: string;
  ariaLabel: string;
}

export interface SiteContent {
  identity: {
    name: string;
    chapterName: string;
    university: string;
    shortDescription: string;
    metaTitle: string;
    metaDescription: string;
    logo: string;
    universityLogo: string;
  };
  navigation: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    highlightWord: string;
    subtitle: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
    joinCta: {
      label: string;
      href: string;
    };
    terminalSnippet: {
      command: string;
      comment: string;
      outputLines: string[];
    };
    techBadges: string[];
  };
  about: {
    eyebrow: string;
    title: string;
    subtitle: string;
    paragraphs: string[];
    pillars: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  socialLinks: SocialLink[];
  footer: {
    title: string;
    description: string;
    copyright: string;
  };
}

export const siteContent: SiteContent = {
  identity: {
    name: "AWS Student Builder Group",
    chapterName: "Central University of Jammu",
    university: "Central University Of Jammu",
    shortDescription: "A student community at Central University Of Jammu focused on cloud learning, innovation, and building with AWS technologies.",
    metaTitle: "AWS Student Builder Group | Central University of Jammu",
    metaDescription: "A student-led technical community at Central University of Jammu focused on cloud computing, DevOps, hands-on projects, events, and professional growth.",
    logo: "assets/cloudclublogo.png",
    universityLogo: "assets/cujlogo.png",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Why Join", href: "#why-join" },
    { label: "Events", href: "#events" },
    { label: "Team", href: "#team" },
  ],
  hero: {
    eyebrow: "AWS Student Builder Group • CUJ Chapter",
    title: "Learn • Build • Innovate with Cloud Technologies",
    highlightWord: "Cloud Technologies",
    subtitle: "A student-led technical community at Central University of Jammu bridging the gap between academic learning and real-world industry requirements through cloud computing, DevOps, and hands-on workshops.",
    primaryCta: {
      label: "Explore the Club",
      href: "#about",
    },
    secondaryCta: {
      label: "View Events",
      href: "#events",
    },
    joinCta: {
      label: "Join Community",
      href: "https://forms.gle/eRyNY2KBd2bPck4e9",
    },
    terminalSnippet: {
      command: "aws cuj-cloud-club init --community student-builders",
      comment: "# Initializing modern cloud journey at CUJ",
      outputLines: [
        "✓ Connecting to Central University of Jammu Cloud Hub",
        "✓ Multi-Cloud Labs: AWS • Azure • Google Cloud active",
        "✓ DevOps Pipelines & Docker containers configured",
        "✓ Next cohort: Hands-on Workshops & Tech Talks ready",
      ],
    },
    techBadges: [
      "AWS",
      "Azure",
      "Google Cloud",
      "DevOps",
      "Docker",
      "CI/CD",
      "Serverless",
      "Agentic AI",
    ],
  },
  about: {
    eyebrow: "Who We Are",
    title: "About Us",
    subtitle: "Empowering university students with practical cloud skills, real-world tools, and collaborative learning.",
    paragraphs: [
      "The AWS Student Builder Group at Central University Of Jammu is a student-led technical community dedicated to helping students explore cloud computing, DevOps, and modern IT practices.",
      "Our objective is to bridge the gap between academic learning and real-world industry requirements by organizing hands-on workshops, technical sessions, and collaborative projects using platforms such as AWS, Azure, and Google Cloud.",
      "The group also focuses on leadership development, teamwork, and professional growth. Through hackathons, seminars, and community events, students gain exposure to industry trends and practical problem-solving skills.",
      "Whether you are a beginner or an experienced learner, the AWS Student Builder Group provides an inclusive environment to learn, experiment, build, and grow together.",
    ],
    pillars: [
      {
        title: "Multi-Cloud Fundamentals",
        description: "Hands-on guided labs and structured learning paths covering AWS, Azure, and GCP.",
        icon: "Cloud",
      },
      {
        title: "DevOps & Automation",
        description: "Practical pipelines, containerization with Docker, and Infrastructure as Code.",
        icon: "Cpu",
      },
      {
        title: "Collaborative Building",
        description: "Team hackathons, project showcases, and student-led development groups.",
        icon: "Users",
      },
      {
        title: "Career & Certification",
        description: "Mentorship, resume reviews, interview prep, and cloud certification roadmaps.",
        icon: "Award",
      },
    ],
  },
  socialLinks: [
    {
      platform: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/aws.cujammu",
      ariaLabel: "Visit AWS CUJ Instagram page",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/company/aws-cloud-club-central-university-of-jammu/",
      ariaLabel: "Visit AWS Cloud Club Central University of Jammu on LinkedIn",
    },
    {
      platform: "meetup",
      label: "Meetup",
      url: "https://www.meetup.com/aws-cloud-club-at-central-university-of-jammu/members/?op=all",
      ariaLabel: "Visit AWS Cloud Club CUJ Meetup community group",
    },
  ],
  footer: {
    title: "AWS Student Builder Group Central University Of Jammu",
    description: "A student community at Central University Of Jammu focused on cloud learning, innovation, and building with AWS technologies.",
    copyright: `© ${new Date().getFullYear()} AWS Student Builder Group Central University Of Jammu • All rights reserved`,
  },
};
