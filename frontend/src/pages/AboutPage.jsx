import Header from '../components/Header.jsx';

const AboutPage = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0a192f] text-white flex items-center justify-center px-8 py-20"
    >
        <Header/>
      <div className="max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-teal-400">
            About <span className="text-teal-400">Me</span>
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            Hello! I'm Akhshat, a passionate software engineer currently pursuing my
            BTech in Computer Science. My core drive is to craft elegant and
            efficient solutions to complex challenges, whether it’s architecting
            robust software or diving deep into algorithmic problem-solving.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            My journey into tech has been marked by a strong affinity for
            problem-solving and building scalable applications. I’ve
            sharpened my analytical abilities and proficiency in data structures
            and algorithms through platforms like LeetCode and CodeChef.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Currently, I’m focused on full-stack development, problem-solving,
            and applying these skills into impactful real-world applications.
          </p>
        </div>

        {/* Right side - Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="\public\WhatsApp Image 2024-06-22 at 8.04.02 AM.jpeg" 
            alt="Akhshat Sharma"
            className="w-72 h-72 object-cover rounded-2xl shadow-lg border-2 border-teal-400"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
