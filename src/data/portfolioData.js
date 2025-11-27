export const portfolioData = {
hero: {
name: "Hassan Idris",
title: "Full Stack Software Engineer (Java/Next.js)",
tagline:
"Building scalable, enterprise-grade applications using the Java Spring ecosystem and modern frontend design.",
status: "Open to Work",
email: "[abbahassan312@gmail.com]",
linkedin: "[https://linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)",
github: "[https://github.com/yourusername](https://github.com/yourusername)",
resumeLink: "/Hassan_Idris_CV_2025.pdf",
},

skills: [
{
category: "Frontend",
icon: "🖥️",
items: ["React", "Next.js", "Tailwind CSS", "Redux", "JavaScript (ES6+)", "JSX"],
},
{
category: "Backend & Core",
icon: "⚙️",
items: ["Java", "Spring Boot", "RESTful APIs", "Microservices", "Unit Testing (JUnit)"],
},
{
category: "Database & ORM",
icon: "📦",
items: ["MySQL", "PostgreSQL", "Hibernate/JPA", "SQL Optimization", "AWS RDS"],
},
{
category: "Tools & Workflow",
icon: "🛠️",
items: ["Git", "Maven/Gradle", "Postman", "IntelliJ IDEA", "Vercel/AWS"],
},
],

projects: [
{
id: 1,
title: "Glo Vendor Reseller Portal",
category: "FinTech / Telecom",
status: "In Progress",
description:
"A high-volume B2B portal for airtime/data resale. Developed a robust backend featuring secure authentication, automated API dispatching for VTU, and real-time transaction logging.",
technologies: ["Next.js", "Spring Boot", "MySQL", "Hibernate/JPA", "JWT/OAuth 2.0"],
features: [
"Multi-tier Reseller Management via Role-Based Access Control (RBAC)",
"Automated VTU dispensing integrated via secure external APIs",
"Wallet Funding and Transaction History stored in MySQL",
"Spring Security for endpoint protection",
],
liveUrl: "#",
githubUrl: "#",
},
{
id: 2,
title: "Integrated Tertiary Education System (ITEMS)",
category: "EdTech / Enterprise ERP",
status: "In Progress",
description:
"A comprehensive management ERP designed for Nigerian Tertiary Institutions, centralizing critical student and academic data.",
technologies: ["React", "Spring Boot", "MySQL", "Maven", "Tailwind CSS"],
features: [
"Student Registration and Course Enrollment Module",
"CGPA Calculation Engine & Result Processing in Java",
"Secure Payment Gateway Integration",
"RESTful API with versioning support",
],
liveUrl: "#",
githubUrl: "#",
},
{
id: 3,
title: "Noreek Energy",
category: "Energy Gas  Company Website",
status: "Completed",
description:
"Energy gas Company Located at abuja, nigeria where there customers buy there gas meters online for there cooking gas.",
technologies: ("JavaScript", "MongoDB", "Next js", "Node.js"),
features: ["Date reminders for clearance", "Local storage for offline access"],
liveUrl: "https://noretek-l4z4.onrender.com",
githubUrl: "[https://github.com/abbahassan321/repo]",
},
],

about: {
summary:
"Recently completed my National Youth Service Corps (NYSC) year, transitioning my analytical background into a career in Full Stack Software Engineering. I specialize in building robust, data-intensive web applications using the Java Spring Boot/MySQL stack, focusing on performance and security.",

sections: [
  {
    title: "The Full Stack Commitment",
    content:
      "I'm currently engaged in large-scale projects like the Glo Portal and ITEMS EdTech system, demonstrating proficiency across the entire stack—from developing scalable RESTful APIs in Java Spring Boot to implementing responsive UIs with Next.js/Tailwind.",
  },
],

funFacts: [
  { label: "Completed Projects", value: "1+" },
  { label: "Favourite Stack", value: "Java/Spring/next js" },
  { label: "Learning Focus", value: "Microservices & Cloud" },
],

},
};
