// src/components/Boton.jsx

function Boton({ texto, onClick, color = "blue" }) {
  const estilos = {
    backgroundColor: color,
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "0.2s",
    margin: "5px"
  };

  return (
    <button style={estilos} onClick={onClick}>
      {texto}
    </button>
  );
}

export default Boton;
