import MateriaCard from "./MateriaCard";
import "../styles/SemestreCard.css";

function SemestreCard({ semestre }) {
  return (
    <div className="semestre-card">
      <h2>{semestre.nombre || `Semestre ${semestre.numero}`}</h2>

      <p>{semestre.resumen}</p>

      <p>
        <strong>Propósito:</strong>
      </p>

      <p>{semestre.proposito}</p>

      <h4>Materias</h4>

      {semestre.materias.map((materia) => (
        <MateriaCard
          key={materia.nombre}
          materia={materia}
        />
      ))}
    </div>
  );
}

export default SemestreCard;