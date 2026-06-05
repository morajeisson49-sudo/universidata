import { useParams } from "react-router-dom";
import SemestreCard from "../components/SemestreCard";
import Navbar from "../components/Navbar";
import NotFound from "./NotFound"; // <-- 1. Importamos la nueva página
import { obtenerCarreraPorId } from "../services/carrerasService"; // (O como se llame tu servicio unificado)
import "../styles/Carrera.css";

function Carrera() {
  const { id } = useParams();
  
  // Aquí obtienes la carrera con el ID de la URL
  const carrera = obtenerCarreraPorId(id); 

  // 2. Si la carrera no existe en tu JSON/Servicio, mostramos la página 404
  if (!carrera) {
    return <NotFound />;
  }

  // 3. Si sí existe, se renderiza todo el contenido normal
  return (
    <>
      <Navbar />
      <div className="carrera-container">
        <header className="carrera-header">
          <h1>{carrera.nombre}</h1>
          <div className="carrera-meta">
            <p><strong>Duración:</strong> {carrera.duracion}</p>
            <p><strong>Título:</strong> {carrera.titulo}</p>
          </div>
          <p className="carrera-descripcion">{carrera.descripcion}</p>
        </header>

        <h2>Estructura Curricular por Semestres</h2>

        <div className="semestres-list">
          {carrera.semestres?.map((semestre) => (
            <SemestreCard
              key={semestre.numero}
              semestre={semestre}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Carrera;