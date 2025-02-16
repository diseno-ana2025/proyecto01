import React from "react";
import Heading from "../../common/Heading";
import { team } from "../../data/Data";
import "./team.css";

const Team = () => {
  const whatsappLink = "https://wa.me/50489229064?text=Hola,%20me%20interesa%20más%20información%20sobre%20la%20propiedad."; // Número de WhatsApp
  const phoneNumber = "50489229064"; // Número de teléfono para llamada con el código 504

  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading 
            title='Nuestros Agentes Inmobiliarios' 
            subtitle='Nuestros agentes inmobiliarios están comprometidos a brindarte un servicio personalizado y de calidad, ayudándote a encontrar la propiedad ideal que se ajuste a tus necesidades y presupuesto.' 
          />

          <div className='content mtop grid3'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa-solid fa-circle-check'></i>
                  </div>
                  <i className='fa fa-location-dot'></i>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>

                  <ul>
                    {val.icon.map((icon, index) => (
                      <li key={index}>{icon}</li>
                    ))}
                  </ul>
                  <div className='button flex'>
                    {/* Redirigir a WhatsApp al hacer clic */}
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <button>
                        <i className='fa fa-envelope'></i>
                        Mensaje
                      </button>
                    </a>
                    {/* Llamar automáticamente al número al hacer clic en el ícono */}
                    <a href={`tel:+${phoneNumber}`}>
                      <button className='btn4'>
                        <i className='fa fa-phone-alt'></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
