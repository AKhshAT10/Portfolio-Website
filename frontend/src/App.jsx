import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillPage from "./pages/SkillPage";
import ProjectPage from "./pages/ProjectPage";
import EducationPage from "./pages/EducationPage";
import AchievementsPage from "./pages/AchievementsPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      {/* Navbar always on top */}
      <Header />

      {/* Sections (must have IDs inside each file) */}
      <section id="home">
        <HomePage />
      </section>

      <section id="about">
        <AboutPage />
      </section>

      <section id="skills">
        <SkillPage />
      </section>

      <section id="projects">
        <ProjectPage />
      </section>

      <section id="education">
        <EducationPage />
      </section>

      <section id="achievements">
        <AchievementsPage />
      </section>

      <section id="contact">
        <ContactPage />
      </section>
    </>
  );
}

export default App;
