// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Agregar importación del almacenamiento

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBr6eo_poMjpWUUgAQ2cjO22OYDHvEwn58",
  authDomain: "analisisydise-430eb.firebaseapp.com",
  projectId: "analisisydise-430eb",
  storageBucket: "analisisydise-430eb.firebasestorage.app",
  messagingSenderId: "1040375319043",
  appId: "1:1040375319043:web:374552b5d3488eea2edc36",
  measurementId: "G-NJPN2KJLF8"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén una instancia de Firestore y Storage
const db = getFirestore(app);
const storage = getStorage(app); // Inicializa el almacenamiento

export { db, collection, addDoc, storage }; // Exportar el almacenamiento
