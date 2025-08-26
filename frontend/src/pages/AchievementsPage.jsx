// src/pages/CompetitiveProgramming.jsx
import { FaStar, FaChevronRight } from "react-icons/fa";
import Header from "../components/Header";

const AchievementsPage = () => {
  const cpProfiles = [

    {
      platform: "CodeChef",
      username: "soft_stork_10",
      image: "/public/CodeChef_Logo.svg.png",
      link: "https://www.codechef.com/users/soft_stork_10",
    },
    {
      platform: "LeetCode",
      username: "AkhshatSharma7",
      image:"/public/LeetCode_Logo_black_with_text.svg",
      link: "https://leetcode.com/u/AkshatSharma7/",
    },
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen bg-[#0a192f] text-white flex flex-col items-center justify-center px-6 py-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-teal-400">
        Problem-Solving Profiles
      </h2>
       <Header/>
      <div className="bg-[#112240] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#64ffda] max-w-3xl w-full">
        <ul className="space-y-4 text-gray-300 text-sm md:text-base">
          {cpProfiles.map((profile, index) => (
            <li key={index} className="flex items-center justify-between">
              <span className="flex items-center gap-3">
                 <img
                  src={profile.image}
                  alt={profile.platform}
                  className="w-6 h-6 object-contain"
                />
                <span className="font-semibold text-white">{profile.platform}</span>
                <span className="text-gray-400">({profile.username})</span>
              </span>
              <a
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#64ffda] hover:text-white transition"
              >
                View <FaChevronRight className="ml-1" />
              </a>
            </li>
          ))}
          <li><p>Solved 200+ Problems in Data Structures and Algorithms</p></li>
          <li><p>CodeChef Contest Rating of 1036(approx)</p></li>
          <li><p>LeetCode Contest Rating of 1411(approx)</p></li>
        </ul>
      </div>
    </section>
  );
};

export default AchievementsPage;
