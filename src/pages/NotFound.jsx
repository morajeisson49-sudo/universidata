import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <>
      <Navbar />
      <div className="not-found-container">
        <h1 className="not-found-code">404</h1>
        <h2>Carrera No Encontrada</h2>
        <p className="not-found-text">
          Lo sentimos, la carrera que estás buscando no está registrada en nuestro sistema académico actualmente.
        </p>
        <Link to="/" className="back-home-btn">
          Volver al Inicio
        </Link>
      </div>
    </>
  );
}

export default NotFound;