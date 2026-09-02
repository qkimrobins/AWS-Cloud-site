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
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Why Join", href: "#why-join" },
    { label: "Events", href: "#events" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "AWS Student Builder Group • CUJ",
    title: "Code. Deploy. Scale.",
    highlightWord: "Scale.",
    subtitle: "The student cloud and DevOps collective at Central University of Jammu.",
    primaryCta: {
      label: "Explore Community",
      href: "#about",
    },
    secondaryCta: {
      label: "Events",
      href: "#events",
    },
    joinCta: {
      label: "Join Community",
      href: "https://forms.gle/eRyNY2KBd2bPck4e9",
    },
    terminalSnippet: {
      command: "npx create-cloud-app@cuj",
      comment: "# Start building in the cloud",
      outputLines: [
        "Multi-cloud labs active (AWS • Azure • GCP)",
        "DevOps pipelines ready",
      ],
    },
    techBadges: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "Serverless",
    ],
  },
  about: {
    eyebrow: "Who We Are",
    title: "About Us",
    subtitle: "Empowering university students with practical cloud and DevOps skills.",
    paragraphs: [
      "The AWS Student Builder Group at Central University of Jammu is a student-led technical collective dedicated to hands-on cloud computing, DevOps automation, and modern infrastructure.",
      "We organize interactive labs, hackathons, and speaker sessions across AWS, Azure, and Google Cloud, helping students build real-world software and prepare for global certifications.",
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
