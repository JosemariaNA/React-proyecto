import "./componentes-css/Servicios.css";

function Servicios() {
  const servicios = [
    { 
      titulo: "Desarrollo Web", 
      descripcion: "Creación de sitios modernos y responsivos con React y Tailwind CSS.",
      icono: "🌐"
    },
    { 
      titulo: "Aplicaciones Java", 
      descripcion: "Desarrollo de programas con interfaz gráfica y conexión a base de datos.",
      icono: "☕"
    },
    { 
      titulo: "Mantenimiento Técnico", 
      descripcion: "Optimización y actualización de sistemas o páginas existentes.",
      icono: "🔧"
    },
  ];

  return (
    <section id="servicios" className="servicios">
      <div className="servicios-container">
        <h2 className="servicios-title">Servicios</h2>
        <p className="servicios-descripcion">
          Soluciones tecnológicas adaptadas a tus necesidades
        </p>

        <div className="servicios-grid">
          {servicios.map((servicio, index) => (
            <div key={index} className="servicio-card">
              <div className="servicio-icono">{servicio.icono}</div>
              <h3 className="servicio-titulo">{servicio.titulo}</h3>
              <p className="servicio-descripcion">{servicio.descripcion}</p>
              <div className="servicio-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicios;