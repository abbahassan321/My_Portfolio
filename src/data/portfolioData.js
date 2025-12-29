export const portfolioData = {
  hero: {
    name: "Hassan Idris",
    title: "Full Stack Software Engineer",
    subtitle: "Java Spring Ecosystem & Modern Frontend",
    tagline:
      "Building scalable, enterprise-grade applications with a focus on performance, security, and clean architecture.",
    status: "Open to Work",
    email: "abbahassan312@gmail.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/abbahassan321",
    resumeLink: "/Hassan_Idris_CV_2025.pdf",
  },

  skills: [
    {
      category: "Frontend",
      icon: "💻",
      items: ["React", "Next.js", "Tailwind CSS", "Redux", "JavaScript (ES6+)"],
    },
    {
      category: "Backend & Core",
      icon: "⚙️",
      items: [
        "Java",
        "Spring Boot",
        "RESTful APIs",
        "Microservices",
        "Spring Security",
        "JUnit",
      ],
    },
    {
      category: "Database & Cloud",
      icon: "☁️",
      items: ["MongoDB", "MySQL", "PostgreSQL", "Hibernate / JPA", "Vercel"],
    },
    {
      category: "Tools & DevOps",
      icon: "🛠️",
      items: ["Git", "Maven", "Gradle", "Postman", "Docker"],
    },
  ],

  projects: [
    {
      id: 1,
      title: "Glo Vendor Reseller Portal",
      category: "FinTech / Telecom",
      status: "In Progress",
      description:
        "A high-volume B2B portal for airtime and data resale. Built to handle secure authentication, automated VTU dispatching, wallet funding, and real-time transaction logging.",
      techStack: [
        "Next.js",
        "Spring Boot",
        "MySQL",
        "Hibernate",
        "Spring Security",
      ],
      features: [
        "Role-Based Access Control",
        "Automated VTU APIs",
        "Wallet Funding System",
      ],
      links: { demo: "#", code: "#" },
    },

    {
      id: 2,
      title: "ITEMS (Education ERP)",
      category: "EduTech / Enterprise",
      status: "In Progress",
      description:
        "A comprehensive ERP system for Nigerian tertiary institutions, centralizing academic and student records.",
      techStack: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
      features: ["Student Registration", "CGPA Engine", "Secure Payments"],
      links: { demo: "#", code: "#" },
    },

    {
      id: 3,
      title: "Noreek Energy",
      category: "E-Commerce / Energy",
      status: "Completed",
      description:
        "An energy company website enabling customers to purchase gas meters online with a responsive UI.",
      techStack: ["Next.js", "Node.js", "MongoDB"],
      features: ["Online Ordering", "Responsive UI"],
      links: {
        demo: "https://noretek-l4z4.onrender.com",
        code: "https://github.com/abbahassan321/repo",
      },
    },

    {
      id: 4,
      title: "CloudSoft Consulting",
      category: "Corporate Website",
      status: "Completed",
      description:
        "Official website for CloudSoft Consulting. Alhamdulillah — the custom domain is live.",
      techStack: ["Next.js", "Tailwind CSS", "MongoDB", "Vercel"],
      features: ["SEO Optimized", "Multi-page Layout"],
      links: {
        demo: "https://www.cloudsoftconsulting.com.ng/",
        code: "#",
      },
    },
  ],

  about: {
    summary:
      "Recently completed NYSC, transitioning into Full Stack Software Engineering with focus on Java Spring Boot, MongoDB, and Next.js.",

    sections: [
      {
        title: "The Full Stack Commitment",
        content:
          "I design scalable RESTful APIs with Spring Boot and craft clean, responsive frontends using Next.js and Tailwind CSS.",
      },
    ],

    funFacts: [
      { label: "Level", value: "Junior → Mid Track" },
      { label: "Favorite Stack", value: "Spring Boot + Next.js" },
      { label: "Focus", value: "Microservices" },
    ],
  },
};
