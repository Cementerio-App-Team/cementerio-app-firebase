import { Link } from "react-router-dom";
import logoCementerio from "../assets/img/logoCementerio.png";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-wrapper">
      <img src={logoCementerio} alt="Logo CementerioApp" className="logo" />

      <h1 className="title">Bienvenido a <strong>CementerioApp</strong></h1>

      <p className="subtitle">
        Inicia sesión o crea una cuenta para comenzar.
      </p>

      <div className="actions">
        <Link to="/login" className="btn primary">Iniciar sesión</Link>
        <Link to="/register" className="btn secondary">Registrarse</Link>
      </div>
    </div>
  );
};

export default LandingPage;
