import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Calendar Integration - Coral Academy",
    description: "Seamless session scheduling for teachers with calendar APIs",
    longDescription:
      "Integrated comprehensive calendar functionality into Coral Academy's teacher platform using React Hooks and calendar meeting APIs. Enabled teachers to seamlessly schedule and manage student sessions with minimal UI changes. Built with React and calendar integration APIs.",
    technologies: ["React", "React Hooks", "Calendar APIs", "TypeScript"],
    image: "/projects/calendar.png",
    github: "https://github.com",
    featured: true,
  },
  {
    id: "2",
    title: "Villa-Booking Site",
    description: "Full-stack villa reservation platform with payment integration",
    longDescription:
      "Built a Next.js-based villa booking application enabling seamless reservations with integrated booking and payment APIs. Features modular architecture for scalability, optimized API routes, responsive UI, and secured authentication using Supabase. Includes PostgreSQL database for persistent storage.",
    technologies: ["Next.js", "Supabase", "PostgreSQL", "Payment APIs", "TypeScript", "Tailwind CSS"],
    image: "/projects/villa.png",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: "3",
    title: "Red Hibbert Group Landing",
    description: "Scalable landing page with SSR, SEO, and CMS integration",
    longDescription:
      "Built a scalable, responsive web application for Red Hibbert Group using Next.js, TypeScript, and Tailwind CSS. Delivered industry-specific Salesforce solutions with server-side rendering, SEO optimization, and dynamic content integration via Sanity CMS. Enhanced user experience and performance metrics significantly.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "SSR", "SEO"],
    image: "/projects/rhg.png",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: "4",
    title: "Network File System - Open Source",
    description: "Distributed file system with 20% scalability improvement",
    longDescription:
      "Contributed to the Network_File_System open-source project using Java and Spring Boot. Improved system scalability by 20% and optimized distributed file storage for better fault tolerance and reliability. Enhanced performance through efficient algorithms and system architecture improvements.",
    technologies: ["Java", "Spring Boot", "Distributed Systems", "File Storage"],
    image: "/projects/nfs.png",
    github: "https://github.com",
    featured: false,
  },
];
