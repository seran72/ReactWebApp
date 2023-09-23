import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
 
  {
    id: "work",
    title: "Work Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const testimonies = [
  {
  },
  
  ];
const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Networking",
    icon: mobile,
  },
  {
    title: "DevOps Automation",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Application Engineer",
    company_name: "Embedded Works",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "IoT & telematics downstream data integration for real-time tracking and other use cases.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Data packet analysis for various communication protocols, such as Wi-Fi, Bluetooth Low Energy (BLE), CAN, and other relevant standards.",
    ],
  },
  {
    title: "Technical Support Engineer[DevOps]",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "Tier 3 onsite and remote IT support",
      "Python Automation",
      "Conducted site visits and IT rack refreshments.",
      "Created help sheets, and technical articles for systems at Tesla.",
    ],
  },
  {
    title: "Resident Advisor",
    company_name: "CSUS",
    icon: shopify,
    iconBg: "#383E56",
    points: [
      "Enforced College Living policies, promoting academic excellence, and safe space for students.",
      "Created, marketed, and led student centered hall programs for social, education, and diversity goals.",
    ],
  },
  {
    title: "Electronic Repair Technician",
    company_name: "Experimax",
    icon: meta,
    iconBg: "#E6DEDD",
    points: [
      "Customer support",
      "Diagnosed and resolved hardware software issues across range of devices including smartphones, tablets, wearables, computers and more.",
    ],
  },
];


const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects, testimonies};
