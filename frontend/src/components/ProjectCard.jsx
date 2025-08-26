// src/components/ProjectCard.jsx
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, tech, description, github }) => {
  return (
    <div className="bg-[#112240] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#64ffda]">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-teal-400 text-sm font-medium mb-3">Tech: {tech}</p>
      <p className="text-gray-300 text-sm leading-relaxed mb-4">{description}</p>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-grey-200 hover:text-white transition"
      >
        <FaGithub className="mr-2" /> GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
