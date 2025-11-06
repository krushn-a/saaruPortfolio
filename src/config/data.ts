import { FaGitAlt, FaCube } from "react-icons/fa";
import { FiCpu, FiHeadphones, FiMonitor, FiCode } from "react-icons/fi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import {
  SiUnity,
  SiCplusplus,
  SiBlender,
  SiGithub,
  SiGodotengine,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandVisualStudio } from "react-icons/tb";

export const socialLinks = [
  {
    id: 5,
    priority: 1,
    title: "GitHub",
    url: "https://github.com/krushn-a",
  },
  {
    id: 6,
    priority: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/krushn-a-07604b258/",
  },
  {
    id: 7,
    priority: 3,
    title: "itch.io",
    url: "https://nicheabyss.itch.io/",
  },
];

export const personalInfo = {
  name: "Krushna Prasad Marndi",
  title: "Gameplay Programmer",
  avatar: "/images/about/krushna.jpg",
  email: "codeofkrushna@gmail.com",
  location: "Jabalpur, Madhya Pradesh, India",
  description:
    "Game programmer specializing in systems and gameplay programming, focused on writing efficient, clean code and tackling new challenges in game development",
};

export const heroSection = {
  personalInfo: personalInfo,
  socialLinks: socialLinks,
};

export const workExperience = [
  {
    company: "Jagrati",
    position: "Volunteer Member",
    period: "2022 - 2025",
    shortDesc:
      "Volunteered as part of a student-led initiative to foster education in nearby villages, making a meaningful impact on the lives of underprivileged children. My contributions included:",
    bulletPoints: [
      "Taught 65+ underprivileged children, focusing on building curiosity and foundational knowledge",
      "Developed teamwork, leadership, and communication skills through collaborative teaching sessions",
      "Mentored students to help them discover their potential and develop a love for learning",
      "Organized and participated in educational activities to create an engaging learning environment",
    ],
  },
];

export const techStack = [
  // === LANGUAGES ===
  { name: "C++", icon: SiCplusplus, color: "text-blue-500", type: "Languages" },
  { name: "C#", icon: TbBrandCSharp, color: "text-purple-600", type: "Languages" },

  // === GAME ENGINE & 3D ===
  {
    name: "Unity Engine",
    icon: SiUnity,
    color: "text-gray-200",
    type: "Game Engine & 3D",
  },
  {
    name: "Blender",
    icon: SiBlender,
    color: "text-orange-500",
    type: "Game Engine & 3D",
  },

  // === TOOLS & PLATFORMS ===
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-500",
    type: "Tools & Platforms",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "text-gray-200",
    type: "Tools & Platforms",
  },
  {
    name: "Visual Studio",
    icon: TbBrandVisualStudio,
    color: "text-purple-500",
    type: "Tools & Platforms",
  },

  {
    name: "Godot",
    icon: SiGodotengine,
    color: "text-blue-400",
    type: "Tools & Platforms",
  },

  // === CONCEPTS ===
  {
    name: "OOP",
    icon: FiCode,
    color: "text-cyan-400",
    type: "Concepts",
  },
  {
    name: "Design Patterns",
    icon: FiCode,
    color: "text-green-400",
    type: "Concepts",
  },
  {
    name: "Collision Detection",
    icon: FiCode,
    color: "text-yellow-400",
    type: "Concepts",
  },
  {
    name: "UI System",
    icon: FiCode,
    color: "text-pink-400",
    type: "Concepts",
  },
  {
    name: "System Optimization",
    icon: FiCode,
    color: "text-red-400",
    type: "Concepts",
  },
];

