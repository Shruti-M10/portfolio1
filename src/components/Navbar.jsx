function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-cyan-400">
          Shruti.dev
        </h1>

        <ul className="flex gap-8">
          <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;