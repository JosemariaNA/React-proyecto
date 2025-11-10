import "./componentes-css/Header.css";
import Logo from "../assets/imagenes/logo.jpeg";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          {/* Izquierda: logo + título "Portafolio" */}
          <div className="logo-section">
            <img src={Logo} alt="Logo" className="logo-img" />
            <h1 className="logo">Portafolio</h1>
          </div>

          {/* Derecha: nombre y detalle */}
          <div className="info-section">
            <span className="nombre">Josemaria Napan Aparcana</span>
            <span className="detalle">Estudiante Ing. Sistemas - UNDC</span>
          </div>
        </div>
      </header>

      <nav className="nav">
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
