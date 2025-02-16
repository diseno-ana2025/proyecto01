import React, { useState, useEffect } from "react";
import { db } from "./firebaseconfig";
import { collection, doc, updateDoc, onSnapshot } from "firebase/firestore";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom"; // Asegúrate de tener react-router-dom instalado

const RecentCard = () => {
  const [list, setList] = useState([]);
  const casasRef = collection(db, "casas");
  const history = useHistory(); // Usado para redirigir

  // Obtener datos de Firebase
  useEffect(() => {
    const unsubscribe = onSnapshot(casasRef, (snapshot) => {
      const casas = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(casas); // Verifica si los datos se recuperan correctamente
      setList(casas);
    });

    return () => unsubscribe();
  }, []);

  const handlePurchase = async (id, name, price) => {
    try {
      // Referencia al documento en Firestore
      const casaRef = doc(db, "casas", id);

      // Actualizar el campo "estado" a "Vendida"
      await updateDoc(casaRef, {
        estado: "Vendida",
      });

      // Mostrar alerta de éxito sin el botón "Ver detalles"
      Swal.fire({
        title: "¡Compra Exitosa!",
        text: `Has comprado la propiedad "${name}" por ${price}.`,
        icon: "success",
        footer: '<a href="/blog">Ir a Mis Compras</a>', // Enlace a la página de blog
        showCancelButton: true,
        cancelButtonText: "Cerrar",
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirigir a la página del blog con un parámetro de compra
          history.push("/blog?showPurchased=true"); // Redirige y pasa el parámetro
        }
      });
    } catch (error) {
      console.error("Error al actualizar estado en Firestore:", error);
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al procesar la compra.",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
    }
  };

  return (
    <div className="content grid3 mtop">
      {list.length === 0 ? (
        <p>No hay casas disponibles</p>
      ) : (
        list.map((val) => {
          const { id, cover, category, location, name, price, type, estado } = val;

          return (
            <div className="box shadow" key={id}>
              <div className="img">
                <img src={cover} alt={name} />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background: category === "En venta" ? "#25b5791a" : "#ff98001a",
                      color: category === "En renta" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                  <i className="fa fa-heart"></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className="fa fa-location-dot"></i> {location}
                </p>
                <p>
                  <strong>Estado:</strong> {estado || "Disponible"}
                </p>
              </div>
              <div className="button flex">
                <div>
                  <button
                    className="btn2"
                    onClick={() => handlePurchase(id, name, price)}
                    disabled={estado === "Vendida"}
                    style={{
                      backgroundColor: estado === "Vendida" ? "#ccc" : "#25b579",
                      cursor: estado === "Vendida" ? "not-allowed" : "pointer",
                    }}
                  >
                    {estado === "Vendida" ? "VENDIDA" : price}
                  </button>
                </div>
                <span>{type}</span>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default RecentCard;
