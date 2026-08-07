/* ===========================================================================
 *  PORTFOLIO CONTENT — edit this file to update your whole site.
 *  Everything (name, contact, projects, skills, experience) lives here.
 * ===========================================================================
 *
 *  👉  Search for "EDIT ME" for the few fields still needing your input
 *      (education graduation years).
 *
 *  👉  Drop your résumé PDF at:  public/Abdullah_Tariq_Abbasi_Resume.pdf
 * =========================================================================== */

export const profile = {
  name: "Abdullah Tariq Abbasi",
  firstName: "Abdullah",
  lastName: "Tariq Abbasi",
  initials: "AA",
  roles: [
    "Full Stack AI Engineer",
    "Computer Vision",
    "Generative AI",
    "Agentic AI",
    "MLOps",
  ],
  tagline:
    "I build production-grade AI systems and full-stack web platforms — from real-time vision to autonomous agents.",
  location: "Lahore, Pakistan",
  phone: "+92 334 0003242",
  email: "abdullahabbasi852@gmail.com",
  github: "https://github.com/abdullahtariqabbasi",
  githubHandle: "abdullahtariqabbasi",
  linkedin: "https://www.linkedin.com/in/abdullahtariqabbasi/",
  linkedinHandle: "abdullahtariqabbasi",
  resume: "/Abdullah_Tariq_Abbasi_Resume.pdf", // drop the PDF in /public
  summary:
    "Full Stack AI Engineer with 7+ years of experience designing, building, and shipping production-grade systems across two domains — Artificial Intelligence and full-stack web. On the AI side I deliver Computer Vision, Generative AI, and Agentic AI systems (YOLO, LLM fine-tuning, RAG, multi-agent workflows) with end-to-end MLOps. On the web side I build complete platforms in Next.js, React, Ruby on Rails, Laravel, and ERPNext/Frappe. My work spans live products serving real users — from a real-time multi-site surveillance platform to a psychology Agentic AI assistant — where accuracy, latency, and reliability are non-negotiable.",
};

export const stats = [
  { value: "7", label: "Years of experience", suffix: "+" },
  { value: "20", label: "Projects delivered", suffix: "+" },
  { value: "14", label: "Live in production", suffix: "" },
  { value: "2", label: "Domains: AI + Web", suffix: "" },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  /** "ai" projects use a video demo; "web" projects use an image gallery. */
  type: "ai" | "web";
  /** Image gallery (web projects). */
  images?: string[];
  /** Video demo + poster frame (ai projects). */
  poster?: string;
  video?: string;
  link?: string;
  live?: boolean;
  accent: string; // tailwind gradient classes
};

