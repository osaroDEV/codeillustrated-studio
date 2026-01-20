export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  subCategory: string;
  image: string;
  coverImage?: string;
  description: string;
  year: string;
  services: string[];
  challenge: string;
  solution: string;
  gallery?: string[];
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "michael-stevens-solicitors",
    title: "Michael Stevens Solicitors",
    category: "UI/UX Design",
    subCategory: "Legal Tech",
    image: "/labs/projects/michael-stevens-solicitors/hero.png",
    coverImage:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "A comprehensive digital transformation for a leading legal firm, focusing on trust, clarity, and ease of access to legal resources.",
    year: "2023",
    services: ["UI/UX Design", "Web Development"],
    challenge:
      "The firm needed a modern digital presence that reflected their prestigious reputation while remaining accessible to new clients in a rapidly evolving legal landscape.",
    solution:
      "We designed a clean, minimalist interface focusing on typography and white space, ensuring that complex legal information is easy to digest. We also implemented a streamlined client onboarding flow.",
    gallery: [
      "/labs/projects/michael-stevens-solicitors/laptop-mockup.png",
      "/labs/projects/michael-stevens-solicitors/mobile-mockup.png",
    ],
    liveUrl: "https://michaelstevenssolicitors.com",
  },
  {
    id: "2",
    slug: "coding-tutor",
    title: "Coding Tutor",
    category: "Development",
    subCategory: "EdTech Platform",
    image:
      "https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "An interactive learning platform designed to bridge the gap between theory and practice in software engineering.",
    year: "2023",
    services: ["Product Design", "Full-stack Development", "LMS Integration"],
    challenge:
      "Traditional online learning platforms often lack the interactivity required for effective coding education.",
    solution:
      "We built a custom interactive code environment directly in the browser, integrated with a comprehensive progress tracking system and gamified learning paths.",
    gallery: [
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    liveUrl: "https://coding-tutor.app",
  },
  {
    id: "3",
    slug: "dabs-construction",
    title: "Dabs Construction",
    category: "Branding",
    subCategory: "Civil Engineering",
    image:
      "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "Rebranding a construction giant for the modern era, emphasizing structural integrity and forward-thinking engineering.",
    year: "2022",
    services: ["Branding", "Visual Identity", "Corporate Website"],
    challenge:
      "Dabs Construction had a legacy image that didn't reflect their recent expansion into smart city infrastructure.",
    solution:
      "We created a bold, geometric identity inspired by architectural blueprints and structural forms, applied across both digital and physical touchpoints.",
    gallery: [
      "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    liveUrl: "https://dabsconstruction.com",
  },
  {
    id: "4",
    slug: "ritzy-healthcare",
    title: "Ritzy Healthcare",
    category: "Development",
    subCategory: "Health Systems",
    image: "/labs/projects/ritzy-healthcare/hero.png",
    coverImage:
      "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "A patient-centric healthcare management system designed to streamline operations and improve patient outcomes.",
    year: "2023",
    services: ["System Architecture", "React Development", "HIPAA Compliance"],
    challenge:
      "Healthcare systems are often plagued by fragmented data and difficult-to-navigate interfaces.",
    solution:
      "We consolidated multiple service streams into a single unified dashboard, focusing on reducing the cognitive load for healthcare providers.",
    gallery: [
      "/labs/projects/ritzy-healthcare/laptop-mockup.png",
      "/labs/projects/ritzy-healthcare/mobile-mockup.png",
    ],
    liveUrl: "https://r-healthcare.vercel.app/",
  },
  {
    id: "5",
    slug: "solar-energy-portal",
    title: "Solar Energy Portal",
    category: "Strategy",
    subCategory: "Renewable Tech",
    image:
      "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "A strategic digital platform for managing renewable energy assets and visualizing real-time performance data.",
    year: "2024",
    services: ["Digital Strategy", "Data Visualization", "Dashboard Design"],
    challenge:
      "Visualizing complex energetic data in a way that is actionable for non-technical stakeholders.",
    solution:
      "We designed a series of intuitive charts and heatmaps that allow users to quickly identify performance bottlenecks across their solar arrays.",
    gallery: [
      "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    liveUrl: "https://solar-energy-portal.com",
  },
  {
    id: "6",
    slug: "eco-fashion-brand",
    title: "Eco-Fashion Brand",
    category: "Branding",
    subCategory: "Sustainable Style",
    image:
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "Defining the visual language for a new generation of sustainable fashion, focused on ethics without compromising on aesthetics.",
    year: "2023",
    services: ["Creative Direction", "E-commerce Design", "Social Content"],
    challenge:
      "Sustainable fashion is often perceived as 'bohemian'; the brand needed to look high-end and modern.",
    solution:
      "We adopted a high-fashion editorial approach to the visual identity, using minimalist layouts and earthy yet refined color palettes.",
    gallery: [
      "https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/7310207/pexels-photo-7310207.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    liveUrl: "https://eco-fashion-sustainable.com",
  },
];
