import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";

const ProjectPage = () => {
  const projectData = [
    {
      title: "MessyAge.Chat",
      tech: "ReactJS, ExpressJS, MongoDB, Socket.io, TailwindCSS",
      description:
        "Full-stack solution for peers to talk with each other , built with a clean and modern UI , implemented real-time chatting along with a secure SignUp/Login authentication system",
      github: "https://github.com/AKhshAT10/Messyage.chat",
    },
    {
      title: "DailyyTrackerr",
      tech: "C++, OOP, Advanced Data Structures",
      description:
        "A fullstack CRUD app to track your day to day activities , built with a clean UI and smooth features , showcasing a good understanding of basic create read update and delete operations",
      github: "https://github.com/AKhshAT10/DailyyTrackerr",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0a192f] text-white flex flex-col items-center justify-center px-6 py-16"
    >
        <Header/>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-teal-400">
        Noteworthy Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