export const projects: Project[] = [
  // ---------------------------------------------------------------- AI
  {
    slug: "fortix",
    name: "Fortix",
    category: "Computer Vision · Surveillance",
    tagline: "Real-time multi-site camera monitoring platform",
    description:
      "A production real-time multi-site camera monitoring platform covering many business cases such as ANPR (Automatic Number Plate Recognition), trash detection, PPE detection, and more. Streams live camera feeds through detection models and surfaces instant alerts across monitored sites.",
    highlights: [
      "Real-time multi-site camera monitoring with live detection",
      "ANPR system for automatic number plate recognition",
      "Trash detection, PPE detection, and more business cases",
      "Live in production, serving real monitored sites",
    ],
    stack: ["Computer Vision", "YOLO", "ANPR", "Real-Time Inference", "Cloud"],
    type: "web",
    images: [
      "/projects/fortix-1.png",
      "/projects/fortix-2.png",
      "/projects/fortix-3.png",
    ],
    link: "https://www.fortixai.io",
    live: true,
    accent: "from-emerald-500/30 to-teal-500/10",
  },
  {
    slug: "sprixle",
    name: "Sprixle",
    category: "Agentic AI · Mental Health",
    tagline: "Psychology Agentic AI system with persistent memory",
    description:
      "A Psychology Agentic AI System. Architected autonomous AI workflows with persistent memory management and emotion/context understanding for personalized psychological assistance. The system supports 500+ concurrent adaptive conversations with a scalable backend enabling real-time contextual AI interactions at sub-300ms response times — deployed and live in production.",
    highlights: [
      "500+ concurrent adaptive conversations",
      "Persistent memory management + emotion/context understanding",
      "Sub-300ms real-time contextual AI responses",
      "Live in production with a scalable backend",
    ],
    stack: ["LangChain", "LangGraph", "Agentic AI", "LLMs", "FastAPI"],
    type: "web",
    images: [
      "/projects/sprixle-1.png",
      "/projects/sprixle-2.png",
      "/projects/sprixle-3.png",
    ],
    link: "https://www.sprixle.com/",
    live: true,
    accent: "from-teal-500/30 to-emerald-500/10",
  },
  {
    slug: "face-recognition",
    name: "Face Recognition",
    category: "Computer Vision · Security",
    tagline: "Zone-based face detection & embedding matching",
    description:
      "An AI-powered face recognition pipeline for detecting and matching faces within a defined zone. Uses a YOLO26 model for accurate face detection and the InsightFace model to match face embeddings, enabling identity recognition in a monitored area.",
    highlights: [
      "YOLO26 model for fast, accurate face detection",
      "InsightFace model for face-embedding matching",
      "Zone-restricted recognition within a defined area",
      "End-to-end detection → embedding → match pipeline",
    ],
    stack: ["YOLO26", "InsightFace", "OpenCV", "Python", "Computer Vision"],
    type: "ai",
    poster: "/projects/face-recognition-poster.jpg",
    video: "/projects/face-recognition.mp4",
    live: false,
    accent: "from-cyan-500/30 to-emerald-500/10",
  },
  {
    slug: "face-swapper",
    name: "Face Swapper",
    category: "Generative AI · Vision",
    tagline: "High-quality, realistic AI face swapping",
    description:
      "A pipeline leveraging state-of-the-art computer vision and deep learning models to generate high-quality face swaps while preserving natural facial details. It combines accurate face swapping with facial restoration and enhancement for visually realistic results.",
    highlights: [
      "InsightFace InSwapper for accurate, realistic face swapping",
      "GFPGAN for facial restoration and enhancement",
      "RestoreFormer to recover fine facial details",
      "Python backend producing fast, high-quality output",
    ],
    stack: [
      "InsightFace InSwapper",
      "GFPGAN",
      "RestoreFormer",
      "Generative AI",
      "Python",
    ],
    type: "ai",
    poster: "/projects/face-swapper-poster.jpg",
    video: "/projects/face-swapper.mp4",
    live: false,
    accent: "from-emerald-500/30 to-lime-500/10",
  },
  {
    slug: "foot-size",
    name: "Foot Size — AI Foot Measurement",
    category: "Computer Vision · Biometrics",
    tagline: "Contactless foot & lower-leg measurement from images",
    description:
      "An AI-powered computer vision system to accurately measure foot and lower-leg dimensions from RGB images using pose estimation, image segmentation, and geometric analysis. Camera calibration converts pixel measurements into real-world millimeter units for precise biometric analysis, automating extraction of key metrics for fast, contactless digital foot assessment.",
    highlights: [
      "Pose estimation + image segmentation + geometric analysis",
      "Camera calibration: pixel → real-world millimeters",
      "Automated foot length, ankle width, calf width & leg length",
      "Fast, contactless digital foot assessment",
    ],
    stack: ["Computer Vision", "Pose Estimation", "Segmentation", "Python"],
    type: "ai",
    poster: "/projects/foot-size-poster.jpg",
    video: "/projects/foot-size.mp4",
    live: false,
    accent: "from-amber-500/30 to-emerald-500/10",
  },
  {
    slug: "room-3d",
    name: "3D Room Reconstruction",
    category: "Computer Vision · 3D / SLAM",
    tagline: "Monocular SLAM for dense 3D reconstruction",
    description:
      "Built on top of MASt3R's 3D reconstruction priors, MASt3R-SLAM (created by Riku Murai, Eric Dexheimer, and Andrew J. Davison) is a monocular SLAM that can run at 15 FPS, reconstruct dense geometry, and stay globally consistent even on in-the-wild video.",
    highlights: [
      "Monocular SLAM running at 15 FPS",
      "Dense geometry reconstruction",
      "Globally consistent on in-the-wild video",
      "Built on MASt3R 3D reconstruction priors",
    ],
    stack: ["MASt3R", "MASt3R-SLAM", "3D Reconstruction", "Python"],
    type: "ai",
    poster: "/projects/room-3d-poster.jpg",
    video: "/projects/room-3d.mp4",
    live: false,
    accent: "from-teal-500/30 to-cyan-500/10",
  },
  // ---------------------------------------------------------------- Web
  {
    slug: "ragewar",
    name: "Ragewar",
    category: "Web Platform · Gaming",
    tagline: "Immersive online strategy game with time-travel mechanics",
    description:
      "Ragewar is an immersive online strategy game where players construct and expand their medieval civilizations. It offers a unique time-travel mechanic, allowing players to explore different eras and unlock powerful creatures. Strategic depth is a key aspect, requiring players to manage resources, allocate troops strategically, and form alliances for success.",
    highlights: [
      "Build and expand medieval civilizations",
      "Unique time-travel mechanic across eras",
      "Resource management, troop allocation & alliances",
      "Deep strategic multiplayer gameplay",
    ],
    stack: ["Ruby on Rails", "JavaScript", "PostgreSQL", "Trello"],
    type: "web",
    images: [
      "/projects/ragewar-1.png",
      "/projects/ragewar-2.png",
      "/projects/ragewar-3.png",
    ],
    link: "https://ragewar.com",
    live: true,
    accent: "from-rose-500/30 to-amber-500/10",
  },
  {
    slug: "spire-healthcare",
    name: "Spire HealthCare",
    category: "Web Platform · HealthTech",
    tagline: "Medical device management & patient monitoring",
    description:
      "Spire HealthCare is a web-based application designed to manage and monitor medical devices for patients. Built using Ruby on Rails, React.js, and Bootstrap, the platform streamlines device management, enhances patient data tracking, and improves overall care coordination. With responsive design and real-time updates, it supports clinicians and patients in delivering and receiving consistent, data-driven care.",
    highlights: [
      "Manage and monitor medical devices for patients",
      "Streamlined device management & patient data tracking",
      "Improved care coordination across teams",
      "Responsive design with real-time updates",
    ],
    stack: ["Ruby on Rails", "React.js", "Bootstrap", "PostgreSQL"],
    type: "web",
    images: [
      "/projects/spire-1.png",
      "/projects/spire-2.png",
      "/projects/spire-3.png",
    ],
    link: "https://www.spirehealthcare.com/",
    live: true,
    accent: "from-emerald-500/30 to-cyan-500/10",
  },
  {
    slug: "invo-next",
    name: "Invo Next (ERPNext)",
    category: "Web Platform · ERP",
    tagline: "End-to-end company workflows on ERPNext/Frappe",
    description:
      "InvoNext is an internal Frappe/ERPNext-based application for end-to-end company workflows — covering employee records, leave requests, payroll processing, and core accounting. Leveraging ERPNext's modular framework, it streamlines financial operations and automates payroll calculations.",
    highlights: [
      "End-to-end company workflows on ERPNext/Frappe",
      "Employee records, leave requests & approvals",
      "Payroll processing with automated calculations",
      "Core accounting & streamlined financial operations",
    ],
    stack: ["ERPNext", "Frappe", "Python"],
    type: "web",
    images: [
      "/projects/invo-next-1.jpeg",
      "/projects/invo-next-2.jpeg",
      "/projects/invo-next-3.jpeg",
    ],
    link: "https://next.invozone.com/",
    live: true,
    accent: "from-teal-500/30 to-emerald-500/10",
  },
  {
    slug: "invo-hub",
    name: "Invo Hub",
    category: "Web Platform · HR / Project Mgmt",
    tagline: "Project & employee management with HR workflows",
    description:
      "Invohub is a comprehensive web application for project and employee management, covering features such as leave requests, manager approvals, and monthly perks/benefits claims. Built with Express.js, Node.js, and React.js, it streamlines HR workflows and team collaboration through intuitive APIs and a responsive frontend.",
    highlights: [
      "Project & employee management in one app",
      "Leave requests & manager approvals",
      "Monthly perks/benefits claims",
      "Responsive React frontend + Node.js APIs",
    ],
    stack: ["Node.js", "Express.js", "React.js", "PostgreSQL"],
    type: "web",
    images: ["/projects/invo-hub-1.jpeg", "/projects/invo-hub-2.jpeg"],
    link: "https://hub.invozone.com",
    live: true,
    accent: "from-emerald-500/30 to-teal-500/10",
  },
  {
    slug: "biocloud3d",
    name: "Bio Cloud 3D",
    category: "Web Platform · EdTech / Medical",
    tagline: "3D medical animations with subscription plans",
    description:
      "Medical 3D animations and an educational website — an immersive educational platform where 3D medical models are shared as educational content for the medical and scientific communities through different subscription plans.",
    highlights: [
      "Immersive platform for 3D medical animations",
      "3D medical models as educational content",
      "Built for the medical & scientific communities",
      "Multiple subscription plans (Stripe billing)",
    ],
    stack: ["Laravel", "jQuery", "MySQL", "Stripe"],
    type: "web",
    images: [
      "/projects/biocloud3d-1.png",
      "/projects/biocloud3d-2.png",
      "/projects/biocloud3d-3.png",
    ],
    link: "https://www.biocloud3d.com/",
    live: true,
    accent: "from-cyan-500/30 to-teal-500/10",
  },
];

