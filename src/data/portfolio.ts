import { PersonalInfo, Experience, Education, Project } from './types';
import { getImagePath } from '@/lib/utils';

// Personal information and social links
export const personalInfo: PersonalInfo = {
  name: "Mattheus Lim",
  tagline: "Python + AI = 🚀",
  bio: "Senior Data Scientist / AI Engineer at Jellyfish UK. Passionate about AI Agents, Data Science, Automation, and Full-Stack Development.",
  location: "London, UK",
  email: "mattlim96@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1VO0K7LjIOq_WC6o0yZyW2Mac49joFcJ0/view?usp=sharing",
  profileImage: getImagePath('/images/profile-photo.jpg'),
  skills: [
    "Python",
    "R",
    "SQL",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "AI Agents",
    "LLMs",
    "NLP",
    "Object Detection",
    "Machine Learning",
    "Statistical Analysis",
  ],
  socialLinks: {
    github: "https://github.com/mattlim96",
    linkedin: "https://www.linkedin.com/in/mattheus-lim/",
  }
};

// Work experience data
export const experiences: Experience[] = [
  {
    id: "jellyfish",
    company: "Jellyfish UK",
    position: "Senior Data Scientist / AI Engineer",
    period: "Oct 2022 - present",
    location: "London, UK",
    description: "Jellyfish UK is a leading AI-powered marketing agency",
    website: "https://www.jellyfish.com/",
    achievements: [
      "AI Specialist behind [Jellyfish Social Agents™](https://www.jellyfish.com/en-gb/agents/)",
    ],
    type: "full-time",
    current: true
  },
  {
    id: "getharley",
    company: "GetHarley",
    position: "Senior Data Analyst (Part-Time)",
    period: "Nov 2021 - Nov 2022",
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
    current: false
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
      "Optimised product negotiation process through Google API; preventing price tagging errors costing c.£15k from recurring",
      "Conducted product and voucher countering initiatives by scraping competitor’s data using Python and Google Apps Script",
      "Executed special initiatives by Category Managers involving project design, monitoring, project management (managed a team of ~200 employees), data analysis and performance reporting utilising R and Google Sheets"
    ],
    type: "full-time",
    current: false
  }
];

// Education data
export const education: Education[] = [
  {
    id: "bayes",
    degree: "MSc Business Analytics / Data Science (Distinction)",
    institution: "Bayes Business School",
    period: "2021 - 2022",
    description: "Specialized in advanced analytics and machine learning applications in business",
    website: "https://www.bayes.city.ac.uk/",
    achievements: [
      "Applied Research Project with Rolls-Royce to optimise existing speech assistive software for MND patients utilising Stanza NLP pipelines and pre-trained dialog models from Facebook (Meta) ParlAI Python framework",
      "Ranked #1 in Network Analytics Project on “Regulatory Impact on Ethereum Ecosystem”; selected out of 60 students to contribute to a research paper about “Role of Regulation on Cryptocurrency Markets”",
      "Machine Learning, Deep Learning, Data Visualisation, Applied NLP, Data Management Systems (Python, R, SQL)"
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
      "First Class Honours dissertation – “Improving the Estimation of the Weight of Drugs Impregnated in Clothing"
    ]
  }
];

// Projects data
export const projects: Project[] = [
  {
    id: "customer-segmentation",
    title: "Customer Segmentation through Machine Learning",
    description: "Customer segmentation using K-Means clustering on customer dataset in R.",
    image: getImagePath('/images/projects/customer-segmentation.png'),
    githubUrl: "https://github.com/ba-group-projects/ml-clustering",
    technologies: ["R", "Machine Learning", "K-Means", "Data Analysis"],
    featured: true,
    category: "Machine Learning"
  },
  {
    id: "fraud-detection",
    title: "Insurance Claim Fraud Detection",
    description: "Autoencoder anomaly detection of fraudulent insurance claims using TensorFlow.",
    image: getImagePath('/images/projects/fraud-detection.png'),
    githubUrl: "https://github.com/ba-group-projects/insurance-fraud-detection",
    technologies: ["Python", "TensorFlow", "Machine Learning", "Anomaly Detection"],
    featured: true,
    category: "Machine Learning"
  },
  {
    id: "time-series-rnn-cnn",
    title: "Time Series prediction with RNN and CNN",
    description: "Developed Recurrent and Convolutional Neural Networks in TensorFlow to predict the operating mode of a wind turbine based on 2 time series data from sensors.",
    image: getImagePath('/images/projects/time-series-rnn-cnn.png'),
    githubUrl: "https://github.com/mattlim96/time-series-rnn-cnn",
    technologies: ["Python", "TensorFlow", "RNN", "CNN", "Time Series"],
    featured: true,
    category: "Machine Learning"
  },
  {
    id: "ethereum-china-ban",
    title: "Impact of China cryptocurrency ban on Ethereum ecosystem",
    description: "Analysed Decentralised Application (DApp) and whales' activities through exploring the network of Ethereum transactions before and after the China crypto ban.",
    image: getImagePath('/images/projects/ethereum-china-ban.webp'),
    githubUrl: "https://github.com/ba-group-projects/eth-trx-china-ban",
    technologies: ["Python", "Data Analysis", "Blockchain", "Network Analysis"],
    featured: true,
    category: "Blockchain"
  },
  {
    id: "elon-musk-dogecoin",
    title: "Elon Musk's influence on DogeCoin",
    description: "Identified whether Elon Musk's DogeCoin tweets influences the cryptocurrency's price.",
    image: getImagePath('/images/projects/elon-musk-dogecoin.jpeg'),
    githubUrl: "https://github.com/ba-group-projects/dogecoin-twitter-elon-musk",
    technologies: ["Python", "Data Analysis", "Twitter API", "Cryptocurrency"],
    featured: false,
    category: "Finance"
  },
  {
    id: "uk-covid-19",
    title: "Effect of Covid-19 on UK business foundation",
    description: "Elucidated the impact of the Covid-19 pandemic on UK firms and sectors through EDA and visualizations.",
    image: getImagePath('/images/projects/uk-covid-19.jpg'),
    githubUrl: "https://github.com/mattlim96/covid19-uk-firms",
    technologies: ["Python", "Data Analysis", "EDA", "Visualization"],
    featured: false,
    category: "Data Analysis"
  },
  {
    id: "shiny-app-lol",
    title: "Machine Learning Shiny App",
    description: "An interactive web app that predicts the winner of a League of Legends match through Decision Tree and Random Forest models.",
    image: getImagePath('/images/projects/shiny-app-lol.jpg'),
    githubUrl: "https://github.com/ba-group-projects/ml-lol-shiny-app",
    technologies: ["R", "Shiny", "Machine Learning", "Decision Trees", "Random Forest"],
    featured: false,
    category: "Web Development"
  },
  {
    id: "tiktok-eda",
    title: "What makes TikTok videos popular?",
    description: "Demystified TikTok's popularity through EDA and visualisations.",
    image: getImagePath('/images/projects/tiktok-eda.jpg'),
    githubUrl: "https://github.com/ba-group-projects/tiktok-popularity-eda",
    technologies: ["Python", "Data Analysis", "EDA", "Visualization"],
    featured: false,
    category: "Data Analysis"
  }
];