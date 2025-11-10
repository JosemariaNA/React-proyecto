import "./componentes-css/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2025 Josemaria Napan Aparcana. Todos los derechos reservados.</p>
                <nav className="footer-nav">
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#proyectos">Proyectos</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
