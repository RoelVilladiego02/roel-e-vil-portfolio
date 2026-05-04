import auditSystem from '../assets/images/projects/audit-system.webp';
import ccsPortal from '../assets/images/projects/ccs-comprehensive-profiling-system.webp';
import clinicalaguna from '../assets/images/projects/clinicalaguna.webp';
import fortressChurch from '../assets/images/projects/fortress-church.webp';
import sunriseTelco from '../assets/images/projects/sunrise-telco.webp';
import studentInfoApp from '../assets/images/projects/itew-6-labexam.webp';

export const profile = {
  name: "Roel E. Villadiego",
  title: "Full-Stack Developer",
  tagline: "Building secure, scalable web applications from concept to cloud deployment.",
  location: "Sta. Rosa, Laguna, Philippines",
  email: "villadiegoroel92@gmail.com",
  phone: "09498214559",
  bio: "BSIT graduate from Pamantasan ng Cabuyao with hands-on experience in full-stack web development, ERP system deployment, and technical support. Led full-stack development of a clinic management system deployed on Vercel & Railway. 400-hour OJT as Technical Implementer at Exceed Digital Solutions.",
  availability: "Open for entry-level & mid-level opportunities",
  socials: {
    github: "https://github.com/RoelVilladiego02",
    linkedin: "https://www.linkedin.com/in/roel-villadiego-93ab64326/",
    facebook: "https://www.facebook.com/roel.villadiego.419924",
    instagram: "https://www.instagram.com/pungay_roel/"
  }
};

export const projects = [
  {
    id: "01",
    title: "Clinica Laguna - Web-Based Clinic Management System",
    description: "Full-stack clinic management system with appointment scheduling, medical records, billing (PayMongo), teleconsultation (video + chat), inventory, and analytics. Deployed on Vercel (frontend) & Railway (backend). Implements AES encryption, MFA, RBAC, and audit logging.",
    tags: ["React", "Laravel", "MySQL", "Vercel", "Railway", "PayMongo", "AES Encryption", "MFA", "RBAC"],
    image: clinicalaguna,
    link: "https://clinicalaguna.it.com/",
    year: "2025"
  },
  {
    id: "02",
    title: "Audit System",
    description: "A comprehensive platform to assess and enhance your organization's cybersecurity posture with industry-leading tools and insights. Features include security assessment, analytics, recommendations, compliance tracking, risk identification, and team access management.",
    tags: ["React", "Laravel", "Vercel", "Railway"],
    image: auditSystem,
    link: "https://audit-system-orpin.vercel.app",
    year: "2026"
  },
  {
    id: "03",
    title: "CCS Portal - Your Campus, One Login Away",
    description: "Final project in Web Development Frameworks. A comprehensive campus portal providing access to grades, schedules & resources with real-time announcements & notifications and secure single sign-on for all roles.",
    tags: ["React", "Laravel", "Vercel", "Railway"],
    image: ccsPortal,
    link: "https://ccs-comprehensive-profiling-system.vercel.app",
    year: "2026"
  },
  {
    id: "04",
    title: "Fortress Church",
    description: "Promotional page for our church with modern design and responsive layout.",
    tags: ["React", "Vite", "Vercel"],
    image: fortressChurch,
    link: "https://fortress-church.vercel.app/",
    year: "2026"
  },
  {
    id: "05",
    title: "Sunrise Telco",
    description: "One of my first projects in responsive web design. Built with vanilla code (plain HTML, CSS, and JavaScript) to demonstrate core web development fundamentals.",
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
    image: sunriseTelco,
    link: "https://sunrise-telco.vercel.app/",
    year: "2026"
  },
  {
    id: "06",
    title: "Student Info App",
    description: "Lab exam project exploring student information with modern Vue patterns. Features component architecture, efficient state management with Vue composition API, client-side routing, and real-time API integration with error handling.",
    tags: ["Vue", "Vite", "Vercel"],
    image: studentInfoApp,
    link: "https://itew-6-labexam.vercel.app/",
    year: "2026"
  }
];

export const skills = {
  languages: ["HTML", "PHP", "JavaScript", "MySQL", "CSS"],
  frameworks: ["React", "Laravel", "WordPress", "Odoo"],
  design: ["UI/UX Design", "Responsive Design", "Technical Documentation", "Wireframing"],
  tools: ["Git", "VS Code", "Vercel", "Railway", "Google Analytics", "MySQL Workbench", "Postman"],
  categories: [
    {
      name: "Frontend Development",
      level: 4,
      skills: ["React", "JavaScript", "HTML/CSS", "Responsive Design", "Payment Integration"]
    },
    {
      name: "Backend Development",
      level: 4,
      skills: ["Laravel", "PHP", "MySQL", "API Development", "Authentication & Authorization"]
    },
    {
      name: "Security & Encryption",
      level: 4,
      skills: ["AES Encryption", "Multi-Factor Authentication", "Role-Based Access Control", "Audit Logging", "Data Protection"]
    },
    {
      name: "Enterprise & Deployment",
      level: 3,
      skills: ["Odoo ERP", "Data Migration", "Vercel Deployment", "Railway Hosting", "System Integration"]
    }
  ]
};

export const experience = [
  {
    id: 1,
    role: "Technical Implementer & Project Assistant (OJT)",
    company: "Exceed Digital Solutions",
    duration: "Jan 2026 - Apr 2026",
    location: "Sta. Rosa, Laguna",
    description: "400-hour OJT: Deployed and configured Odoo ERP systems, executed bulk data migrations, tested payroll logic, performed biometrics hardware installation, managed WordPress optimization, and documented technical workflows."
  },
  {
    id: 2,
    role: "Capstone Full-Stack Developer",
    company: "Pamantasan ng Cabuyao",
    duration: "2024 - 2025",
    location: "Cabuyao, Laguna",
    description: "Sole Full-Stack Developer for clinic management system. Implemented appointment scheduling, medical records, billing, teleconsultation, inventory, and analytics. Deployed on Vercel & Railway with AES encryption, MFA, RBAC."
  },
  {
    id: 3,
    role: "Office / Documentation Staff",
    company: "AC Rockport Construction & Development Corporation",
    duration: "Oct 2020 - Jul 2021",
    location: "Marikina City",
    description: "Managed and organized office documents, prepared reports using MS Office, coordinated with client consultants for documentation requests."
  }
];

export const testimonials = [
  {
    id: 1,
    quote: "Roel is an exceptional developer with a keen eye for design. His attention to detail and collaborative approach made our project a success.",
    author: "Jane Doe",
    role: "Product Manager",
    company: "Tech Startup"
  },
  {
    id: 2,
    quote: "Working with Roel transformed our design system. His technical expertise combined with design thinking is rare to find.",
    author: "John Smith",
    role: "Design Lead",
    company: "Digital Agency"
  },
  {
    id: 3,
    quote: "A true full-stack developer who delivers pixel-perfect work on time. Highly recommended.",
    author: "Maria Garcia",
    role: "CEO",
    company: "Web Studio"
  }
];

export const funFacts = [
  { label: "Projects Completed", value: "6+" },
  { label: "Certifications", value: "5" },
  { label: "OJT Hours", value: "400" },
  { label: "Clients Served", value: "10+" }
];
