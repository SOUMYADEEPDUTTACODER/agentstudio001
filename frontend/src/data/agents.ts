export interface Agent {
  id: number;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  tags: string[];
  image: string;
  video?: string;
  useCases: string[];
  techStack: string[];
};
export const categories = [
  'NLP',
  'Computer Vision',
  'Code Generation',
  'Data Analysis',
  'Automation',
  'Summarization',
  'Translation',
  'Recommendation',
  'Developer Tools',
  'AI Productivity Tools',
  'Secure & Government AI',
  'Academic & Visualization',
  'Finance & Blockchain',
  'Health & Lifestyle',
  'Communication & Collaboration',
];

export const agents: Agent[] = [
  {
    id: 1,
    name: 'TextMaster Pro',
    shortDescription: 'Advanced natural language processing for content generation and analysis',
    fullDescription: 'TextMaster Pro is a cutting-edge NLP agent that excels in content generation, sentiment analysis, and text summarization. It leverages state-of-the-art transformer models to understand context and generate human-like text across various domains.',
    category: 'NLP',
    tags: ['NLP', 'Content Generation', 'Sentiment Analysis'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
    useCases: ['Blog writing', 'Customer service automation', 'Content moderation', 'Report generation'],
    techStack: ['GPT-4', 'BERT', 'Python', 'TensorFlow', 'FastAPI']
  },
  {
    id: 2,
    name: 'VisionAI Scanner',
    shortDescription: 'Real-time image recognition and object detection system',
    fullDescription: 'VisionAI Scanner provides advanced computer vision capabilities including object detection, image classification, and visual content analysis. Perfect for retail, security, and manufacturing applications.',
    category: 'Computer Vision',
    tags: ['Computer Vision', 'Object Detection', 'Image Analysis'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400',
    useCases: ['Quality control', 'Security monitoring', 'Inventory management', 'Medical imaging'],
    techStack: ['YOLO v8', 'OpenCV', 'PyTorch', 'Docker', 'Redis']
  },
  {
    id: 3,
    name: 'CodeGenius Assistant',
    shortDescription: 'Intelligent code generation and debugging companion',
    fullDescription: 'CodeGenius Assistant helps developers write better code faster with intelligent suggestions, automated testing, and bug detection across multiple programming languages.',
    category: 'Code Generation',
    tags: ['Code Generation', 'Debugging', 'Testing'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400',
    useCases: ['Code completion', 'Bug fixing', 'Test generation', 'Code review'],
    techStack: ['GitHub Copilot', 'ESLint', 'Jest', 'Node.js', 'TypeScript']
  },
  {
    id: 4,
    name: 'DataMiner Analytics',
    shortDescription: 'Powerful data analysis and pattern recognition engine',
    fullDescription: 'DataMiner Analytics transforms raw data into actionable insights through advanced statistical analysis, machine learning, and predictive modeling capabilities.',
    category: 'Data Analysis',
    tags: ['Data Analysis', 'Machine Learning', 'Predictive Modeling'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    useCases: ['Business intelligence', 'Fraud detection', 'Market analysis', 'Risk assessment'],
    techStack: ['Pandas', 'Scikit-learn', 'Apache Spark', 'PostgreSQL', 'Grafana']
  },
  {
    id: 5,
    name: 'WorkflowBot Pro',
    shortDescription: 'Intelligent automation for business processes',
    fullDescription: 'WorkflowBot Pro streamlines business operations through intelligent automation, workflow optimization, and seamless integration with existing systems.',
    category: 'Automation',
    tags: ['Automation', 'Workflow', 'Integration'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400',
    useCases: ['Email automation', 'Data entry', 'Report generation', 'System integration'],
    techStack: ['RPA', 'Zapier', 'Microsoft Power Automate', 'Python', 'REST APIs']
  },
  {
    id: 6,
    name: 'SummaryGenie',
    shortDescription: 'Intelligent document and content summarization',
    fullDescription: 'SummaryGenie creates concise, accurate summaries of long documents, articles, and multimedia content while preserving key information and context.',
    category: 'Summarization',
    tags: ['Summarization', 'Document Processing', 'Content Analysis'],
    image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400',
    useCases: ['Research papers', 'Meeting notes', 'News articles', 'Legal documents'],
    techStack: ['BERT', 'T5', 'spaCy', 'NLTK', 'Flask']
  },
  {
    id: 7,
    name: 'LinguaBot Translator',
    shortDescription: 'Multi-language translation with cultural context',
    fullDescription: 'LinguaBot Translator provides accurate, contextually-aware translations across 100+ languages with cultural nuance preservation and domain-specific terminology.',
    category: 'Translation',
    tags: ['Translation', 'Multi-language', 'Cultural Context'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400',
    useCases: ['Document translation', 'Real-time chat', 'Website localization', 'Legal translation'],
    techStack: ['Google Translate API', 'mBART', 'FastText', 'Django', 'MongoDB']
  },
  {
    id: 8,
    name: 'RecoEngine Smart',
    shortDescription: 'Personalized recommendation system for e-commerce',
    fullDescription: 'RecoEngine Smart delivers highly personalized product and content recommendations using advanced machine learning algorithms and user behavior analysis.',
    category: 'Recommendation',
    tags: ['Recommendation', 'Personalization', 'E-commerce'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
    useCases: ['Product recommendations', 'Content curation', 'Marketing campaigns', 'Cross-selling'],
    techStack: ['Collaborative Filtering', 'TensorFlow Recommenders', 'Apache Kafka', 'Elasticsearch', 'React']
  },
  {
    id: 9,
    name: 'Java Codex',
    shortDescription: 'Java-based code generation and debugging assistant',
    fullDescription: 'Java Codex helps developers generate and debug Java code snippets using AI-driven logic and real-time suggestions.',
    category: 'Developer Tools',
    tags: ['Java', 'Code Generation'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400',
    useCases: ['Java code help', 'OOP code generation'],
    techStack: ['Java', 'LLM', 'Spring Boot']
  },
  {
    id: 10,
    name: 'Draw Life',
    shortDescription: 'AI-powered drawing and illustration tool',
    fullDescription: 'Draw Life allows users to create illustrations and concept art from text prompts using diffusion models.',
    category: 'AI Productivity Tools',
    tags: ['Image Generation', 'Stable Diffusion'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400',
    useCases: ['Creative art', 'Character design'],
    techStack: ['Stable Diffusion', 'Python', 'FastAPI']
  },
  {
    id: 11,
    name: 'AskGPT',
    shortDescription: 'Chat interface powered by LLMs',
    fullDescription: 'AskGPT is a GPT-based AI assistant chat platform with custom interface and WebSocket-powered real-time messaging.',
    category: 'Communication & Collaboration',
    tags: ['Chatbot', 'LLM', 'Frontend'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400',
    useCases: ['Q&A systems', 'Smart assistant'],
    techStack: ['Groq', 'LLaMA', 'WebSocket', 'React']
  },
  {
    id: 12,
    name: 'Web Scraper and Analyzer',
    shortDescription: 'Scrape and analyze data from the web',
    fullDescription: 'Web Scraper and Analyzer fetches and processes structured data for competitive analysis, trends, and intelligence.',
    category: 'Data Analysis',
    tags: ['Scraping', 'Data Analysis'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    useCases: ['Market research', 'SEO data'],
    techStack: ['BeautifulSoup', 'Pandas', 'Python']
  },
  {
    id: 13,
    name: 'Stock Predictor Pro',
    shortDescription: 'AI model for forecasting stock prices',
    fullDescription: 'This tool predicts stock market trends using time series forecasting and deep learning techniques.',
    category: 'Finance & Blockchain',
    tags: ['Stock Prediction', 'Finance'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    useCases: ['Stock market planning'],
    techStack: ['LSTM', 'Linear Regression', 'TensorFlow']
  },
  {
    id: 14,
    name: 'Task Manager AI',
    shortDescription: 'Smart personal and project task manager',
    fullDescription: 'AI-based task manager with daily planning, habit tracking, and deadline management features.',
    category: 'AI Productivity Tools',
    tags: ['Task Manager', 'Productivity'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400',
    useCases: ['Task organization', 'Daily routines'],
    techStack: ['React', 'Flask', 'MongoDB']
  },
  {
    id: 15,
    name: 'MOT & SOT Suite',
    shortDescription: 'Secure tracking system for multiple objects',
    fullDescription: 'Advanced Multi-Object Tracking (MOT) and Single Object Tracking (SOT) system used in surveillance and government sectors.',
    category: 'Secure & Government AI',
    tags: ['MOT', 'SOT', 'Surveillance'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400',
    useCases: ['Security', 'Govt tracking'],
    techStack: ['YOLOv8', 'OpenCV', 'DeepSORT']
  },
  {
    id: 16,
    name: 'AI Habit Tracker',
    shortDescription: 'Personal productivity and wellness tracker',
    fullDescription: 'Smart app that helps build and track habits, offering AI recommendations to improve consistency.',
    category: 'Health & Lifestyle',
    tags: ['Habit Tracking', 'Wellness'],
    image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400',
    useCases: ['Self-development', 'Time management'],
    techStack: ['Flask', 'SQLite', 'React']
  },
  {
    id: 17,
    name: 'NLP SQL Assist',
    shortDescription: 'Convert natural language to SQL queries',
    fullDescription: 'Translates human language questions into optimized SQL database queries.',
    category: 'Developer Tools',
    tags: ['NLP', 'SQL'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
    useCases: ['Database exploration'],
    techStack: ['Transformers', 'PostgreSQL']
  },
  {
    id: 18,
    name: 'SmartDB Admin',
    shortDescription: 'AI-powered database management interface',
    fullDescription: 'Manage, optimize, and query relational databases using an intuitive AI interface.',
    category: 'Developer Tools',
    tags: ['Database', 'Admin Tool'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    useCases: ['Database automation', 'Admin UI'],
    techStack: ['React', 'MySQL', 'Flask']
  },
  {
    id: 19,
    name: 'Universal Chatbots',
    shortDescription: 'Collection of domain-specific chatbots',
    fullDescription: 'Deploy AI-powered chatbots for support, education, or productivity across multiple domains.',
    category: 'Communication & Collaboration',
    tags: ['Chatbot', 'Multilingual'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
    useCases: ['Customer support', 'Education'],
    techStack: ['Dialogflow', 'Botpress', 'Python']
  },
  {
    id: 20,
    name: 'Smart Notepad',
    shortDescription: 'AI-enhanced smart notepad for study and code',
    fullDescription: 'A beautiful and interactive notepad that gives inline GPT-based AI support for summaries, calculations, and code.',
    category: 'AI Productivity Tools',
    tags: ['Notepad', 'AI Text'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400',
    useCases: ['Code notes', 'Smart writing'],
    techStack: ['React', 'Groq API', 'TailwindCSS']
  },
  {
    id: 21,
    name: 'YouTube Sentiment AI',
    shortDescription: 'Sentiment analysis of YouTube video comments',
    fullDescription: 'Analyze sentiments and trends in comments for YouTube videos using NLP.',
    category: 'Data Analysis',
    tags: ['Sentiment Analysis', 'YouTube'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400',
    useCases: ['Market sentiment', 'Audience mood'],
    techStack: ['Transformers', 'Pandas', 'YouTube API']
  },
  {
    id: 22,
    name: 'X Sentiment Analyzer',
    shortDescription: 'Sentiment analysis on Twitter/X posts',
    fullDescription: 'Analyze real-time trends and sentiments from X (formerly Twitter) for opinion mining.',
    category: 'Data Analysis',
    tags: ['Social Media', 'Sentiment'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400',
    useCases: ['Brand monitoring', 'Opinion tracking'],
    techStack: ['Twitter API', 'NLP', 'Scikit-learn']
  },
  {
    id: 23,
    name: 'ChainIntel',
    shortDescription: 'Blockchain app for transaction and cybersecurity analysis',
    fullDescription: 'Analyze crypto transactions and detect anomalies or threats using ML and visualization tools.',
    category: 'Finance & Blockchain',
    tags: ['Blockchain', 'Security'],
    image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400',
    useCases: ['DeFi auditing', 'Transaction monitoring'],
    techStack: ['Web3.js', 'Python', 'Grafana']
  },
  {
    id: 24,
    name: 'ASA Learning',
    shortDescription: 'OS simulation and academic visual tools',
    fullDescription: 'Visualize OS concepts, networking, and compiler theory using animated simulations.',
    category: 'Academic & Visualization',
    tags: ['Learning', 'Education'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400',
    useCases: ['Student learning', 'Academic tools'],
    techStack: ['D3.js', 'Canvas', 'JavaScript']
  },
  {
    id: 25,
    name: 'Portfolio Maker Dart',
    shortDescription: 'Dart and Flutter based portfolio creator',
    fullDescription: 'Generate sleek and customizable portfolio websites using Dart and Flutter in minutes.',
    category: 'Developer Tools',
    tags: ['Flutter', 'Portfolio'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    useCases: ['Portfolio site'],
    techStack: ['Dart', 'Flutter']
  },
  {
    id: 26,
    name: 'StudioMeet',
    shortDescription: 'Real-time video collaboration platform',
    fullDescription: 'Simple and fast video conferencing tool that focuses on collaboration and performance.',
    category: 'Communication & Collaboration',
    tags: ['Video Meet', 'Collaboration'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    useCases: ['Online meetings', 'Project discussions'],
    techStack: ['WebRTC', 'Node.js', 'React']
  },
  {
    id: 27,
    name: 'NutriTrack AI',
    shortDescription: 'Food and nutrition analysis software',
    fullDescription: 'Full-featured platform for dietary analysis, nutrition planning, and food detection.',
    category: 'Health & Lifestyle',
    tags: ['Nutrition', 'Diet', 'Food'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400',
    useCases: ['Diet planning', 'Food recognition'],
    techStack: ['CNN', 'Nutrition API', 'Flask']
  },
  {
    id: 28,
    name: 'PDF Renamer Pro',
    shortDescription: 'Rename and organize PDFs using AI',
    fullDescription: 'Automatically categorize and rename PDFs based on content using OCR and NLP.',
    category: 'AI Productivity Tools',
    tags: ['PDF Tools', 'OCR'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400',
    useCases: ['Document sorting', 'Legal file cleanup'],
    techStack: ['Tesseract', 'spaCy', 'FastAPI']
  }
];
