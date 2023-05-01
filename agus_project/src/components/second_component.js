import React from 'react';


function second_Component() {
    const usuario = {nombre: "agustin", apellido: "darboure"}
    return (
    <h1>
        {usuario.apellido}, {usuario.nombre}
     </h1>
    );
  }
  
  export default second_Component;

