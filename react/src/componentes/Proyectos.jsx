import "./componentes-css/Proyectos.css";

function Proyectos() {
  const proyectos = [
    { 
      nombre: "Portafolio Web", 
      descripcion: "Desarrollado con React y Tailwind CSS.", 
      enlace: "https://josemariana.github.io/html5_CSS3_Js/", 
      codigo: "https://github.com/josemariana/html5_CSS3_Js",
      tecnologias: ["React", "Tailwind", "CSS"]
    },
    { 
      nombre: "Juego", 
      descripcion: "Desarrollado con Java.", 
      enlace: "", 
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
                <a 
                  href={proyecto.enlace} 
                  className="link-demo"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span>👁️</span> Ver demo
                </a>
                <a 
                  href={proyecto.codigo} 
                  className="link-codigo"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
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