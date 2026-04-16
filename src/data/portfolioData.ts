import type { IconType } from 'react-icons';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiAntdesign,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiGit,
  SiDocker,
  SiGithubactions,
  SiFigma,
  SiLinux,
  SiPostman,
  SiSpringboot,
  SiMysql,
  SiGithub,
  SiWordpress,
  SiPython,
  SiPhp,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { VscAzure } from "react-icons/vsc";

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'other';
  icon: IconType;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github?: string;
  live?: string;
  image: string;
  featured: boolean;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tech: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export const personalInfo = {
  name: 'Ushan Dilusha',
  title: 'Software Engineer',
  tagline: 'Building elegant digital experiences with modern technologies',
  bio: `I'm a passionate Software Engineer who thrives on crafting clean, efficient, and scalable web applications. With a strong foundation in full-stack development, I specialize in building responsive user interfaces and robust backend services using modern frameworks and tools.`,
  email: 'ushandilusha@gmail.com',
  github: 'https://github.com/ushan-dilusha',
  linkedin: 'https://www.linkedin.com/in/ushan-dilusha-492b1519b/',
  facebook: 'https://www.facebook.com/ushan.dilusha.10',
  whatsapp: 'https://wa.me/94719788669',
  stackoverflow: 'https://stackoverflow.com/users/20942289/ushan-dilusha',
  medium: 'https://medium.com/@ushandilusha',
  location: 'Sri Lanka',
  resumeUrl: '/Ushan_Dilusha_CV.pdf',
  avatar: '/avatar.jpeg',
};

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 90, category: 'frontend', icon: SiReact },
  { name: 'TypeScript', level: 91, category: 'frontend', icon: SiTypescript },
  { name: 'JavaScript', level: 92, category: 'frontend', icon: SiJavascript },
  { name: 'HTML/CSS', level: 95, category: 'frontend', icon: SiHtml5 },
  { name: 'Redux', level: 82, category: 'frontend', icon: SiRedux },
  { name: 'Tailwind CSS', level: 85, category: 'frontend', icon: SiTailwindcss },
  { name: 'Bootstrap', level: 89, category: 'frontend', icon: SiBootstrap },
  { name: 'Ant Design', level: 87, category: 'frontend', icon: SiAntdesign },

  // Backend
  { name: 'Node.js', level: 85, category: 'backend', icon: SiNodedotjs },
  { name: 'Spring Boot', level: 87, category: 'backend', icon: SiSpringboot },
  { name: 'Express', level: 83, category: 'backend', icon: SiExpress },
  { name: 'PostgreSQL', level: 78, category: 'backend', icon: SiPostgresql },
  { name: 'MySQL', level: 78, category: 'backend', icon: SiMysql },
  { name: 'MongoDB', level: 75, category: 'backend', icon: SiMongodb },
  { name: 'REST APIs', level: 88, category: 'backend', icon: SiPostman },
  { name: 'GraphQL', level: 70, category: 'backend', icon: SiGraphql },
  { name: 'Python', level: 87, category: 'backend', icon: SiPython },
  { name: 'PHP', level: 87, category: 'backend', icon: SiPhp },

  // Tools
  { name: 'Git', level: 90, category: 'tools', icon: SiGit },
  { name: 'GitHub', level: 90, category: 'tools', icon: SiGithub },
  { name: 'Docker', level: 72, category: 'tools', icon: SiDocker },
  { name: 'AWS', level: 68, category: 'tools', icon: FaAws },
  { name: 'Azure', level: 68, category: 'tools', icon: VscAzure },
  { name: 'CI/CD', level: 75, category: 'tools', icon: SiGithubactions },
  { name: 'Figma', level: 70, category: 'tools', icon: SiFigma },
  { name: 'Linux', level: 78, category: 'tools', icon: SiLinux },
  { name: 'Postman', level: 88, category: 'tools', icon: SiPostman },
  { name: 'WordPress', level: 70, category: 'tools', icon: SiWordpress },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Large-scale, multi-regional UK foster care platform',
    description: 'A comprehensive, multi-regional foster care platform designed to support the entire lifecycle of foster care management across the UK. The platform streamlines operations for local authorities, foster carers, and support teams through a unified digital ecosystem.',
    longDescription: '',
    tech: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Azure'],
    image: '',
    featured: true,
  },
  {
    id: 2,
    title: 'Sign Language Learning Application',
    description: 'The “අරුත” application is a unique tool designed to enhance communication skills, particularly for users with hearing impairments. It supports both Sinhala and English, offering four primary functions: sign symbol identification, number identification, object identification, and interactive drawing activities. The application requires a large collection of English and Sinhala sign language motions, and collecting and analyzing user interactions will help maintain its functionality and user-friendliness, better tailoring its actions and content to the target audience.',
    longDescription: '• Developed a comprehensive sign language learning application supporting both Sinhala and English, designed to enhance communication skills for users with hearing impairments\n• Implemented four primary functions: sign symbol identification, number identification, object identification, and interactive drawing activities\n• Built with React, Node.js, PostgreSQL, Spring Boot, TypeScript, Python, and Machine Learning\n• Features include sign language recognition, interactive learning modules, and user progress tracking',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Spring Boot', 'TypeScript', 'Python', 'Machine Learning'],
    github: 'https://github.com/Arutha-Project',
    live: 'https://arutha-research-website.onrender.com/',
    image: '',
    featured: true,
  },
  {
    id: 3,
    title: 'FitConnet - Social Media Web application',
    description: 'Our project focuses on developing a social networking platform tailored specifically for fitness enthusiasts, providing a space for them to connect, share experiences. Users will have the ability to follow other members, like and comment on posts. while also being able to create their own posts featuring workout routines, and dietary insights. Our platform will be accessible as a web application, ensuring security with OAuth-based authentication to protect user information.',
    longDescription: '• Developed a comprehensive social networking platform for fitness enthusiasts, providing a space for them to connect, share experiences\n• Implemented a robust room reservation system with high-standard service delivery\n• Built with React, Node.js, MongoDB, and Express.js\n• Features include room management, booking management, user management, and reporting',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'OAuth'],
    github: 'https://github.com/Ushan-Dilusha/FitConnect',
    image: '',
    featured: false,
  },
  {
    id: 4,
    title: 'Hotel Gayana - MERN Project',
    description: 'To carry out our ITP project this semester, we undertook to create software system for a hotel management system for the Hotel Gayana which is situated in Tangalle as our client. Hotel Gayana is a banquet hotel, and it is specifically made for room reservations with a high standard of service to the customers.',
    longDescription: '',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    github: 'https://github.com/Ushan-Dilusha/Hotel-Gayana-Hotel-Mangement-System',
    image: '',
    featured: false,
  },
  {
    id: 5,
    title: 'Support Educational Programming Environment For Beginners - FrontEnd',
    description: 'This study delves into the development of a web application using the MERN stack to facility and educational programming environment tailored for beginners. The focus lies on leveraging the MERN (MongoDB, Express.js, React.js, Node.js) technologies to create an interactive platform aimed at supporting novices in learning programming concepts.',
    longDescription: '',
    tech: ['React', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/Ushan-Dilusha/mysticwebcraft-frontend',
    image: '',
    featured: false,
  },
  {
    id: 6,
    title: 'Support Educational Programming Environment For Beginners - BackEnd',
    description: 'This study delves into the development of a web application using the MERN stack to facility and educational programming environment tailored for beginners. The focus lies on leveraging the MERN (MongoDB, Express.js, React.js, Node.js) technologies to create an interactive platform aimed at supporting novices in learning programming concepts.',
    longDescription: '',
    tech: ['Node.js', 'MongoDB', 'Express.js'],
    github: 'https://github.com/Ushan-Dilusha/mysticwebcraft-backend',
    image: '',
    featured: false,
  },
  {
    id: 7,
    title: 'HelpMate - Android Kotlin FireBase',
    description: 'Our mobile application is a donation system that has been created to allow people to easily support those in need. We understand that many people want to help but may not know how to or have the time to do so. That is why we have developed an easy-to-use platform that enables you to feed a family and send a gift with just a few clicks.',
    longDescription: '',
    tech: ['Android', 'Kotlin', 'Firebase'],
    github: 'https://github.com/Ushan-Dilusha/Mad-Project-HelpMate',
    image: '',
    featured: false,
  },
  {
    id: 8,
    title: 'Online Flight Booking System',
    description: 'A project that demonstrates Java EE technologies such as Servlets, JSP and Java beans. An online Flight booking system for a small scale airport, that covers user management, ticket management and flight management.',
    longDescription: '',
    tech: ['Java', 'JSP', 'Servlets', 'Java Beans', 'MySQL'],
    github: 'https://github.com/Ushan-Dilusha/phoenix-flight',
    image: '',
    featured: false,
  },
  {
    id: 9,
    title: 'E-Channelling',
    description: 'The e-channeling system is an online platform that utilizes Java EE technologies to facilitate convenient and secure appointment booking.The system prioritizes security and aims to enhance the overall eChannelling experience.',
    longDescription: '',
    tech: ['Java', 'JSP', 'Servlets', 'Java Beans', 'MySQL'],
    github: 'https://github.com/Ushan-Dilusha/phoenix-flight',
    image: '',
    featured: false,
  },
  {
    id: 10,
    title: 'Car Mart Solution',
    description: 'Car Mart Solution is a car rental system developed using HTML, CSS, PHP, and SQL. It allows customers to browse and rent cars, and allows the shop owner to manage rentals and customers.',
    longDescription: '',
    tech: ['Spring Boot', 'PostgreSQL', 'TypeScript', 'Ant Design'],
    github: 'https://github.com/car-mart-solution',
    image: '',
    featured: true,
  },
  {
    id: 11,
    title: 'E-Channelling - Docterr',
    description: 'A platform that allows doctors to advertise and promote their skills, expertise and experience, and allows patients to search for the doctor they want at their convenience.',
    longDescription: '',
    tech: ['HTML', 'CSS', 'PHP', 'SQL'],
    github: 'https://github.com/Ushan-Dilusha/Doctor-Channeling-System',
    image: '',
    featured: false,
  },
  {
    id: 12,
    title: 'Cake Vista',
    description: 'Cake Vista is a cake shop system developed using HTML, CSS, PHP, and SQL. It allows customers to browse and order cakes, and allows the shop owner to manage orders and customers.',
    longDescription: '',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    github: 'https://github.com/organizations/Cake-Vista',
    image: '',
    featured: true,
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Associate Software Engineer',
    company: 'BoonFair Technologies',
    location: 'Sri Lanka - Full-time | Remote',
    period: 'September 2024 — Present',
    description: [
      'End-to-end developer for a large-scale, multi-regional UK foster care platform, focused on building scalable solutions that automate complex regulatory and financial workflows.',
      'Built an automated payment system (Journi Pay) for accurate foster carer allowances',
      'Developed a secure e-signature approval workflow replacing manual approvals',
      'Created role-based analytics dashboards for real-time insights',
      'Engineered regulatory reporting compliant with Ofsted/CIW standards',
      'Implemented staff & compliance management with a dual user model',
      'Optimized core system modules for performance and maintainability',
    ],
    tech: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Azure', 'Git', 'GitHub'],
  },
  {
    id: 2,
    role: 'Technical Support Agent',
    company: 'SKYREK',
    location: 'Sri Lanka - Part-time | Remote',
    period: 'September 2025 — Present',
    description: [
      'Facilitate full-stack project delivery by resolving issues in async JavaScript, middleware, and NoSQL queries.',
      'Mentor students by simplifying complex concepts like JWT authentication and CRUD operations into practical solutions.',
      'Provide fast, accurate debugging support in a remote, high-paced environment, maintaining high satisfaction.',
      'Guide end-to-end deployments across platforms like Vercel, Netlify, Render, and Railway, resolving CORS, environment, and build issues.',
      'Focus on improving code quality through modular, readable, and high-performance practices.',
    ],
    tech: ['MERN Stack', 'Vercel', 'Netlify', 'Render', 'Railway', 'Git', 'GitHub'],
  },
  {
    id: 3,
    role: 'Software Engineering Intern',
    company: 'BoonFair Technologies',
    location: 'Sri Lanka - Full-time | Remote',
    period: 'July 2023 — September 2024',
    description: [
      'Contributed to the development of a large-scale, multi-regional UK foster care platform, focusing on building scalable solutions that automate complex regulatory and financial workflows.',
      'Backend Unit testing',
      'Approval Flow development',
      'Staff Leave management',
    ],
    tech: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Azure', 'Git', 'GitHub'],
  },
  {
    id: 4,
    role: 'Operations Manager / WordPress Administrator',
    company: 'BoonFair Marketplace',
    location: 'Sri Lanka - Full-time | Remote',
    period: 'March 2021 — August 2024',
    description: [
      'Managed daily operations of a WordPress-based marketplace, ensuring smooth order processing and customer support.',
      'Administered WordPress plugins and themes, optimizing performance and security.',
      'Coordinated with vendors and customers to resolve issues and improve user experience.',
    ],
    tech: ['WordPress', 'WooCommerce'],
  },
  {
    id: 5,
    role: 'Marketing Junior Executive',
    company: 'Trade Finance & Investments PLC',
    location: 'Sri Lanka - Full-time | Remote',
    period: '2019 — 2021',
    description: [
    ],
    tech: [],
  }
];

export const education: Education[] = [
  {
    id: 1,
    degree: 'BSc (Hons) in Information Technology Specialized in Information Technology',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    period: '2021 — 2025',
    description:
      'Achieved a Second Lower Class Honors degree in Information Technology, specializing in Information Technology. Focused on developing advanced software engineering skills, including full-stack development, database management, and modern web technologies.',
  },
  // {
  //   id: 2,
  //   degree: 'MSc. in Computer Science and Engineering, Computer Science',
  //   institution: 'University of Moratuwa',
  //   period: 'Expected to Complete in 2027',
  //   description:
  //     'MSc. in Computer Science and Engineering, Computer Science',
  // },
  {
    id: 3,
    degree: 'G.C.E. Advanced Level',
    institution: 'Sivali Central College - Ratnapura',
    period: '2016 - 2018',
    description:
      'G.C.E. Advanced Level',
  },
  {
    id: 4,
    degree: 'G.C.E. Ordinary Level',
    institution: 'Eheliyagoda Central College - Eheliyagoda',
    period: '2010 - 2016',
    description:
      'G.C.E. Ordinary Level',
  }
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];
