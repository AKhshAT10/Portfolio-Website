// src/components/EducationCard.jsx
import { FaCalendarAlt, FaStar } from "react-icons/fa";

const EducationCard = ({ title, subtitle, duration, gpa}) => {
  return (
    <div className="bg-[#112240] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#64ffda]">
      <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-300 text-sm mb-3">{subtitle}</p>

      <div className="space-y-2 text-sm text-gray-300">
        {duration && (
          <p className="flex items-center">
            <FaCalendarAlt className="mr-2 text-[#64ffda]" /> {duration}
          </p>
        )}
        {gpa && (
          <p className="flex items-center">
            <FaStar className="mr-2 text-[#64ffda]" /> GPA: {gpa}
          </p>
        )}
      </div>
    </div>
  );
};

export default EducationCard;
