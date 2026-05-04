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
    linkedin: "https://linkedin.com/in/roelvilladiego",
    dribbble: "https://dribbble.com",
    twitter: "https://twitter.com"
  }
};

export const projects = [
  {
    id: "01",
    title: "Clinica Laguna - Web-Based Clinic Management System",
    description: "Full-stack clinic management system with appointment scheduling, medical records, billing (PayMongo), teleconsultation (video + chat), inventory, and analytics. Deployed on Vercel (frontend) & Railway (backend). Implements AES encryption, MFA, RBAC, and audit logging.",
    tags: ["React", "Laravel", "MySQL", "Vercel", "Railway", "PayMongo", "AES Encryption", "MFA", "RBAC"],
    image: "/images/clinica-laguna.jpg",
    link: "https://clinica-laguna.vercel.app",
    year: "2025"
  },
  {
    id: "02",
    title: "Odoo ERP System Deployment & Migration",
    description: "Enterprise resource planning system deployment and configuration for multiple clients. Handled module setup, bulk data migrations, payroll logic testing, and custom workflow automation.",
    tags: ["Odoo ERP", "Data Migration", "MySQL", "Workflow Automation", "Payroll Logic"],
    image: "/images/odoo-erp.jpg",
    link: "https://example.com",
    year: "2026"
  },
  {
    id: "03",
    title: "WordPress Site Optimization & Management",
    description: "WordPress website optimization, banner design revisions, SEO improvements, and site performance tuning for client branding and user engagement.",
    tags: ["WordPress", "PHP", "SEO", "HTML/CSS", "Performance Tuning"],
    image: "/images/wordpress.jpg",
    link: "https://example.com",
    year: "2026"
  },
  {
    id: "04",
    title: "Biometrics Hardware Integration & Automation",
    description: "Onsite installation, configuration, and troubleshooting of biometric attendance systems. Automated chatbot scripts for client support and documentation.",
    tags: ["Hardware Integration", "Automation", "Technical Documentation", "Client Support"],
    image: "/images/biometrics.jpg",
    link: "https://example.com",
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
