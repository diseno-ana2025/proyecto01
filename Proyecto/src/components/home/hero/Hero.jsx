import React, { useState, useEffect } from "react";
import Heading from "../../common/Heading";
import "./hero.css";
import { db } from "../recent/firebaseconfig";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

const Hero = () => {
  const [list, setList] = useState([]); // Estado para almacenar las casas desde Firebase
  const [formData, setFormData] = useState({
    category: "",
    cover: "",
    location: "",
    name: "",
    price: "",
    type: "",
  });

  const casasRef = collection(db, "casas");

  // Obtener datos en tiempo real desde Firebase
  useEffect(() => {
    const unsubscribe = onSnapshot(casasRef, (snapshot) => {
      const casas = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setList(casas);
    });

    return () => unsubscribe();
  }, []);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Guardar en Firebase
  const handleSave = async () => {
    try {
      await addDoc(casasRef, formData);
      console.log("Casa guardada con éxito");
      // Limpiar el formulario después de guardar
      setFormData({
        category: "",
        cover: "",
        location: "",
        name: "",
        price: "",
        type: "",
      });
    } catch (error) {
      console.error("Error al guardar en Firestore:", error);
    }
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading title="Deseas comprar " subtitle="Somos tu solución" />

          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <div className="box">
              <span>Categoria</span>
              <input type="text" name="category" value={formData.category} onChange={handleChange} />
            </div>
            <div className="box">
              <span>Imagen</span>
              <input type="text" name="cover" value={formData.cover} onChange={handleChange} />
            </div>
            <div className="box">
              <span>Localización</span>
              <input type="text" name="location" value={formData.location} onChange={handleChange} />
            </div>
            <div className="box">
              <span>Nombre</span>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="box">
              <span>Precio</span>
              <input type="text" name="price" value={formData.price} onChange={handleChange} />
            </div>
            <div className="box">
              <span>Tipo</span>
              <input type="text" name="type" value={formData.type} onChange={handleChange} />
            </div>
            <div className="box">
              <h4>Vende tu casa</h4>
            </div>
            <button className="btn1" onClick={handleSave}>
              <i className="fa fa-shop"></i> Publicar
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
