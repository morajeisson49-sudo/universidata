import { useParams } from "react-router-dom";
import SemestreCard from "../components/SemestreCard";
import Navbar from "../components/Navbar";
import NotFound from "./NotFound";
import { obtenerCarreraPorId } from "../services/carrerasService";
import "../styles/Carrera.css";

function Carrera() {
  const { id } = useParams();

  const carrera = obtenerCarreraPorId(id);

  if (!carrera) {
    return <NotFound />;
  }

  return (
    <>
      <Navbar />

      <div className="carrera-container">
        <header className="carrera-header">
          <h1>{carrera.nombre}</h1>


         <div className="carrera-meta">

  <div className="meta-card">
    <span className="meta-label">Duración</span>
    <h3>{carrera.duracion}</h3>
  </div>

  <div className="meta-card">
    <span className="meta-label">Título</span>
    <h3>{carrera.titulo}</h3>
  </div>

  {carrera.creditos && (
    <div className="meta-card">
      <span className="meta-label">Créditos</span>
      <h3>{carrera.creditos}</h3>
    </div>
  )}

  {carrera.subproyectos && (
    <div className="meta-card">
      <span className="meta-label">Subproyectos</span>
      <h3>{carrera.subproyectos}</h3>
    </div>
  )}

  {carrera.horasTotales && (
    <div className="meta-card">
      <span className="meta-label">Horas Totales</span>
      <h3>{carrera.horasTotales}</h3>
    </div>
  )}

</div>

          <p className="carrera-descripcion">
            {carrera.descripcion}
          </p>
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