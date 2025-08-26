const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-12 py-4 bg-[#0a192f] shadow-md z-50">
      <h1 className="text-2xl font-bold text-cyan-400">AkhshatSharma</h1>
      <ul className="flex space-x-8 text-gray-300 font-medium">
        <li className="hover:text-cyan-400 cursor-pointer">Home</li>
        <li className="hover:text-cyan-400 cursor-pointer">About</li>
        <li className="hover:text-cyan-400 cursor-pointer">Skills</li>
        <li className="hover:text-cyan-400 cursor-pointer">Experience</li>
        <li className="hover:text-cyan-400 cursor-pointer">Projects</li>
        <li className="hover:text-cyan-400 cursor-pointer">Education</li>
        <li className="hover:text-cyan-400 cursor-pointer">Achievements</li>
        <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Header;
