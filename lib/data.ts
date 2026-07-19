export type SkillCategory = {
  title: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Search Engine Optimization',
    items: [
      'Technical SEO',
      'On-Page SEO',
      'Off-Page SEO',
      'Keyword Research',
      'Blog Optimization',
    ],
  },
  {
    title: 'Digital Marketing',
    items: [
      'Search Engine Marketing',
      'Social Media Marketing',
      'Lead Generation',
      'Email Marketing',
      'Website Management',
    ],
  },
  {
    title: 'Content & Creative',
    items: [
      'Content Writing',
      'Blog Writing',
      'Social Media Content',
      'Video Script Writing',
      'Poster Design',
      'Video Editing',
    ],
  },
  {
    title: 'Marketing Tools',
    items: [
      'Google Analytics',
      'Google Search Console',
      'Google Ads',
      'Keyword Planner',
      'SEMrush',
      'Rank Math',
    ],
  },
  {
    title: 'CMS & Platforms',
    items: ['WordPress', 'WooCommerce', 'Meta Business Suite'],
  },
  {
    title: 'Design & AI',
    items: ['Canva', 'CapCut', 'ChatGPT', 'Google Gemini', 'Claude AI'],
  },
  {
    title: 'Soft Skills',
    items: ['Teamwork', 'Creativity', 'Adaptability', 'Time Management'],
  },
];

export type Project = {
  slug: string;
  title: string;
  valueProposition: string;
  highlights: string[];
  tech: string[];
  url: string;
};

export const projects: Project[] = [
  {
    slug: 'rerol-refinery',
    title: 'Rerol Refinery',
    valueProposition:
      "Improved the company's search visibility through SEO implementation and optimized content.",
    highlights: ['On-Page SEO', 'Off-Page SEO', 'Technical SEO', 'Blog Writing'],
    tech: ['SEO', 'WordPress'],
    url: 'https://rerolrefinery.com/',
  },
  {
    slug: 'np-grands',
    title: 'NP Grands',
    valueProposition:
      "Strengthened the brand's online presence through content and social media marketing.",
    highlights: ['Content Strategy', 'Social Media Marketing'],
    tech: ['Social Media', 'Content'],
    url: 'https://www.instagram.com/n_p_grand?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  },
  {
    slug: 'big-screen',
    title: 'Big Screen',
    valueProposition:
      'Supported digital presence and content execution for a media & entertainment brand.',
    highlights: ['Content Support', 'Digital Presence'],
    tech: ['SEO', 'Content'],
    url: 'https://thebigscreen.co.in/',
  },
  {
    slug: 'logica-aviation',
    title: 'Logica Aviation',
    valueProposition:
      'Delivered SEO and content support for an aviation training school audience.',
    highlights: ['SEO', 'Content Writing'],
    tech: ['SEO', 'WordPress'],
    url: 'https://www.logicatrainingschool.in/',
  },
  {
    slug: 'ubomi-health-care',
    title: 'Ubomi Health Care',
    valueProposition:
      'Improved online visibility for a healthcare brand through optimization and content.',
    highlights: ['Technical SEO', 'Content Writing'],
    tech: ['SEO', 'Healthcare'],
    url: 'https://ubomilifecare.com/',
  },
  {
    slug: 'hair-pro',
    title: 'Hair Pro',
    valueProposition:
      'Boosted local visibility and engagement for a beauty & grooming business.',
    highlights: ['Local SEO', 'Social Media'],
    tech: ['SEO', 'SMM'],
    url: 'https://hairpro16.com/',
  },
  {
    slug: 'mmk-bites',
    title: 'MMK Bites',
    valueProposition:
      'Grew brand visibility and appetite appeal for a food & service business online.',
    highlights: ['Content Marketing', 'SMM'],
    tech: ['Content', 'Social Media'],
    url: 'https://mmkbites.com/',
  },
  {
    slug: 'kanagapushkara',
    title: 'Kanagapushkaraa',
    valueProposition:
      'Enhanced search presence and content clarity for the brand website.',
    highlights: ['On-Page SEO', 'Content Writing'],
    tech: ['SEO', 'WordPress'],
    url: 'https://kanagapushkaraa.com/',
  },
  {
    slug: 'havns-interior',
    title: "Hav'ns Interior",
    valueProposition:
      'Positioned an interior design brand for discovery through SEO and visual storytelling.',
    highlights: ['SEO', 'Content Strategy'],
    tech: ['SEO', 'Design'],
    url: 'https://havninterior.com/',
  },
  {
    slug: 'why-global-services',
    title: 'Why Global Services',
    valueProposition:
      'Drove SEO, SEM, SMM, and content execution as part of an integrated marketing engagement.',
    highlights: ['SEO', 'SEM', 'SMM', 'Content'],
    tech: ['SEO', 'Ads', 'Content'],
    url: 'https://whyglobalservices.com/',
  },
  {
    slug: 'peach-dental',
    title: 'Peach Dental',
    valueProposition:
      'Improved discoverability and local search performance for a dental clinic.',
    highlights: ['Local SEO', 'Content Writing'],
    tech: ['SEO', 'Healthcare'],
    url: 'https://peachdentalclinic.com/',
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: 'Digital Marketing Intern',
    org: 'Why Global Services',
    period: 'February 2026 – Present',
    points: [
      'Worked on SEO, SEM, SMM, content writing, website management, video production, and e-commerce product uploads across multiple client projects.',
      'Executed On-Page SEO, Off-Page SEO, Technical SEO, blog optimization, and keyword-focused content strategies.',
      'Created blogs, website copy, and social media content for clients in tourism, aviation, healthcare, beauty, clothing, media, and service industries.',
      'Supported video shoots, video editing, and digital campaign execution for multiple brands.',
    ],
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  score: string;
};

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Engineering',
    institution: 'Government College of Engineering',
    period: 'August 2019 – May 2023',
    score: 'CGPA 7.36',
  },
  {
    degree: 'Higher Secondary School',
    institution: 'Cathy Matric Higher Secondary School',
    period: '2018 – 2019',
    score: '70%',
  },
];

export type Certification = {
  title: string;
  issuer: string;
  period: string;
};

export const certifications: Certification[] = [
  {
    title: 'Digital Marketing Certification',
    issuer: 'WHY TAP',
    period: 'February 2026 – July 2026',
  },
];

export const industries = [
  'Tourism',
  'Healthcare',
  'Aviation',
  'Interior Design',
  'Media',
  'E-commerce',
  'Beauty',
  'Service Industries',
];

export const heroStats = [
  { value: 10, suffix: '+', label: 'Projects' },
  { value: 8, suffix: '+', label: 'Industries' },
  { value: 3, suffix: '', label: 'Core Disciplines', display: 'SEO • Ads • Content' },
];

export const contactInfo = {
  name: 'Jeyvetrivel R',
  email: 'jeyvetrivelraja@gmail.com',
  phone: '+91 00000 00000',
  location: 'Tamil Nadu, India',
  linkedin: 'https://www.linkedin.com/in/jeyvetrivel-raja-12a6b71b3',
  github: 'https://github.com/',
};
