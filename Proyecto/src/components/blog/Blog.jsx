import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Back from "../common/Back";
import RecentCard from "../home/recent/RecentCard";
import "../home/recent/recent.css";
import img from "../images/about.jpg";
import { db } from "../home/recent/firebaseconfig";
import { collection, query, where, onSnapshot } from "firebase/firestore";

const Blog = () => {
  const [purchasedProperties, setPurchasedProperties] = useState([]);

  useEffect(() => {
    const casasRef = collection(db, "casas");

    // 🔴 Traer solo propiedades donde "estado" existe y es "Vendida"
    const q = query(casasRef);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const properties = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("🔥 Todas las propiedades recibidas desde Firebase:", properties);

      // 🔴 FILTRO FINAL: Solo las propiedades con estado "Vendida"
      const purchasedOnly = properties.filter((property) => property.estado && property.estado === "Vendida");

      console.log("✅ Propiedades que sí deberían mostrarse:", purchasedOnly);

      setPurchasedProperties(purchasedOnly);
    });

    return () => unsubscribe();
  }, []);

  return (
    <section className="blog-out mb">
      <Back name="Mis Compras" title="Blog Grid - Mis Compras" cover={img} />
      <div className="container recent">
        {purchasedProperties.length === 0 ? (
          <p>No has realizado ninguna compra.</p>
        ) : (
          purchasedProperties.map((property) => (
            <RecentCard key={property.id} property={property} />
          ))
        )}
      </div>
    </section>
  );
};

export default Blog;
