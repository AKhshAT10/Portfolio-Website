import { Link } from "react-scroll";

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-12 py-4 bg-[#0a192f] shadow-md z-50">
      <h1 className="text-2xl font-bold text-teal-400">AS7</h1>
      <ul className="flex space-x-8 text-gray-500 font-medium">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-70} // keeps navbar from overlapping
            className="hover:text-teal-400 cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-70} className="hover:text-teal-400 cursor-pointer">
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} offset={-70} className="hover:text-teal-400 cursor-pointer">
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-70} className="hover:text-teal-400 cursor-pointer">
            Projects
          </Link>
        </li>
        <li>
          <Link to="education" smooth={true} duration={500} offset={-70} className="hover:text-teal-400 cursor-pointer">
            Education
          </Link>
        </li>
        <li>
          <Link to="achievements" smooth={true} duration={500} offset={-70} className="hover:text-teal-400 cursor-pointer">
            Profiles
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-70} className="hover:text-teal-400 cursor-pointer">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
