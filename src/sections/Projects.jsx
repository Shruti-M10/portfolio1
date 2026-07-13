/*function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-950 text-white flex items-center justify-center"
    >
      <h2 className="text-5xl font-bold">Projects</h2>
    </section>
  );
}

export default Projects;*/
const projects = [
  {
    title: "Student Notes Manager",
    tech: "MERN Stack",
    description:
      "A full-stack notes management application with CRUD functionality.",
        github: "https://github.com/Shruti-M10/student-notes-manager",
  },
  {
    title: "Employee Payroll System",
    tech: "PHP • MySQL",
    description:
      "Payroll management system for managing employee salaries and records.",
  },
  {
    title: "Disaster Preparedness System",
    tech: "PHP • MySQL",
    description:
      "Educational platform providing disaster awareness and safety resources.",
  },
  {
    title: "Portfolio Website",
    tech: "React • Tailwind",
    description:
      "Personal portfolio showcasing projects, skills, and achievements.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gray-950 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-center text-4xl font-bold text-cyan-400 mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition"
            >
              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-cyan-400 mb-4">
                {project.tech}
              </p>

              <p className="text-gray-300 mb-6">
                {project.description}
              </p>

              <div className="flex gap-4">

                <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg text-black font-semibold transition"
>
  GitHub
</a>
               

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;