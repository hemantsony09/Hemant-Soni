export type SkillCategory = {
  title: string
  skills: string[]
}

export type LearningPillar = {
  title: string
  description: string
  linkLabel?: string
  linkHref?: string
}

export type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
}

export type EducationItem = {
  degree: string
  institution: string
  period: string
  description: string
}

export type Certification = {
  title: string
  issuer: string
  date: string
  description: string
}

export const HIGHLIGHT_ITEMS = [
  "Hi, I'm Hemant Soni",
  "I'm a Frontend Developer",
  "I'm a Backend Developer",
  "I'm a Full Stack Engineer",
  "I'm a Competitive Coder",
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: ["ReactJS", "Redux", "HTML/CSS", "JavaScript", "Tailwind CSS", "Material UI"],
  },
  {
    title: "Backend Development",
    skills: ["NodeJS", "ExpressJS", "MongoDB", "Firebase"],
  },
  {
    title: "Tools & Others",
    skills: ["Git/GitHub", "VS Code", "Responsive Design", "RESTful APIs", "Data Structures"],
  },
]

export const LEETCODE_PROFILE_URL = "https://leetcode.com/u/Hemantsony09/"

export const LEARNING_PILLARS: LearningPillar[] = [
  { title: "Project-Based Learning", description: "Hands-on experience through real projects" },
  { title: "Industry Experts", description: "Following tech leaders and blogs" },
  {
    title: "LeetCode Practice",
    description: "I regularly solve LeetCode problems to sharpen my coding skills",
    linkLabel: "View my LeetCode profile",
    linkHref: LEETCODE_PROFILE_URL,
  },
  { title: "Specialized Courses", description: "Deep diving into specific technologies" },
]

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Work Sync Application",
    description:
      "WorkSync is a team management platform for attendance, tasks, leave, and meetings. Developed a high-performance UI using React, Material UI, and Tailwind CSS with real-time updates.",
    image: "/worksyncDemoImage.png",
    tags: ["React", "Material UI", "Tailwind CSS"],
    githubUrl: "https://github.com/hemantsony09/Work-Sync-Project",
  },
  {
    id: 2,
    title: "Guard Sahab",
    description:
      "Developed a web application using ReactJS for the frontend and Firebase for backend services, including database management and authentication.",
    image: "/parkingsolutionDemoImage.png",
    tags: ["React", "Firebase", "Vercel", "Authentication"],
    githubUrl: "https://github.com/hemantsony09/Parking-Solution",
  },
  {
    id: 3,
    title: "KLobTech Website",
    description:
      "Corporate website built with React, Material UI, and Tailwind CSS. Ensured a responsive UI and optimized SEO strategies, improving search visibility and user engagement.",
    image: "/klobtechDemoImage.png",
    tags: ["React", "Material UI", "Tailwind CSS", "SEO"],
    liveUrl: "https://klobtech-web.vercel.app/",
  },
]

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    degree: "MCA",
    institution: "Rajasthan Technical University (Raj)",
    period: "2024 – 2026",
    description: "Master of Computer Applications focusing on advanced computing concepts and software development.",
  },
  {
    degree: "BCA Full Stack Web Design And Development",
    institution: "JECRC University, Jaipur(Raj)",
    period: "2021 – 2024",
    description:
      "Bachelor of Computer Applications with specialization in Full Stack Web Development, covering both frontend and backend technologies.",
  },
]

export const CERTIFICATIONS: Certification[] = [
  {
    title: "React JS Course - Master React for dynamic web",
    issuer: "Scaler",
    date: "April 2024",
    description:
      "Comprehensive course covering React fundamentals, hooks, state management, and building dynamic web applications.",
  },
  {
    title: "Node JS Course - Master fundamentals",
    issuer: "Scaler",
    date: "April 2024",
    description:
      "In-depth course on Node.js covering server-side JavaScript, Express framework, RESTful APIs, and database integration.",
  },
]

