// App.js (o el componente principal de tu aplicación)
import React, { useEffect } from "react";
import { db, collection, addDoc } from "./firebase"; // Importa Firebase
 // Importa tu archivo de datos
console.log(list);
function App() {
  // Función para guardar la lista en Firestore
  const saveList = async () => {
    try {
      // Referencia a la colección "list" en Firestore
      const listCollectionRef = collection(db, "casas");

      // Itera sobre cada elemento de la lista y lo guarda en Firestore
      for (const item of list) {
        await addDoc(listCollectionRef, item);
      }

      console.log("Todos los datos de la lista se han guardado correctamente en Firestore.");
    } catch (error) {
      console.error("Error al guardar los datos de la lista: ", error);
    }
  };

  // Usa useEffect para ejecutar la función cuando el componente se monte
  useEffect(() => {
    saveList();
  }, []); // El array vacío [] asegura que solo se ejecute una vez al montar el componente

  return (
    <div>
      <h1>Bienvenido a mi aplicación</h1>
      <p>Los datos se están actualizando en Firestore...</p>
    </div>
  );
}

export default App;