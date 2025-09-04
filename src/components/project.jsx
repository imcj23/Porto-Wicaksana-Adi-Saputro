import { useState } from "react";
import ProjectModal from "./modal/project";
import '../App.css'

export default function LandingPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Website portfolio dengan React & Tailwind.",
      detail:
        "Project ini adalah portfolio pribadi yang dibangun menggunakan React, Vite, dan TailwindCSS. Fitur: responsive design, animasi, dan integrasi email.",
    },
    {
      id: 2,
      title: "To-Do List App",
      description: "Aplikasi To-Do dengan React & Express.",
      detail:
        "Aplikasi To-Do List full-stack menggunakan React di frontend dan ExpressJS di backend. Fitur: CRUD task, filter, dan autentikasi user.",
    },
    {
      id: 3,
      title: "Data Dashboard",
      description: "Dashboard interaktif untuk visualisasi data.",
      detail:
        "Dashboard interaktif menggunakan Streamlit & Plotly, menampilkan visualisasi data real-time. Fitur: grafik, filter data, dan export report.",
    },
  ];

  return (
    <section
      id="projects"
      className="h-[500px] flex flex-col justify-center items-center bg-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <h2 className="text-project text-3xl font-bold text-center">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-200 h-36 rounded-2xl shadow-lg p-6 hover:shadow-xl transition flex flex-col items-center justify-center text-center"
            >
              <div className="">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
              <button
                onClick={() => setSelectedProject(project)}
                className="mt-4 h-[32px] w-[64px] bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
              >
                Detail
              </button>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
}
