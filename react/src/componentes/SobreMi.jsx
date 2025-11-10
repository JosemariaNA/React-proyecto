import "./componentes-css/SobreMi.css";
import miFoto from "../assets/imagenes/avatar.jpg";

function SobreMi() {
  const skills = [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Java", level: 70 },
    { name: "Node.js", level: 60 },
    { name: "Bases de datos (SQL / MySQL)", level: 65 },
    { name: "Git / GitHub", level: 80 },
  ];

  return (
    <section className="sobre-mi" aria-labelledby="sobre-mi-title">
      <div className="sobre-mi-header">
        <img
          src={miFoto}
          alt="Avatar de Yashi"
          className="avatar"
        />
        <div>
          <h2 id="sobre-mi-title" className="title">
            Sobre mí
          </h2>
          <p className="subtitle">
            Estudiante de Ingeniería de Sistemas — Universidad Nacional de Cañete
          </p>
        </div>
      </div>

      <div className="grid">
        <div className="col">
          <p className="paragraph">
            Soy estudiante de la carrera profesional de Ingeniería de Sistemas en la Universidad Nacional de Cañete, orientado al desarrollo web. Me apasiona construir experiencias de usuario claras y accesibles. Actualmente enfoco mi aprendizaje en front-end con HTML, CSS y JavaScript, y en frameworks modernos como React. También tengo conocimientos básicos en back-end con Node.js y manejo de bases de datos.
          </p>

          <p className="paragraph">
            Busco oportunidades para participar en proyectos reales donde pueda aplicar buenas prácticas, mejorar mi código y colaborar en equipos. Me interesa el desarrollo web completo (full‑stack) y seguir especializándome en interfaces reactivas y rendimiento.
          </p>

          <p className="paragraph">
            Estoy en constante aprendizaje y busco mejorar mis habilidades a través de la práctica y la colaboración en proyectos.
          </p>

          <p className="paragraph">
            Fuera del desarrollo web, disfruto aprender sobre nuevas tecnologías, contribuir a proyectos de código abierto y explorar temas relacionados con la experiencia de usuario y la accesibilidad digital.
          </p>

          <div className="objetivo">
            <strong>Objetivo:</strong> Convertirme en un profesional en desarrollo web capaz de diseñar y desarrollar aplicaciones modernas, accesibles y mantenibles.
          </div>

          <div className="objetivo">
            <strong>Intereses:</strong> Desarrollo web, experiencia de usuario (UX), accesibilidad, tecnologías front-end, aprendizaje continuo.
          </div>

        </div>

        <div className="col">
          <h3 className="section-title">Habilidades</h3>
          <div className="skills-container">
            {skills.map((skill) => (
              <div key={skill.name} className="skill">
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="bar-bg" aria-hidden="true">
                  <div className="bar" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>

          <h4 className="subsection-title">Contacto</h4>
          <div className="contact">
            <div className="chip">📧 correo@gmail.com</div>
            <div className="chip">
              <a href="https://www.linkedin.com/in/josemaría-napan-aparcana-a446a7332" 
                target="_blank" 
                rel="noopener noreferrer">
                  🔗 linkedin.com/in/josemaría-napan-aparcana
              </a>
            </div>
            <div className="chip">
              <a href="https://github.com/JosemariaNA"
                target="_blank" 
                rel="noopener noreferrer">
                  💻 GitHub: JosemariaNA
              </a>
            </div>
          </div>

          <h4 className="subsection-title">Proyectos representativos</h4>
          <ul className="projects-list">
            <li>Portafolio personal con React y rutas dinámicas.</li>
            <li>Pequeñas APIs con Node.js y Express.</li>
            <li>Interfaces responsivas y accesibles usando CSS moderno.</li>
            <li>Juego "Pong" con el lenguaje Java</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;