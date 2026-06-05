import React from "react";
import { Link } from "react-router-dom";
import logoUnellez from "../assets/logo-UNELLEZ.png"; // Importamos tu imagen recién guardada

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      {/* Sección Izquierda: Logo + Nombre agrupados en la misma fila */}
      <Link to="/" style={styles.brand}>
        <img 
          src={logoUnellez} 
          alt="Logo UNELLEZ" 
          style={styles.logo} 
        />
        <span style={styles.title}>Universidata</span>
      </Link>

      {/* Sección Derecha: Enlace */}
      <div>
        <Link to="/" style={styles.link}>Inicio</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#003366", // Tu franja azul grande característica
    padding: "20px 40px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "15px", // Separa el logo del texto "Universidata" elegantemente
    textDecoration: "none"
  },
  logo: {
    height: "35px", // Tamaño ideal para que quepa dentro de tu franja azul sin estirarla
    width: "auto",
    objectFit: "contain"
  },
  title: {
    fontWeight: "700",
    fontSize: "26px",
    color: "#ffffff",
    letterSpacing: "-0.02em"
  },
  link: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#ffffff",
    textDecoration: "none",
    opacity: "0.9"
  }
};