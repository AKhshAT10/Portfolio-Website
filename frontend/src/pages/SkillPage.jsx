import SkillCard from "../components/SkillCard";


const SkillsPage = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#0a192f] text-white px-8 py-20"
    >   
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">
          My <span className="text-teal-400">Skill Arsenal</span>
        </h2>
        <div className="w-24 h-1 bg-teal-400 mx-auto mt-2 rounded"></div>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
        <SkillCard
          title="Languages & Databases"
          skills={[
            "C, C++ (Proficient)",
            "JavaScript (ES6+, React Basics , NodeJS , ExpressJS)",
            "HTML5, CSS3 (Sass/SCSS)",
            "NoSQL (MongoDB)",
            "Java(Familiar)",
          ]}
        />

        <SkillCard
          title="Concepts & Paradigms"
          skills={[
            "Advanced Data Structures & Algorithms",
            "Object-Oriented Programming (OOP)",
            "Distributed Systems Concepts",
            "RESTful API Design & Development",
            "Agile Methodologies",
            "Computer Networks & Security Basics",
          ]}
        />

        <SkillCard
          title="Tools & Technologies"
          skills={[
            "Git , GitHub",
            "VSCode , IntelliJ IDEA",
            "Render , Netlify",
          ]}
        />
      </div>
    </section>
  );
};

export default SkillsPage;
