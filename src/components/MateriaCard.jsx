function MateriaCard({ materia }) {
  return (
    <div className="materia-card">
      <h4>{materia.nombre}</h4>

      <p>
        <strong>Código:</strong> {materia.codigo}
      </p>

      <p>
        <strong>UC:</strong> {materia.uc}
      </p>

      <p>
        <strong>Prelación:</strong> {materia.prelacion}
      </p>

      <p>
        <strong>Descripción:</strong>
      </p>

      <p>{materia.descripcion}</p>

      <p>
        <strong>Objetivo:</strong>
      </p>

      <p>{materia.objetivo}</p>
    </div>
  );
}

export default MateriaCard;