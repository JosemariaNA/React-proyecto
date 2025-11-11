import "./componentes-css/Proyectos.css";

function Proyectos() {
  const proyectos = [
    { 
      nombre: "Simulador de Examen", 
      descripcion: "App en Java con base de datos MySQL.", 
      enlace: "#", 
      codigo: "#",
      tecnologias: ["Java", "MySQL", "Swing"]
    },
    { 
      nombre: "Portafolio Web", 
      descripcion: "Desarrollado con React y Tailwind CSS.", 
      enlace: "#", 
      codigo: "#",
      tecnologias: ["React", "Tailwind", "CSS"]
    },
    { 
      nombre: "Juego", 
      descripcion: "Desarrollado con Java.", 
      enlace: "#", 
      codigo: "#",
      tecnologias: ["Java", "Swing"]
    },
    { 
      nombre: "Calculadora", 
      descripcion: "Desarrollado con Java.", 
      enlace: "#", 
      codigo: "#",
      tecnologias: ["Java", "Swing"]
    },
  ];

  return (
    <section id="proyectos" className="proyectos">
      <div className="proyectos-container">
        <h2 className="proyectos-title">Proyectos</h2>
        <div className="proyectos-grid">
          {proyectos.map((proyecto, index) => (
            <div key={index} className="proyecto-card">
              <h3 className="proyecto-nombre">{proyecto.nombre}</h3>
              <p className="proyecto-descripcion">{proyecto.descripcion}</p>
              
              <div className="tecnologias">
                {proyecto.tecnologias.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>

              <div className="proyecto-links">
                <a href={proyecto.enlace} className="link-demo">
                  <span>👁️</span> Ver demo
                </a>
                <a href={proyecto.codigo} className="link-codigo">
                  <span>💻</span> Código
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proyectos;