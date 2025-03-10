import { useState, useCallback } from "react";
import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import data from "../../data/portfolio-data.json";
import Card from "../common/Card";
import SectionTitle from "../common/SectionTitle";
import "./Projects.css";

export default function Projects() {
  const webProjects = data.projectsweb;
  const generalProjects = data.projectsgeneral;
  const [indexWeb, setIndexWeb] = useState(0);
  const [indexGeneral, setIndexGeneral] = useState(0);

  const handleNavWeb = useCallback(
    (dir) => {
      setIndexWeb((prev) => (prev + dir + webProjects.length) % webProjects.length);
    },
    [webProjects.length]
  );

  const handleNavGeneral = useCallback(
    (dir) => {
      setIndexGeneral((prev) => (prev + dir + generalProjects.length) % generalProjects.length);
    },
    [generalProjects.length]
  );

  return (
    <div className="projects-section">
      <SectionTitle title="Mis Proyectos" />
      
      <div className="project-category">
        <div className="category-header">
          <h3 className="category-title">Desarrollo Web</h3>
          <div className="project-counter">
            {webProjects.map((_, idx) => (
              <span 
                key={idx} 
                className={`counter-dot ${idx === indexWeb ? 'active' : ''}`}
                onClick={() => setIndexWeb(idx)}
              />
            ))}
          </div>
        </div>
        <Card project={webProjects[indexWeb]} handleNav={handleNavWeb} />
      </div>
      
      <div className="project-category">
        <div className="category-header">
          <h3 className="category-title">Otros Proyectos</h3>
          <div className="project-counter">
            {generalProjects.map((_, idx) => (
              <span 
                key={idx} 
                className={`counter-dot ${idx === indexGeneral ? 'active' : ''}`}
                onClick={() => setIndexGeneral(idx)}
              />
            ))}
          </div>
        </div>
        <Card project={generalProjects[indexGeneral]} handleNav={handleNavGeneral} />
      </div>
    </div>
  );
}