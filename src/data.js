import airpay from "./assets/airpaymoney.png"
import luminar from './assets/Luminar.png'
import entri from './assets/Entri.png'
export const data = {
  name: "Krishnapriya ",
  role: "Full Stack Developer",
  tagline: "Building scalable web experiences with React, Node.js & Python",
  location: "Pune, Maharashtra, India",
  email: "rishnak10@gmail.com",
  phone: "+91 6282488490",
  linkedin: "https://www.linkedin.com/in/krishnapriy4/",
  github: "https://github.com/krishnapriya1608",


  stats: [
    { number: "1.5+", label: "Years Experience" },
    { number: "15+", label: "Projects Built" },
    { number: "10+", label: "Technologies" },
    { number: "100%", label: "Responsive Design" }
  ],

  experience: [
    {
      role: "Full Stack Developer",
      company: "Airpay",
      period: "Feb 2025 – April 2026",
      image: airpay,
      color: "teal",
      points: [
        "Developed and maintained front-end features using JavaScript with MVC architecture",
        "Built and consumed REST APIs for core business functionalities with CRUD operations",
        "Optimized database queries to improve API performance and response times",
        "Conducted code reviews and maintained quality standards using Git/GitHub & Postman",
      ]
    },

    {
      role: "Full Stack Developer Intern",
      company: "Luminar Technolab · MERN Stack",
      period: "Jul 2024 – Jan 2025",
      image: luminar,
      color: "violet",

      points: [
        "Built full-stack web applications using MongoDB, Express.js, React.js, and Node.js",
        "Implemented JWT-based authentication and role-based authorization systems",
        "Designed RESTful APIs for seamless frontend-backend integration",
        "Delivered responsive UI components using React and modern CSS practices",
      ]
    },
    {
      role: "Python Full Developer Intern",
      company: "Entri",
      period: "July 2025 – Jan 2026",
      image: entri,
      color: "teal",
      points: [
        " Tech Stack: React, Python, REST APIs, HTML, CSS, JavaScript",
        "Implemented role-based authentication and authorization for User, Admin, and Super Admin modules.",
        " Users can book services, manage profiles, and chat with providers.",
        " Admins manage services and bookings with status-based filters.",
        " Super Admin controls category management and admin approvals.",
        " Built RESTful APIs to handle bookings, users, chats, and service management."
      ]
    },
  ],

  projects: [
    {
      name: "Airpay Money Website",
      desc: "Production fintech platform with scalable REST APIs, cross-browser responsive UI, form validations, and optimized user interaction flows.",
      stack: ["Laravel", "JavaScript", "REST API", "CSS3", "HTML5"],

      live: "https://www.airpay.money/",
      github: null,
      color: "teal"
    },
    {
      name: "SafeHer",
      desc: "Women’s Safety & Assistance Platform: Built a full-stack React and Node.js safety application with LLM-powered AI assistance, fake-call functionality, real-time SOS alerts, and live GPS tracking. Supported 20+ concurrent users with sub-2-second emergency alert latency, validated through testing with 25 users.",
      stack: ["LLM", "Node.js", "React.js", "MongoDB", "Socket.io", "JavaScript", "REST API", "CSS3", "HTML5"],

      live: "https://safe-her-6mim.vercel.app/",
      github: "https://github.com/krishnapriya1608/SafeHer",
      color: "teal"
    },
    {
      name: "CodeBase AI",
      desc: "AI code assistant that lets you ask questions about a codebase in plain English. Users upload ZIP archives or import a GitHub repository, then use semantic search and streaming chat to get answers grounded in the project's own files, along with per-project chat history, analysis and summaries. Built with a React frontend, a Node/Express API with MongoDB and JWT authentication with email OTP verification, and a separate Python FastAPI service that creates embeddings with sentence-transformers and retrieves with ChromaDB. Containerised with Docker Compose and deployed on AWS EC2, with Caddy providing HTTPS and reverse proxying.",
      stack: ["AWS", "Docker", "Python", "Node.js", "React.js", "MongoDB", "Socket.io", "JavaScript", "REST API", "CSS3", "HTML5", "Tailwind CSS"],

      live: "https://codebase-ai.duckdns.org/",
      github: "https://github.com/krishnapriya1608/Github",
      color: "teal"
    },
    {
      name: "Restaurant Management System",
      desc: "Full-stack app with dynamic menu CRUD, table reservation system, revenue tracking, i18n multi-language support, and semantic search.",
      stack: ["React", "Node.js", "MongoDB", "Express", "i18n", "Razorpay API", "CSS3", "Tailwind CSS", "Socket.io", "Google Login API", "Nodemailer", "JWT Auth"],
      live: null,
      github: "https://github.com/krishnapriya1608/Rest",
      color: "violet"
    },
    {
      name: "Home Service Management",
      desc: "Role-based platform for Users, Admins & Super Admins with service booking, real-time chat with providers, and status-based management.",
      stack: ["React", "Python", "REST API", "JWT", "CSS3"],
      live: null,
      github: "https://github.com/krishnapriya1608/HomeService",
      color: "pink"
    }
  ],

  skills: {
    "Languages": ["JavaScript", "TypeScript", "Python", "Java", "C++"],
    "Frontend": ["React.js", "HTML5", "CSS3", "Responsive Design", 'Tailwind CSS', 'Bootstrap', 'Material UI', 'Next.js'],
    "Backend": ["Node.js", "Express.js", "REST APIs", "Laravel", "ASP.NET"],
    "Database": ["MongoDB", "SQL", "DBMS"],
    "Tools": ["Git", "GitHub", "GitLab", "Postman", "VS Code"],
    "Concepts": ["JWT Auth", "MVC", "CI/CD", "DSA", "OS", "Networks", 'Socket.io'],
  },

  certifications: [
    { name: "Python Full Stack Development", org: "NSDC, Illinois", period: "Jul 2025 – Feb 2026" },
    { name: "MERN Stack Development", org: "Luminar Technolab, Kochi", period: "Jan 2025" },
    { name: "NACTET Certificate", org: "National Assessment", period: "Jan 2025" },
    { name: "1 Million Prompters ProgramDubai Centre for Artificial Intelligence ", org: "Dubai Govt", period: "July 2026" },
  ],

  education: {
    degree: "BTech in Computer Science",
    university: "APJ Abdul Kalam Technological University",
    period: "Sept 2020 – Jun 2024",
    cgpa: "8.33 / 10",
    coursework: ["Data Structures", "DBMS", "Software Engineering", "Operating Systems", "Computer Networks"]
  }
}
