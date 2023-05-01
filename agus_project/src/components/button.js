import React from 'react';


function Button({text="botoncito"}) {
    console.log(text);
    return (
    <div>
    <button>
        soy un boton {text}
    </button>
    </div>
    )
  }
  
  export default Button;

