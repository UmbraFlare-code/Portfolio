import AboutMe from "../AboutMe/AboutMe";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import "./About.css";

export default function About() {
  return (
    <section className="about-section">
      <div id="about">
        <AboutMe />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="education">
        <Education />
      </div>
    </section>
  );
}