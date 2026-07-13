import { useEffect, useState } from "react";
import profile from "../assets/images/profile.jpeg";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";


function Hero() {
  const name = "Shruti Maslekar";
  const role = "Full Stack Developer";

  const [typedName, setTypedName] = useState("");
  const [typedRole, setTypedRole] = useState("");

  // Typing Name
  useEffect(() => {
    let i = 0;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setTypedName(name.slice(0, i + 1));
        i++;

        if (i === name.length) {
          clearInterval(interval);

          // Start typing role
          let j = 0;

          const roleInterval = setInterval(() => {
            setTypedRole(role.slice(0, j + 1));
            j++;

            if (j === role.length) {
              clearInterval(roleInterval);
            }
          }, 80);
        }
      }, 180);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-10 w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl mb-4"
          >
            👋 Hi, I'm
          </motion.p>

          <h1 className="text-6xl font-bold text-cyan-400">
            {typedName}
            <span className="animate-pulse">|</span>
          </h1>

          <h2 className="text-3xl mt-6 text-gray-300 h-10">
            {typedRole}
          </h2>

          <p className="mt-8 text-gray-400 leading-8 max-w-xl">
            Passionate Full Stack Developer who enjoys building
            scalable web applications using the MERN Stack.
            I love solving real-world problems through clean,
            responsive and user-friendly software.
          </p>

          <div className="flex gap-4 mt-10">

            <button
  onClick={() =>
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth",
    })
  }
  className="bg-cyan-500 hover:bg-cyan-600 px-7 py-3 rounded-lg transition"
>
  View Projects
</button>

            <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="border border-cyan-400 px-7 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition">
    Resume
  </button>
</a>

          </div>

          <div className="flex gap-6 text-3xl mt-10">

            <a
    href="https://github.com/Shruti-M10"
    target="_blank"
    rel="noopener noreferrer"
  >

            <FaGithub className="hover:text-cyan-400 cursor-pointer transition" /></a>

             <a
    href="https://www.linkedin.com/in/shruti-maslekar-4aa499325"
    target="_blank"
    rel="noopener noreferrer"
  >
            <FaLinkedin className="hover:text-cyan-400 cursor-pointer transition" /></a>

            <a href="mailto:shrutimaslekar10@gmail.com">
    
  
            <FaEnvelope className="hover:text-cyan-400 cursor-pointer transition" /></a>

          </div>

        </div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, scale: .7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
  src={profile}
  alt="Shruti"
  className="w-80 h-80 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
/>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;