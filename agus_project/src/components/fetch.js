// import React, { useState, useEffect } from 'react';


// async function fetchData() {
//     const response = await fetch('https://dog.ceo/api/breeds/image/random');
//     const data = await response.json();
//     return data;
//   }
  
//   function MyComponent() {
//     const [data, setData] = useState(null);
  
//     useEffect(() => {
//       fetchData().then(data => setData(data));
//     }, []);
  
//     if (!data) {
//       return <div>Loading...</div>;
//     }
  
//     return <div>{data}</div>;
//   }

// export default MyComponent;

import { useEffect, useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((dog) => {
        setImageUrl(dog.message);
        setIsLoading(false);
      });
  }, []);

  const fetchRandomDog = () => { /* ⬅️ función para obtener un perrito aleatorio */
    setIsLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((dog) => {
        setImageUrl(dog.message);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <img src={imageUrl} alt="Imagen de perrito aleatoria" />
      <button onClick={fetchRandomDog}> {/* ⬅️ llamarla cuando hagamos clic */} <br></br>
        ¡Otro!{" "}
        <span role="img" aria-label="corazón">
          ❤️
        </span>
      </button>
    </div>
  );
}