// Skill name to logo SVG mapping
// SVGs imported as raw strings (?raw) so they render inline via v-html,
// which means fill:currentColor and CSS colour inheritance work correctly.
// This also guarantees Vite bundles them — unlike `new URL(...) /* @vite-ignore */`
// which opts out of Vite's asset pipeline and breaks in production builds.

import HTMLSvg             from '../assets/images/logo/HTML5.svg?raw';
import CSSSvg              from '../assets/images/logo/CSS3.svg?raw';
import JSsvg               from '../assets/images/logo/JavaScript.svg?raw';
import PHPsvg              from '../assets/images/logo/PHP.svg?raw';
import MySQLsvg            from '../assets/images/logo/MySQL.svg?raw';
import ReactSvg            from '../assets/images/logo/React.svg?raw';
import VueSvg              from '../assets/images/logo/Vue.js.svg?raw';
import LaravelSvg          from '../assets/images/logo/Laravel.svg?raw';
import WordPressSvg        from '../assets/images/logo/WordPress.svg?raw';
import OdooSvg             from '../assets/images/logo/odoo.svg?raw';
import ViteSvg             from '../assets/images/logo/Vite.js.svg?raw';
import GitSvg              from '../assets/images/logo/Git.svg?raw';
import VSCodeSvg           from '../assets/images/logo/Visual Studio Code.svg?raw';
import VercelSvg           from '../assets/images/logo/Vercel.svg?raw';
import RailwaySvg          from '../assets/images/logo/Railway.svg?raw';
import GoogleAnalyticsSvg  from '../assets/images/logo/Google Analytics.svg?raw';
import MySQLWorkbenchSvg   from '../assets/images/logo/Mysql Workbench.svg?raw';
import PostmanSvg          from '../assets/images/logo/Postman.svg?raw';
import BootstrapSvg        from '../assets/images/logo/Bootstrap.svg?raw';
import TailwindSvg         from '../assets/images/logo/Tailwind CSS.svg?raw';
import GitHubSvg           from '../assets/images/logo/GitHub.svg?raw';
import XamppSvg            from '../assets/images/logo/Xampp.svg?raw';

export const skillLogos = {
  // ─── Languages ────────────────────────────────────────────────────────────
  'HTML':       HTMLSvg,
  'CSS':        CSSSvg,
  'JavaScript': JSsvg,
  'PHP':        PHPsvg,
  'MySQL':      MySQLsvg,

  // ─── Frameworks ───────────────────────────────────────────────────────────
  'React':     ReactSvg,
  'Vue':       VueSvg,
  'Laravel':   LaravelSvg,
  'WordPress': WordPressSvg,
  'Odoo':      OdooSvg,
  'Vite':      ViteSvg,

  // ─── Security & Features ──────────────────────────────────────────────────
  'AES Encryption': `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8h-1V6c0-2.761-2.238-5-5-5S7 3.239 7 6v2H6c-1.105 0-2 .895-2 2v10c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2V10c0-1.105-.895-2-2-2zm-6 9c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
  </svg>`,

  'Multi-Factor Authentication': `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
  </svg>`,

  'Role-Based Access Control': `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm9 11v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1h2z"/>
  </svg>`,

  'Audit Logging': `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
  </svg>`,

  'Data Protection': `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
  </svg>`,

  // ─── Design ───────────────────────────────────────────────────────────────
  'UI/UX Design': `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.19 0 2.33-.21 3.39-.57L12 18l-3-3 3-3 3.79 3.79c1.91-1.52 3.21-3.77 3.21-6.29-.01-5.52-4.48-9.5-10-9.5zM9 12l-3-3 4-4 3 3-4 4zm7 3l-4-4 3-3 4 4-3 3z"/>
  </svg>`,

  'Responsive Design': `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 1H9c-1.1 0-2 .9-2 2v3H5c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-3h2c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-4 16H5V8h10v9zm4-5h-2V8c0-1.1-.9-2-2-2H9V3h10v9z"/>
  </svg>`,

  'Technical Documentation': `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
  </svg>`,

  'Wireframing': `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7zM7 9H4V5h3v4zm10 6h3v4h-3v-4zm0-10h3v4h-3V5z"/>
  </svg>`,

  // ─── Tools ────────────────────────────────────────────────────────────────
  'Git':               GitSvg,
  'VS Code':           VSCodeSvg,
  'Vercel':            VercelSvg,
  'Railway':           RailwaySvg,
  'Google Analytics':  GoogleAnalyticsSvg,
  'MySQL Workbench':   MySQLWorkbenchSvg,
  'Postman':           PostmanSvg,
  'Bootstrap':         BootstrapSvg,
  'Tailwind CSS':      TailwindSvg,
  'GitHub':            GitHubSvg,
  'Xampp':             XamppSvg,

  // ─── Other Skills ─────────────────────────────────────────────────────────
  'Payment Integration': `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
  </svg>`,

  'API Development': `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 13V5h14v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2zm4 4h8v2H8v-2z"/>
  </svg>`,

  'Authentication & Authorization': `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
  </svg>`,

  'Data Migration': `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 9H9v2h6v2l3-3-3-3v2z"/>
  </svg>`,

  'System Integration': `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>`,

  'Odoo ERP': `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.153 11.97a2.153 2.153 0 1 0 0-4.306 2.153 2.153 0 0 0 0 4.306zm4.23 0a2.153 2.153 0 1 0 0-4.306 2.153 2.153 0 0 0 0 4.306zm4.234 0a2.153 2.153 0 1 0 0-4.306 2.153 2.153 0 0 0 0 4.306zm4.23 0a2.153 2.153 0 1 0 0-4.306 2.153 2.153 0 0 0 0 4.306z"/>
  </svg>`,
};

export const getSkillLogo = (skillName) => {
  return skillLogos[skillName] || null;
};