import { PersonalInfo, Experience, Education, Project } from './types';

// Personal information and social links
export const personalInfo: PersonalInfo = {
  name: "Mattheus Lim",
  tagline: "I live to code and code to live",
  bio: "BSc Statistics graduate from UCL who worked as a Data Scientist at Shopee Malaysia. Postgraduate student at Bayes Business School (formerly Cass) specializing in Business Analytics. Interested in Automation, Data Science, and Blockchain Development within Decentralized Finance.",
  location: "London, UK",
  email: "your.email@example.com", // Replace with your actual email
  resumeUrl: "https://drive.google.com/file/d/1VO0K7LjIOq_WC6o0yZyW2Mac49joFcJ0/view?usp=sharing",
  profileImage: "/images/profile-photo.jpg",
  skills: [
    "Python",
    "R",
    "SQL",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Data Science",
    "Machine Learning"
  ],
  socialLinks: {
    github: "https://github.com/mattlim96",
    linkedin: "https://www.linkedin.com/in/mattheus-lim/",
    soundcloud: "https://soundcloud.com/mattjensern",
  }
};

// Work experience data
export const experiences: Experience[] = [
  {
    id: "getharley",
    company: "GetHarley",
    position: "Senior Data Analyst (Part-Time)",
    period: "Nov 2021 - present",
    location: "London, UK",
    description: "GetHarley is an Aesthetic Dermatology Digital Platform",
    website: "https://www.getharley.com/",
    achievements: [
      "Appointed as Interim Manager of data team to on-board, supervise and coach 2 part-time Data Analysts",
      "Developed and deployed Python and SQL scripts to Heroku through GitHub for monthly reports",
      "Built data pipelines from Stripe, Calendly, Acuity and Google Calendar APIs to Google Sheets for performance tracking",
      "Queried data from PostgreSQL database for ad-hoc reports and data analyses using SQL, Python and Google Sheets"
    ],
    type: "part-time",
    current: true
  },
  {
    id: "shopee",
    company: "Shopee",
    position: "Data Scientist / Data Analyst (Full Time)",
    period: "May 2019 - Aug 2021",
    location: "Kuala Lumpur, Malaysia",
    description: "Shopee is a leading SEA E-Commerce Platform",
    website: "https://www.shopee.com.my/",
    achievements: [
      "Awarded highest rating in final performance review (1 of 100 employees); promoted to Senior Associate within 1.6 years",
      "Mentored and guided 3 interns from the Shopee Apprentice Program (3 months)",
      "Extracted keyword trends (2 to 3 n-grams) from products added to cart using Scikit-learn for Hot Products curation",
      "Optimised product negotiation process through Google API; preventing price tagging errors costing c.£15k from recurring"
    ],
    type: "full-time",
    current: false
  }
];

// Education data
export const education: Education[] = [
  {
    id: "bayes",
    degree: "MSc Business Analytics",
    institution: "Bayes Business School",
    period: "2021 - 2022",
    description: "Specialized in advanced analytics and machine learning applications in business",
    website: "https://www.bayes.city.ac.uk/",
    achievements: [
      "Dissertation: Customer Segmentation through Machine Learning",
      "Advanced Python Programming",
      "Neural Networks and Deep Learning"
    ]
  },
  {
    id: "ucl",
    degree: "BSc Statistics",
    institution: "University College London",
    period: "2016 - 2019",
    description: "Focus on statistical theory and applications",
    website: "https://www.ucl.ac.uk/",
    achievements: [
      "Final Year Project: Time Series Analysis of Financial Markets",
      "Advanced Statistical Methods",
      "Data Science and Machine Learning"
    ]
  }
];

// Projects data
export const projects: Project[] = [
  {
    id: "customer-segmentation",
    title: "Customer Segmentation through Machine Learning",
    description: "Implemented K-Means clustering algorithm to segment customers based on their behavior and demographics, providing actionable insights for targeted marketing strategies.",
    image: "/images/projects/profile.png",
    githubUrl: "https://github.com/ba-group-projects/ml-clustering",
    technologies: ["R", "Machine Learning", "K-Means", "Data Analysis"],
    featured: true,
    category: "Machine Learning"
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with Next.js 14, featuring dark mode, smooth animations, and a clean design. Implements best practices in web development.",
    image: "/images/projects/profile2.jpg",
    githubUrl: "https://github.com/mattlim96/portfolio",
    liveUrl: "https://mattlim.dev",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    featured: true,
    category: "Web Development"
  },
  {
    id: "crypto-trading-bot",
    title: "Automated Crypto Trading Bot",
    description: "Developed a cryptocurrency trading bot using Python that implements various technical analysis strategies and risk management techniques.",
    image: "/images/projects/converter.jpg",
    githubUrl: "https://github.com/mattlim96/crypto-bot",
    technologies: ["Python", "Binance API", "Technical Analysis", "Pandas"],
    featured: true,
    category: "Finance"
  },
  {
    id: "sentiment-analysis",
    title: "Twitter Sentiment Analysis",
    description: "Built a sentiment analysis model to analyze Twitter data for market sentiment, using natural language processing techniques and machine learning algorithms.",
    image: "/images/projects/profile.png",
    githubUrl: "https://github.com/mattlim96/sentiment-analysis",
    technologies: ["Python", "NLP", "Machine Learning", "Twitter API"],
    featured: false,
    category: "Machine Learning"
  },
  {
    id: "defi-dashboard",
    title: "DeFi Analytics Dashboard",
    description: "Interactive dashboard for tracking DeFi protocols' performance metrics, built with React and Web3 technologies.",
    image: "/images/projects/profile2.jpg",
    githubUrl: "https://github.com/mattlim96/defi-dashboard",
    liveUrl: "https://defi.mattlim.dev",
    technologies: ["React", "Web3.js", "GraphQL", "TypeScript"],
    featured: true,
    category: "Web Development"
  }
]; 