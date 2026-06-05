function MateriaCard({ materia }) {
  return (
    <div>
      <h4>{materia.nombre}</h4>

      <p>
        <strong>Descripción:</strong>
      </p>

      <p>{materia.descripcion}</p>

      <p>
        <strong>Objetivo:</strong>
      </p>

      <p>{materia.objetivo}</p>

      <p>
        <strong>Competencias:</strong>
      </p>

      <ul>
        {materia.competencias?.map((competencia, index) => (
          <li key={index}>{competencia}</li>
        ))}
      </ul>
    </div>
  );
}

export default MateriaCard;