export const projects = [
  {
    slug: "hungry-rabbit",
    title: "Hungry Rabbit",
    description:
      "Engineered a real-time interactive system with object detection, collision handling, and destruction logic.",
    image: "/images/projects/HungryRabbit.png",
    liveUrl: "https://nicheabyss.itch.io/hungry-rabbit",
    videoUrl: "https://www.youtube-nocookie.com/embed/SFmlMr5DylY?autoplay=1&mute=1&loop=1&playlist=SFmlMr5DylY",
    introduction:
      "Hungry Rabbit is a fast-paced arcade game that tests player reflexes and timing. This project focuses on real-time systems and smooth gameplay mechanics.",
    about:
      "Engineered a real-time interactive system with object detection, collision handling, and destruction logic. Designed a scoring progression system, simulating product-like feedback loops for user engagement.",
    projectInfo: {
      duration: "2 months",
      role: "Solo Developer",
      teamSize: "1",
      platform: "PC, WebGL",
    },
    whatILearned: [
      "Implemented efficient collision detection systems",
      "Developed real-time object spawning and destruction mechanics",
      "Created engaging scoring and progression systems",
      "Optimized performance for smooth gameplay",
      "Enhanced understanding of game feel and player feedback",
    ],
    gallery: [],
    techStack: techStack.filter((item) =>
      ["Unity Engine", "C#", "Collision Detection"].includes(item.name)
    ),
  },
  {
    slug: "hells-kitchen",
    title: "Hells Kitchen",
    description:
      "Built a resource management system with gameplay loop, emphasizing feature prototyping and iterative testing.",
    image: "/images/projects/KitchenChaos.png",
    liveUrl: "https://nicheabyss.itch.io/hells-kitchen",
    videoUrl: "https://www.youtube-nocookie.com/embed/WZ5-cg-O6AY?autoplay=1&mute=1&loop=1&playlist=WZ5-cg-O6AY",
    introduction:
      "Hells Kitchen is a resource management game that challenges players to balance multiple tasks and make strategic decisions under pressure.",
    about:
      "Built a resource management system with gameplay loop, emphasizing feature prototyping and iterative testing. Designed levels and interactions, demonstrating user experience-oriented development.",
    projectInfo: {
      duration: "2.5 months",
      role: "Solo Developer",
      teamSize: "1",
      platform: "PC, WebGL",
    },
    whatILearned: [
      "Designed and implemented resource management systems",
      "Created engaging gameplay loops with increasing difficulty",
      "Developed rapid prototyping skills for feature testing",
      "Enhanced level design and player progression",
      "Improved user experience through iterative testing",
    ],
    gallery: [],
    techStack: techStack.filter((item) =>
      ["Unity Engine", "C#", "OOP"].includes(item.name)
    ),
  },
  {
    slug: "midnight-crumbs",
    title: "Midnight Crumbs",
    description:
      "Designed player navigation system with collider-based obstacle detection and interactive mechanics.",
    image: "/images/projects/crumbs-in-the-dark.png",
    liveUrl: "https://nicheabyss.itch.io/crumbs-in-the-dark",
    videoUrl: "https://www.youtube-nocookie.com/embed/Sw0rg1s2XPM?autoplay=1&mute=1&loop=1&playlist=Sw0rg1s2XPM",
    introduction:
      "Midnight Crumbs is an exploratory game focusing on player navigation and interactive environmental mechanics.",
    about:
      "Designed player navigation system with collider-based obstacle detection. Prototyped a cauldron mechanic spawning cookies when interacted with. Focused on expanding knowledge of Unity's trigger interaction system.",
    projectInfo: {
      duration: "1.5 months",
      role: "Solo Developer",
      teamSize: "1",
      platform: "PC, WebGL",
    },
    whatILearned: [
      "Mastered Unity's collider and trigger systems",
      "Implemented player movement and navigation mechanics",
      "Created interactive environmental objects",
      "Developed spawning systems for dynamic gameplay",
      "Enhanced understanding of physics-based interactions",
    ],
    gallery: [],
    techStack: techStack.filter((item) =>
      ["Unity Engine", "C#", "Collision Detection", "UI System"].includes(item.name)
    ),
  },
];

export const setupSpecs = [
  {
    title: "RGB PC Build",
    subTitle:
      "Custom rig with 10C/16T, RTX 4060 and 32GB RAM for performance in dev & gaming.",
    icon: FiCpu,
  },
  {
    title: "Dual Monitor Setup",
    subTitle:
      "Lenovo 1080p + MSI 2K, 27” screens for perfect mix of clarity and productivity.",
    icon: FiMonitor,
  },
  {
    title: "Audio & Peripherals",
    subTitle:
      "Redragon speakers, Cosmic Byte keyboard & headphones, plus earbuds & neckband for Dolby audio and ANC.",
    icon: FiHeadphones,
  },
  {
    title: "Gaming Chair",
    subTitle:
      "Ergonomic comfort for long coding sessions and all-night builds.",
    icon: HiOutlineDesktopComputer,
  },
];

export const certifications = [
  {
    title: "Al Fluency: Framework & Foundations - Anthropic",
    image: "/images/certifications/ai-fluency.webp",
    url: "https://verify.skilljar.com/c/ekmscej8qr5j",
  },
  {
    title: "Subject Matter Expert - AWS",
    image: "/images/certifications/sme-aws.webp",
    url: "/images/certifications/sme-aws.webp",
  },
  {
    title: "Next.js - Vercel",
    image: "/images/certifications/vercel-next.webp",
    url: "https://nextjs.org/learn/certificate?course=dashboard-app&user=54220&certId=dashboard-app-54220-1746641465395",
  },
  {
    title: "Frontend Developer (React) - HackerRank",
    image: "/images/certifications/hacker-rank.webp",
    url: "https://www.hackerrank.com/certificates/0b0a9b79a4a1",
  },
  {
    title: "Fundamentals of AI and ML - AWS",
    image: "/images/certifications/ai-ml.webp",
    url: "/images/certifications/ai-ml.webp",
  },
  {
    title: "Model Context Protocol - Anthropic",
    image: "/images/certifications/mcp.webp",
    url: "https://verify.skilljar.com/c/9ecfwypeucvc",
  },
];

export const testimonials = [
  {
    name: "Vikshak P",
    company: "Edvolve",
    linkedIn: "https://www.linkedin.com/in/vikshak/",
    position: "Cofounder",
    avatar: "/images/testimonials/vikshak.webp",
    testimonial:
      "Abhishek worked with us and he was quite the problem solver. His ability to learn quickly and eagerness to learn new things was super helpful since we were a high velocity team and expected quick results. Would happily work with him again to develop good products, and recommend him to other employers looking for a fast learner in your team!",
  },
  {
    name: "Shwetank Singh",
    company: "Edvolve",
    linkedIn: "https://www.linkedin.com/in/singhshwetank/",
    position: "Technical Lead",
    avatar: "/images/testimonials/shwetank.webp",
    testimonial:
      "Abhishek is a hardworking, driven and dedicated person. He will be an asset wherever he goes.",
  },
];
