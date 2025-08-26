import { FaGithub, FaLinkedin } from "react-icons/fa";
import Header from '../components/Header.jsx';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="max-w-3xl text-center mx-auto pt-48 px-4">
        <p className="text-lg text-cyan-400">Hi, my name is</p>
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-2">
          Akhshat Sharma
        </h1>
        <h2 className="text-2xl text-gray-300 font-semibold mt-4">
          I build things for the web & beyond.
        </h2>
        <p className="text-gray-400 mt-4 leading-relaxed">
          I'm a software engineer specializing in creating efficient, scalable
          solutions and intuitive user experiences. Currently focused on
          problem-solving and full-stack development.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition"
          >
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition"
          >
            <FaGithub size={24} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
