import naptah from "../assets/images/naptah.png";
import blog from "../assets/images/blog.png";
import moda from "../assets/images/moda.png";
import { GithubIcon, Scaling } from "lucide-react";

export const data = [
  {
    id: 1,
    src: naptah,
    name: "Naptah",
    description:
      "Naptah Community is an interactive platform within the Naptah system that connects farmers and agriculture enthusiasts to share knowledge, discuss plant health issues, and exchange solutions. It supports collaboration and smart farming practices through AI-powered plant disease detection and community engagement",
    items: ["React", "tailwind", "I18N"],
    icons: [
      {
        name: GithubIcon,
        src: "https://github.com/Ahmed2300/Naptah_System_web",
      },
      { name: Scaling, src: "https://naptah.netlify.app/" },
    ],
  },
  {
    id: 2,
    src: blog,
    name: "Blog",
    description:
      "Blog App is a dynamic web application that allows users to create, edit, and manage blog posts easily. It features user-friendly interfaces, structured content management, and responsive design to ensure a smooth reading and writing experience across all devices",
    items: ["React", "tailwind", "yup"],
    icons: [
      { name: GithubIcon, src: "https://github.com/NehalHamada/Blog-app" },
      { name: Scaling, src: "https://blog-app-lake-delta.vercel.app/" },
    ],
  },
  {
    id: 3,
    src: moda,
    name: "Moda Wear",
    description:
      "Moda Wear is a modern fashion e-commerce website that showcases trendy clothing collections with a clean and responsive design. The platform allows users to browse products, view detailed information, and enjoy a smooth shopping experience across all devices",
    items: ["Next", "tailwind"],
    icons: [
      { name: GithubIcon, src: "https://github.com/NehalHamada/moda-wear" },
      { name: Scaling, src: "https://moda-wear-wfdm.vercel.app/" },
    ],
  },
];

export const colors = [
  "bg-[#9810FA] text-white",
  "bg-[#155DFC] text-white",
  "bg-[#4F39F6] text-white",
];
