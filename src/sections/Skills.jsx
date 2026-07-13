/*function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-900 text-white flex items-center justify-center"
    >
      <h2 className="text-5xl font-bold">Skills</h2>
    </section>
  );
}

export default Skills;*/
const skills = [
  "React",
  "MongoDB",
  "Express.js",
  "Node.js",
  "HTML",
  "CSS",
  "Javascript",
  "MySQL",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Cybersecurity",
  "Generative AI",
  "Java",
  "C++"
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-black text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 hover:bg-cyan-500 hover:text-black transition duration-300 rounded-xl p-6 text-center font-semibold shadow-lg"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;