import auditSystem from '../assets/images/projects/audit-system.webp';
import ccsPortal from '../assets/images/projects/ccs-comprehensive-profiling-system.webp';
import clinicalaguna from '../assets/images/projects/clinicalaguna.webp';
import fortressChurch from '../assets/images/projects/fortress-church.webp';
import befitflex from '../assets/images/projects/befitflex.webp';
import studentInfoApp from '../assets/images/projects/itew-6-labexam.webp';
import googleAnalyticsCertificate from '../assets/images/certificates/Google Analytics Cartification.webp';
import hubspotCertificate from '../assets/images/certificates/Hubspot.webp';
import aiFluencyCertificate from '../assets/images/certificates/AI Fluency Framework & Foundations.webp';
import digitalMarketingCertificate from '../assets/images/certificates/Fundamentals of digital marketing.webp';
import efsetCertificate from '../assets/images/certificates/EF SET Certificate.webp';
import wadwhaniCertificate from '../assets/images/certificates/wadwhani.webp';
import internshipCertificate from '../assets/images/certificates/Certificate of Completion.webp';

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
    title: "Be Fit Flex Gym",
    description: "Gym membership and fitness management platform for Be Fit Flex Gym Laguna, built with vanilla PHP and deployed on Railway.",
    tags: ["PHP", "Railway"],
    image: befitflex,
    link: "https://befitflex.up.railway.app/",
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

export const certificates = [
  {
    id: "01",
    title: "Google Analytics Certification",
    issuer: "Google Skillshop",
    preview: googleAnalyticsCertificate,
    link: "https://skillshop.credential.net/7e0ac45c-8e17-4b82-9676-0a2550c64fed#acc.7CuwqpcT"
  },
  {
    id: "02",
    title: "HubSpot Data Integrations Certified",
    issuer: "HubSpot Academy",
    preview: hubspotCertificate,
    link: "https://app-na2.hubspot.com/academy/achievements/gk4lwswp/en/1/villadiego-roel-e/hubspot-data-integrations-certified"
  },
  {
    id: "03",
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    preview: aiFluencyCertificate,
    link: "https://verify.skilljar.com/c/29z4doydrf2s"
  },
  {
    id: "04",
    title: "Fundamentals of Digital Marketing",
    issuer: "Google",
    preview: digitalMarketingCertificate,
    link: "https://skillshop.exceedlms.com/student/award/Dpbp1iVmW9HUBqDuw6RGTgfZ"
  },
  {
    id: "05",
    title: "EF SET English Certificate",
    issuer: "EF SET",
    preview: efsetCertificate,
    link: "https://cert.efset.org/kmMmiL"
  },
  {
    id: "06",
    title: "Job Ready: Employability Skills (Advanced)",
    issuer: "Wadhwani Foundation",
    preview: wadwhaniCertificate,
    link: "https://web.certificate.wfglobal.org/en/certificate?certificateId=6a07047e2115e1e7bf89b1a9"
  },
  {
    id: "07",
    title: "400-Hour Internship Certificate of Completion",
    issuer: "Exceed Digital Solutions",
    preview: internshipCertificate,
    link: null
  }
];

export const skills = {
  languages: ["HTML", "PHP", "JavaScript", "MySQL", "CSS"],
  frameworks: ["React", "Laravel", "WordPress", "Odoo"],
  design: ["UI/UX Design", "Responsive Design", "Technical Documentation", "Wireframing"],
  tools: ["Git", "VS Code", "Vercel", "Railway", "Hostinger", "Google Analytics", "Google Search Console", "MySQL Workbench", "Postman"],
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
      skills: ["Odoo ERP", "Data Migration", "Vercel Deployment", "Railway Hosting", "Hostinger Hosting", "System Integration"]
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
