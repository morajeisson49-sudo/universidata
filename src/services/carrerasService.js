// 1. Las importaciones siempre van arriba del todo
import produccionAnimalData from "../data/produccion-animal.json";
import educacionFisica from "../data/educacion_fisica.json";
import contaduriaData from "../data/contaduria.json";
import derechoData from "../data/derecho.json";
import informaticaData from "../data/informatica.json";
import educacionArtesData from "../data/educacion-artes.json";

// 2. El objeto con los datos DEBE estar declarado AQUÍ, antes de usarlo en las funciones
const carrerasDatos = {
  informatica: informaticaData,
  derecho: derechoData,
  contaduria: contaduriaData,
   ["educacion-fisica"]: educacionFisica,
 ["produccion-animal"]: produccionAnimalData,
 ["educacion-artes"]: educacionArtesData
};

// 3. Las funciones van al final para que puedan leer correctamente a 'carrerasDatos'
export function obtenerCarreras() {
  return [
    {
      id: "informatica",
      nombre: "Ingeniería en Informática",
      descripcion: "Formación de profesionales en desarrollo de software, redes, inteligencia artificial y gestión tecnológica.",
    },
    {
      id: "derecho",
      nombre: "Derecho",
      descripcion: "Estudio del ordenamiento jurídico, litigio, jurisprudencia y defensoría legal corporativa e institucional.",
    },
    {
      id: "contaduria",
      nombre: "Licenciatura en Contaduría Pública",
      descripcion: "Gestión financiera estratégica, auditoría internacional, tributación e interpretación de la información contable.",
    },
    {
      id: "educacion-fisica",
      nombre: "Licenciatura en Educación Física, Deporte y Recreación",
      descripcion: "Formación de profesionales en pedagogía de la actividad física, entrenamiento deportivo de alto rendimiento y gestión recreativa.",
    },
    {
      id: "produccion-animal",
      nombre: "Ingeniería en Producción Animal",
      descripcion: "Optimización de sistemas de explotación pecuaria, mejoramiento genético, nutrición animal y gestión agroindustrial sostenible.",
    },
  {
  id: "educacion-artes",
  nombre: "Licenciatura en Educación Mención Artes",
  descripcion: "Formación de profesionales en pedagogía artística, gestión cultural, expresión visual y desarrollo de proyectos educativos y culturales."
}
  ];
}

export function obtenerCarreraPorId(id) {
  // Ahora cuando esta función se ejecute, 'carrerasDatos' ya existirá perfectamente
  const datosCompletos = carrerasDatos[id];

  if (!datosCompletos) {
    const listaGeneral = obtenerCarreras();
    const infoBasica = listaGeneral.find((c) => c.id === id);

    if (infoBasica) {
      return {
        ...infoBasica,
        duracion: "Por definir",
        titulo: "Por definir",
        semestres: []
      };
    }
    
    return null;
  }

  return datosCompletos;
}