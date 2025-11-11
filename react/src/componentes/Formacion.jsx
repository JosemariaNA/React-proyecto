import "./componentes-css/Formacion.css";

function Formacion() {
  const estudios = [
    { 
      titulo: "Ingeniería de Sistemas", 
      lugar: "Universidad Nacional de Cañete", 
      anio: "2024 - Presente",
      icono: "🎓",
      estado: "En curso"
    },
    { 
      titulo: "Curso de React", 
      lugar: "Udemy", 
      anio: "2025",
      icono: "⚛️",
      estado: "Completado"
    },
    { 
      titulo: "Certificado en Java", 
      lugar: "Oracle Academy", 
      anio: "2024",
      icono: "☕",
      estado: "Completado"
    },
  ];

  return (
    <section id="formacion" className="formacion">
      <div className="formacion-container">
        <h2 className="formacion-title">Formación Académica</h2>
        <p className="formacion-descripcion">
          Mi trayectoria educativa y certificaciones
        </p>

        <div className="timeline">
          {estudios.map((estudio, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">{estudio.icono}</div>
              <div className="timeline-content">
                <div className="timeline-badge">{estudio.estado}</div>
                <h3 className="timeline-titulo">{estudio.titulo}</h3>
                <p className="timeline-lugar">{estudio.lugar}</p>
                <p className="timeline-anio">{estudio.anio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Formacion;