import Project1 from "../assets/ManisSecukupnya.png";
import Project2 from "../assets/todolist.webp";
import Project3 from "../assets/comingsoon.webp";

export const projectData = [
  {
    title: "ManisSecukupnya",
    image: Project1,
    description: "Educational website about sugar comsumption",
    details:
      "ManisSecukupnya is an educational website that encourages people to control their sugar intake for the sake of their health. The website features a BMI Calculator and BMI table to help users understand their body condition and maintain a healthy lifestyle.",
    tech: ["React", "CSS", "Vite",'emailjs'],
    demo: "https://manis-secukupnya.vercel.app/",
    github: "https://github.com/imcj23",
  },
  {
    title: "To-Do List App",
    image: Project2,
    description: "Task management app with CRUD features.",
    details:
      "This app allows users to add, edit, and delete tasks. Backend built with Express.js and Node.js.",
    tech: ["React", "Express", "Node.js"],
    demo: "-",
    github: "-",
  },
  {
    title: "Data Visualization Dashboard",
    image: Project3,
    description: "Interactive dashboard for data visualization.",
    details:
      "Dashboard to visualize datasets using charts, APIs, and responsive UI.",
    tech: ["React", "Chart.js", "API"],
    demo: "-",
    github: "-",
  },
];
