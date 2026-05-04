// Skill name to logo SVG mapping
export const skillLogos = {
  // Languages
  'HTML': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm3 2h2v2H8v6h2v-2h2v2h2V7h2v6h-2v2h-2V7h-2v2H8V7z"/></svg>',
  'PHP': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.01 5a3 3 0 0 0-2.98 2.85L4.05 15a3 3 0 0 0 2.97 3.12h.14a3 3 0 0 0 2.96-2.82l.01-.13h2.06a5 5 0 0 1-5.02 4.76h-.17A5 5 0 0 1 2 15.1L2.05 7.9A5 5 0 0 1 7.01 3h.14a5 5 0 0 1 5 4.76h-2.06a3 3 0 0 0-2.98-2.76H7.01zM13 7h4.5c.827 0 1.5.673 1.5 1.5v7c0 .827-.673 1.5-1.5 1.5H13v-2h4v-6h-4V7z"/></svg>',
  'JavaScript': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3zm16.5 16.5V5.5H4.5v14h15zm-10-11h2v6h-2v-6zm4 0h2v6h-2v-6z"/></svg>',
  'MySQL': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></svg>',
  'CSS': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3zm15 15V6h-2v10h-3V6h-2v12H7V6H5v12h13z"/></svg>',
  
  // Frameworks
  'React': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/></svg>',
  'Laravel': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3zm15 15V6H6v12h12zm-10-8h4v2H8v-2zm6 0h2v2h-2v-2zm-6 4h4v2H8v-2z"/></svg>',
  'WordPress': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/></svg>',
  'Odoo': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/></svg>',
  'Vue': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 14.5a4.5 4.5 0 0 1 0-9 4.5 4.5 0 0 1 0 9z"/></svg>',
  'Vite': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 14.5a4.5 4.5 0 0 1 0-9 4.5 4.5 0 0 1 0 9z"/></svg>',
  
  // Security & Encryption
  'AES Encryption': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5s-5 2.24-5 5v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>',
  'Multi-Factor Authentication': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-4.9 0-9-4.1-9-9s4.1-9 9-9 9 4.1 9 9-4.1 9-9 9zm3.5-9c.8 0 1.5-.7 1.5-1.5S16.3 9 15.5 9 14 9.7 14 10.5s.7 1.5 1.5 1.5zm-7 0c.8 0 1.5-.7 1.5-1.5S9.3 9 8.5 9 7 9.7 7 10.5 7.7 12 8.5 12zm3.5 6c-2.3 0-4.2-1.9-4.2-4.2h2.1c0 1.1.9 2.1 2.1 2.1s2.1-.9 2.1-2.1h2.1c0 2.3-1.9 4.2-4.2 4.2z"/></svg>',
  'Role-Based Access Control': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',
  'Audit Logging': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-2.23-2.85h-2l3.5 4.5 4.5-5.68h-2z"/></svg>',
  'Data Protection': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.72-7 8.77V12H5V6.3l7-3.11v8.8z"/></svg>',
  
  // Design
  'UI/UX Design': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>',
  'Responsive Design': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"/></svg>',
  'Technical Documentation': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-8-6z"/></svg>',
  'Wireframing': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/></svg>',
  
  // Tools
  'Git': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/></svg>',
  'VS Code': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 2h-13c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18h-13V4h13v16z"/></svg>',
  'Vercel': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 20h20L12 2z"/></svg>',
  'Railway': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>',
  'Google Analytics': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 9h14V5H5v4zm0 14h14v-4H5v4zm0-6h14v-4H5v4z"/></svg>',
  'MySQL Workbench': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>',
  'Postman': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>',
  
  // Other skills
  'Payment Integration': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 8H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H4V10h16v10zm-4-5h-8v2h8v-2z"/></svg>',
  'API Development': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/></svg>',
  'Authentication & Authorization': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5s-5 2.24-5 5v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/></svg>',
  'Data Migration': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 14c1.66 0 3-1.34 3-3 0-1.66-1.34-3-3-3-1.66 0-3 1.34-3 3 0 1.66 1.34 3 3 3zm13.71-9.71L12 2.41 2.29 12.12C2 12.4 2 12.84 2.29 13.12l9.71 9.71c.39.39 1.02.39 1.41 0l9.71-9.71c.39-.39.39-1.02 0-1.41z"/></svg>',
  'System Integration': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 9c1.66 0 2.99-1.34 2.99-3S7.66 3 6 3C4.34 3 3 4.34 3 6s1.34 3 3 3zm0 6c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 6c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>',
  'Odoo ERP': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>',
};

export const getSkillLogo = (skillName) => {
  return skillLogos[skillName] || null;
};
