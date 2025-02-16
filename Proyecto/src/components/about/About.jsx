import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='Sobre nosotros' title='Quienes Somos?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Nuestra Historia'  />

            <p>Nuestra misión es conectar a compradores y vendedores a través de plataformas digitales intuitivas, análisis de datos inteligentes y asesoramiento experto.</p>
            <p>Creemos que el futuro del sector inmobiliario está en la automatización, la transparencia y la accesibilidad, permitiendo a nuestros clientes tomar decisiones informadas con solo un clic.</p>
            
          </div>
          <div className='right row'>
            <img src='./empresa.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
