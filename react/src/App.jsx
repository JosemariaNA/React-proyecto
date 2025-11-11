import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './componentes/Saludo'
import Boton from './componentes/Boton'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import Hero from './componentes/Hero'
import SobreMi from './componentes/SobreMi'
import Proyectos from './componentes/Proyectos'
import Servicios from './componentes/Servicios'
import Testimonios from './componentes/Testimonios'
import Contacto from './componentes/Contacto'
import CV from './componentes/CV'
import Formacion from './componentes/Formacion'

function App() {
  const [count, setCount] = useState(0)

  const manejarClick = () => {
    alert("¡Hiciste clic en el botón!");
  };

  return (
    <>
      <Header />

      <Hero />

      <SobreMi />

      <Proyectos />

      <Servicios />

      <Testimonios />

      <Contacto />

      <CV />

      <Formacion />

      <Footer />
      
    </>
  )
}

export default App
