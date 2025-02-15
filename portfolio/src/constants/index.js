import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,

  figma,
  docker,
  meta,
  postbank,
  pixels,
  carrent,
  jobit,
  python,
  tripguide,
  terraform,
  aws,
  dms,
  oracle,
  mysql,
  azure,
  Kubernetes,
  Google_Cloud,
  turing
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
];

const services = [
  {
    title: "DevOps Engineer",
    icon: web,
  },
  {
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "Prompt Engineer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "terraform",
    icon: terraform,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Kubernetes",
    icon: Kubernetes,
  },
  {
    name: "Google_Cloud",
    icon: Google_Cloud,
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
    name: "python",
    icon: python,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "oracle",
    icon: oracle,
  },
];

const experiences = [
  {
    title: "LLM Trainer",
    company_name: "Turing Enterprises",
    icon: turing,
    iconBg: "#383E56",
    date: "2024, Remote",
    points: [
      "Designed innovative and engaging prompts to improve language model performance and adaptability.",
      "I worked extensively with Reinforcement Learning with Human Feedback (RLHF), analyzing model outputs to identify inaccuracies and refine responses."
    ],
  },
  {
    title: "IT intern",
    company_name: "Postbank Kenya",
    icon: postbank,
    iconBg: "#383E56",
    date: "March 2024 - July 2024",
    points: [
      "Designed and implemented a robust reporting system capable of dynamically generating tables from JSON inputs. This system supports exporting data to custom PDF and Excel formats, along with automated scheduling for email reports.",
      "Contributed significantly to the restoration of a helpdesk software system, ensuring its functionality and reliability.",
    ],
  },
  {
    title: "Developer",
    company_name: "254 Pixels Marketing",
    icon: pixels,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Dec 2023, Remote",
    points: [
      "Contributed to the development of educational systems using various CMS technologies, aimed at creating customized solutions for multiple agencies. Implemented user-friendly interfaces and integrated functionalities tailored to specific educational needs.",
      "Designed and implemented WordPress-based e-commerce platforms for diverse clients, focusing on optimizing performance and scalability. Integrated payment gateways, customized themes, and plugins to deliver seamless shopping experiences.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Client referrals",
    icon: web,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Develop and maintain web applications for diverse clients using MERN Stack, Wordpress  and other related tech.",
    ],
  },
  
];


const projects = [
  {
    name: "Solana blockchain Wallet Analyzer",
    description:
      "An automated bot that analyzes a list of wallets and provides detailed insights into each wallet's activity, including the number of transactions, total balance, and recent transactions. Its goal is to calculate the PNL and win rate of a wallet to assess its suitability for copy trading.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Solana blockchain",
        color: "green-text-gradient",
      },
      {
        name: "Automation",
        color: "pink-text-gradient",
      },
    ],
    image: dms,
    source_code_link: "https://github.com/mongarerobert3/Analyzer-program.git",
  },
  {
    name: "Tours n Travel",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tech Spaces",
    description:
      "Web application that connects developers with tech spaces such as co-working spaces, meetups, hackathons, and conferences in their area. The application allows developers to search for tech spaces by location, technology, and event type, and also provides a chat feature for developers to communicate with each other.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fruity",
    description:
      "Fruity is a modern and user-friendly mobile application designed to make buying and selling fruits easier than ever before. With Fruity, users can browse through a wide variety of fresh and delicious fruits, place orders, and even start their own fruit-selling business hassle-free.",
    tags: [
      {
        name: "React-native",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
