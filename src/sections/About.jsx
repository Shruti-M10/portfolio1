/*function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-900 text-white flex items-center justify-center"
    >
      <h2 className="text-5xl font-bold">About</h2>
    </section>
  );
}

export default About;

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-gray-950 text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src="/profile.png"
            alt="Profile"
            className="rounded-3xl shadow-2xl w-80 mx-auto"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">
            About Me
          </h2>

          <p className="text-gray-300 leading-8 text-lg">
            Hi, I'm <span className="text-cyan-400 font-semibold">Shruti Maslekar</span>,
            a final-year Information Technology student passionate about
            Full Stack Web Development. I enjoy building responsive,
            user-friendly web applications using the MERN Stack and continuously
            improving my development skills through real-world projects.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-8">

            <div>
              <h3 className="font-semibold">Education</h3>
              <p className="text-gray-400">
                B.Tech Information Technology
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-gray-400">
                Maharashtra, India
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Experience</h3>
              <p className="text-gray-400">
                Fresher
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Open To</h3>
              <p className="text-gray-400">
                Full Stack Developer Roles
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;*/

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-widest">
            Get To Know Me
          </p>

          <h2 className="text-5xl font-bold mt-3">
            About Me
          </h2>
        </div>

        <div className="bg-gray-900 rounded-3xl p-10 shadow-xl">

          <p className="text-gray-300 text-lg leading-9">
            Hello! I'm
            <span className="text-cyan-400 font-semibold">
              {" "}Shruti Maslekar
            </span>,
            a final-year Information Technology student with a passion for
            building modern, responsive, and user-friendly web applications.
            I enjoy turning ideas into real-world projects using the
            <span className="text-cyan-400 font-semibold"> MERN Stack</span>.
          </p>

          <p className="text-gray-400 text-lg leading-9 mt-6">
           I am passionate about Full Stack Web Development and enjoy building end-to-end web applications. Alongside web development, I have knowledge of Java, an interest in Generative AI applications, and I'm exploring cybersecurity concepts. I am open to opportunities where I can learn, contribute, and grow in these areas
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

            <div className="bg-gray-800 rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">4+</h3>
              <p className="text-gray-300 mt-2">Projects Completed</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">15+</h3>
              <p className="text-gray-300 mt-2">Technologies Learned</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">2026</h3>
              <p className="text-gray-300 mt-2">Graduation Year</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">100%</h3>
              <p className="text-gray-300 mt-2">Passion for Learning</p>
            </div>

          </div>

          <div className="mt-12 border-t border-gray-700 pt-8">

            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
              Quick Information
            </h3>

            <div className="grid md:grid-cols-2 gap-5 text-gray-300">

              <p><span className="font-semibold">🎓 Education:</span> B.Tech Information Technology</p>

              <p><span className="font-semibold">📍 Location:</span> Maharashtra, India</p>

              <p><span className="font-semibold">💼 Status:</span> Final Year Student</p>

              <p><span className="font-semibold">🎯 Looking For:</span> Software Developer & MERN Stack Roles</p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;