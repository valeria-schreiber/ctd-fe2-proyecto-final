import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
// import styles from "./styles.module.css";  
import { BioContainer, Boton, ContenedorBotones, Descripcion, Imagen, Nombre } from "./Styled";

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);
   
 
  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <Boton
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
        isActive ={
          bioActiva.id === nombre 
            ? true 
            : false
        }
      >
        {nombre}
      </Boton>
    ));
  };
  return (
    <BioContainer>
      <ContenedorBotones>{crearBotones()}</ContenedorBotones>
      <div>
        <div>
          <Imagen
            src={bioActiva.image}
            alt={bioActiva.nombre}
          />  
        </div>
        <div>
          <Nombre>{bioActiva.nombre}</Nombre>
            <Descripcion>
            {bioActiva.descripcion}
            </Descripcion>
        </div>
      </div>
    </BioContainer>
  );
  };

export default Bio;
