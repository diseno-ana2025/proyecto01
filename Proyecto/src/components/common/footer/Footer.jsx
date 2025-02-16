import React from "react";
import { Link } from "react-router-dom";
import { footer } from "../../data/Data";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Necesitas Ayuda?</h1>
              <p>Escríbenos, con gusto te ayudaremos.</p>
            </div>
            <Link to="/contact">
              <button className="btn5">Contáctanos</button>
            </Link>
          </div>
        </div>
      </section>

      <div className="legal">
        <span>© 2025 RentUP. Diseñado por Alejandro, Cristina y Jatniel.</span>
      </div>
    </>
  );
};

export default Footer;
