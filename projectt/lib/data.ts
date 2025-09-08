export const personalInfo = {
  name: "Marmik Joshi",
  title: "Software Engineer",
  email: "marmikjoshi52@gmail.com",
  location: "Ahmedabad, Gujarat, India",
  bio: "High-achieving Computer Engineering student with exceptional 9.0 SPI, passionate about creating innovative solutions and contributing to impactful projects in the tech industry.",
  avatar: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
  social: {
    github: "https://github.com/marmik-joshi907",
    linkedin: "https://www.linkedin.com/in/marmikjoshi/",
    twitter: "https://x.com/MarmikJoshi1409",
    email: "mailto:marmikjoshi52@gmail.com"
  }
};

export const skills = {
  programming: [
    { name: "Java", level: 90, category: "Backend" },
    { name: "Python", level: 85, category: "Backend" },
    { name: "JavaScript", level: 88, category: "Frontend" },
    { name: "TypeScript", level: 82, category: "Frontend" },
    { name: "HTML/CSS", level: 90, category: "Frontend" }
  ],
  frameworks: [
    { name: "React", level: 85, category: "Frontend" },
    { name: "Angular", level: 80, category: "Frontend" },
    { name: "Next.js", level: 78, category: "Fullstack" },
    { name: "Flask", level: 82, category: "Backend" },
    { name: "Node.js", level: 75, category: "Backend" }
  ],
  tools: [
    { name: "Git/GitHub", level: 88, category: "DevOps" },
    { name: "MongoDB", level: 80, category: "Database" },
    { name: "SQL", level: 85, category: "Database" },
    { name: "System Design", level: 75, category: "Architecture" },
    { name: "MERN Stack", level: 82, category: "Fullstack" }
  ]
};

export const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Computer Engineering",
    institution: "SAL Institute of Technology & Engineering Research",
    location: "Ahmedabad",
    period: "Jul 2023 - Jul 2027",
    gpa: "9.0/10.0 SPI",
    achievements: [
      "Achieved consistent and commendable Semester Performance Index (SPI) of 9.0/10.0",
      "Ranked among top 1% of students in department for academic excellence",
      "Applied theoretical knowledge in practical academic projects",
      "Strong understanding of Core CSE concepts and emerging technologies"
    ]
  }
];

export const experience = [
  {
    title: "Management Committee Member",
    company: "ISTE (Indian Society for Technical Education)",
    location: "Ahmedabad",
    period: "Jul 2023 — Present",
    type: "Leadership",
    responsibilities: [
      "Collaborate with cross-functional teams to drive strategic initiatives",
      "Provide insights on technology trends to enhance organizational growth",
      "Lead discussions on innovation and best practices within the committee",
      "Support organizational objectives through effective project management",
      "Facilitate workshops to promote effective use of technology"
    ]
  }
];

export const projects = [
  {
    title: "NeuraAPI",
    description: "Developed a versatile RESTful API using Python and Flask to provide real-time AI-powered services, including text generation and summarization, powered by the research model.",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["Python", "Flask", "REST API", "Research", "AI/ML"],
    github: "https://github.com/marmik-joshi907/NeuraAPI",
    demo: "https://demo.com",
    featured: true
  },
  {
    title: "MediLocate",
    description: "Designed a mobile application to help users locate nearby pharmacies with specific medicines in stock, manage medication schedules, and offer a commercial platform for pharmacy partnerships.",
    image: "https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["Mobile App", "Location Services", "Database", "UI/UX"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    title: "Bug Tracking System",
    description: "Engineered a robust Bug Tracking System in Java to centralize and streamline the reporting, assignment, and resolution of software defects for development teams.",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["Java", "System Design", "Database", "Project Management"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  }
];

export const codeSnippets = {
  hero: `const developer = {
  name: "Marmik Joshi",
  role: "Software Engineer",
  skills: ["Java", "Python", "React"],
  passion: "Building innovative solutions",
  currentFocus: "AI & Full-stack Development"
};

console.log(\`Hello! I'm \${developer.name}\`);`,
  
  about: `// About me in code
class SoftwareEngineer {
  constructor() {
    this.name = "Marmik Joshi";
    this.spi = 9.0;
    this.location = "Ahmedabad, India";
    this.interests = [
      "Full-stack Development",
      "AI/ML Technologies", 
      "System Design",
      "Open Source"
    ];
  }
  
  getCurrentStatus() {
    return "Building amazing projects 🚀";
  }
}`
};