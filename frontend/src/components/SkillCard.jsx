const SkillCard = ({ title, skills }) => {
  return (
    <div className="bg-[#0f2239] rounded-2xl shadow-lg p-6 border-l-4 border-cyan-400 hover:shadow-cyan-400/30 transition">
      <h3 className="text-xl font-bold text-cyan-300 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-300">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="text-cyan-400">›</span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