export type SkillGroup = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI / ML",
    icon: "brain",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "Transformers",
      "Vision Transformers",
      "LLM Fine-Tuning",
      "Prompt Engineering",
      "Generative AI",
      "Agentic AI",
      "Multimodal AI",
      "RAG",
      "MLOps",
      "Model Deployment",
      "Real-Time Inference",
      "Data Annotator",
      "3D Slicer",
      "CVAT",
    ],
  },
  {
    title: "AI Frameworks & Libraries",
    icon: "layers",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Ultralytics YOLO (v11/v26/YOLOE)",
      "OpenCV",
      "LangChain",
      "LangGraph",
      "Hugging Face Transformers",
      "Keras",
      "FastAPI",
      "NumPy",
      "Pandas",
      "N8N",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "cloud",
    skills: ["Docker", "AWS", "GitHub", "CI/CD Pipelines (GitHub Actions)", "Kubernetes"],
  },
  {
    title: "Frontend & Web",
    icon: "layout",
    skills: [
      "React.js",
      "NextJS",
      "JavaScript",
      "jQuery",
      "Ruby on Rails",
      "Laravel",
      "Firebase",
      "Stripe",
    ],
  },
  {
    title: "Backend & Data",
    icon: "database",
    skills: [
      "Node.js",
      "Python",
      "PHP",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "ERPNext",
      "Frappe",
    ],
  },
  {
    title: "Tools & Workflow",
    icon: "tool",
    skills: ["Git", "Postman", "JIRA", "Trello"],
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Invozone Pvt. Ltd.",
    location: "Lahore, Pakistan",
    period: "Jan 2022 – Present",
    current: true,
    points: [
      "Improved front/back document image detection accuracy using OpenCV (contours, morphology, Hough transforms) on the Certifi App, and refactored its file-processing pipeline onto AWS SQS with concurrency control to eliminate Lambda timeouts and DB exhaustion.",
      "Architected a microservices-based backend for Invoteams, a team-collaboration platform, integrating task management and notification systems and leading technical discussions with stakeholders.",
      "Designed and built the Sqrrrl game backend from scratch, including real-time chat via Socket.io, plus scalable backends for Invohub (project & employee management) and InvoProjects (a Trello-like kanban plugin with drag-and-drop).",
      "Customized Frappe/ERPNext modules (HR, payroll, project management) for Invonext, building API endpoints and webhooks for external data sync, and developed Python scraping pipelines for TikTok metadata extraction and analytics.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Code District",
    location: "Lahore, Pakistan",
    period: "Nov 2020 – Jan 2022",
    points: [
      "Led cross-functional teams building Swatfame, a web application on Laravel and SQL Server, delivering end-to-end solutions across front-end and back-end.",
      "Designed core features of BioCloud 3D, a cloud-based 3D medical visualization platform, including secure Stripe payment integration for subscription plans.",
    ],
  },
];

export const education = {
  degree: "B.S. in Computer Science",
  school: "FAST — National University of Computer and Emerging Sciences",
  location: "Lahore, Pakistan",
  period: "", // EDIT ME: add your graduation years
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

/* Tech items shown in the scrolling marquee (About section). */
export const marqueeItems = [
  "PyTorch",
  "LangChain",
  "LangGraph",
  "YOLO v11/v26",
  "Hugging Face",
  "FastAPI",
  "Docker",
  "AWS",
  "RAG",
  "Computer Vision",
  "Agentic AI",
  "Next.js",
  "React.js",
  "Ruby on Rails",
  "Laravel",
  "ERPNext",
  "Kubernetes",
  "CI/CD",
  "LLM Fine-Tuning",
  "Stripe",
  "PostgreSQL",
];
