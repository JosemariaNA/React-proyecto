import "./componentes-css/Contacto.css";

function Contacto() {
  return (
    <section id="contacto" className="contacto">
      <div className="contacto-container">
        <h2 className="contacto-title">Contacto</h2>
        <p className="contacto-descripcion">
          ¿Tienes algún proyecto en mente o quieres colaborar? 
          <br />
          ¡No dudes en contactarme!
        </p>

        <div className="contacto-info">
          <a href="mailto:napanjosemaria@gmail.com" className="contacto-email">
            <span className="email-icon">📧</span>
            <span className="email-text">napanjosemaria@gmail.com</span>
          </a>
        </div>

        <div className="redes-sociales">
          <a href="https://github.com/JosemariaNA" className="red-social">
            <span className="red-nombre">GitHub</span>
            <span className="red-emoji">💻</span>
          </a>
          <a href="https://www.linkedin.com/in/josemaría-napan-aparcana-a446a7332" className="red-social">
            <span className="red-nombre">LinkedIn</span>
            <span className="red-emoji">🔗</span>
          </a>
          <a href="#" className="red-social">
            <span className="red-nombre">Twitter</span>
            <span className="red-emoji">🐦</span>
          </a>
        </div>

        <p className="contacto-footer">
          Disponible para freelance y oportunidades laborales
        </p>
      </div>
    </section>
  );
}

export default Contacto;