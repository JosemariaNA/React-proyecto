import "./componentes-css/CV.css";

function CV() {
  return (
    <section id="cv" className="cv">
      <div className="cv-container">
        <h2 className="cv-title">Currículum</h2>
        <p className="cv-descripcion">
          Descarga mi CV para conocer más sobre mi experiencia, 
          habilidades y proyectos realizados.
        </p>

        <div className="cv-buttons">
          <a href="/documentos/cv.pdf" download className="btn-descargar">
            <span className="btn-icon">📥</span>
            <span className="btn-text">Descargar CV</span>
          </a>
          <a href="/documentos/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn-ver">
            <span className="btn-icon">👁️</span>
            <span className="btn-text">Ver CV</span>
          </a>
        </div>

        <div className="cv-info">
          <div className="info-item">
            <span className="info-icon">📄</span>
            <span className="info-text">Formato PDF</span>
          </div>
          <div className="info-item">
            <span className="info-icon">⚡</span>
            <span className="info-text">Actualizado 2024</span>
          </div>
          <div className="info-item">
            <span className="info-icon">🌐</span>
            <span className="info-text">Español</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CV;