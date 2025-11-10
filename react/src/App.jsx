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

      <Saludo nombre="Yashi" />

      <div style={{padding: "20px", margin: "20px", fontSize: "13px"}}>
        <h1>Ejemplo de Componente Botón</h1>

        <Boton texto="Aceptar" color="green" onClick={manejarClick} />
        <Boton texto="Cancelar" color="red" onClick={() => alert("Cancelado")} />
      </div>

      <Footer />
      
    </>
  )
}

export default App
