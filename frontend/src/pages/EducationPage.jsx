// src/pages/Education.jsx
import EducationCard from "../components/EducationCard";
import Header from "../components/Header";

const Education = () => {
  const educationData = [
    {
      title: "DLF Public School",
      duration: "Aug 2009 - May 2024 (Expected)",
    },
    {
      title: "SRMIST , Delhi NCR",
      subtitle: "Btech in Computer Science and Engineering",
      duration: "Aug 2024 - May 2028 (Expected)",
      gpa: "8.64 / 10.0",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen bg-[#0a192f] text-white flex flex-col items-center justify-center px-6 py-16"
    >
        <Header/>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-teal-400">
        Academic Background
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        {educationData.map((edu, index) => (
          <EducationCard key={index} {...edu} />
        ))}
      </div>
    </section>
  );
};

export default Education;
