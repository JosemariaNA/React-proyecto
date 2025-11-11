import "./componentes-css/Testimonios.css";

function Testimonios() {
  const testimonios = [
    { 
      nombre: "Ana López", 
      texto: "Excelente desarrollador, responsable y con muy buena comunicación.",
      puesto: "CEO - TechStart",
      avatar: "👩‍💼"
    },
    { 
      nombre: "Carlos Ruiz", 
      texto: "Su trabajo en mi página web fue rápido y de alta calidad.",
      puesto: "Emprendedor",
      avatar: "👨‍💻"
    },
    { 
      nombre: "Laura García", 
      texto: "Destaca por su organización y compromiso en los proyectos.",
      puesto: "Marketing Manager",
      avatar: "👩‍🎨"
    },
  ];

  return (
    <section id="testimonios" className="testimonios">
      <div className="testimonios-container">
        <h2 className="testimonios-title">Testimonios</h2>
        <p className="testimonios-descripcion">
          Lo que dicen quienes han trabajado conmigo
        </p>

        <div className="testimonios-grid">
          {testimonios.map((testimonio, index) => (
            <div key={index} className="testimonio-card">
              <div className="comillas">"</div>
              <p className="testimonio-texto">{testimonio.texto}</p>
              <div className="testimonio-autor">
                <div className="autor-avatar">{testimonio.avatar}</div>
                <div className="autor-info">
                  <h3 className="autor-nombre">{testimonio.nombre}</h3>
                  <p className="autor-puesto">{testimonio.puesto}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonios;