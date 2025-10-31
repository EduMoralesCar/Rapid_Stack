
import { useState } from 'react';

export const Contador = () => {
  const [contar, setContar] = useState(0);

  const incrementar = () => {
    setContar(contar + 1);
  };

  const decrementar = () => {
    if (contar > 0) {
      setContar(contar - 1);
    }
    else {
      alert("El contador no puede ser menor a 0");
    }
  };

  const reiniciar = () => {
    setContar(0);
  };

  return (
    <div className="container now">
      <h2 className="text-dark">El contador es: {contar}</h2>
      <button className="btn btn-success mx-2" onClick={incrementar}>Incrementar</button>
      <button className="btn btn-warning mx-2" onClick={decrementar}>Decrementar</button>
      <button className="btn btn-danger mx-2" onClick={reiniciar}>Reiniciar</button>
    </div>
  );
};

export default Contador;