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
            <p>
              <strong>Duración:</strong> {carrera.duracion}
            </p>

            <p>
              <strong>Título:</strong> {carrera.titulo}
            </p>

            {carrera.creditos && (
              <p>
                <strong>Créditos:</strong> {carrera.creditos}
              </p>
            )}

            {carrera.subproyectos && (
              <p>
                <strong>Subproyectos:</strong> {carrera.subproyectos}
              </p>
            )}

            {carrera.horasTotales && (
              <p>
                <strong>Horas Totales:</strong> {carrera.horasTotales}
              </p>
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