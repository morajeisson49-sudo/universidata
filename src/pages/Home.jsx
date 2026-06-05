import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/SemestreCard.css";
import "../styles/Carrera.css";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { obtenerCarreras } from "../services/carrerasService";

function Home() {
  const [busqueda, setBusqueda] = useState("");

  const carreras = obtenerCarreras();

  const carrerasFiltradas = carreras.filter((carrera) =>
    carrera.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="home-container">
        <h1 className="home-title">
          Universidata
        </h1>

        <div className="buscador-container">
  <div className="buscador-wrapper">
    <span className="buscador-icono">🔍</span>

    <input
      type="text"
      placeholder="Buscar carrera..."
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
      className="buscador"
    />
  </div>
</div>

        <div className="carreras-grid">
          {carrerasFiltradas.map((carrera) => (
            <Link
              key={carrera.id}
              to={`/${carrera.id}`}
              className="carrera-card"
            >
              <h3>{carrera.nombre}</h3>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;