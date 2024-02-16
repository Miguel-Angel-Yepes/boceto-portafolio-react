
import { useState } from "react";
import PruebasHooks from "./PruebasHooks";

export const Home = () => {

  const [ contador, setContador ] = useState(0)

  return (
    <>
      <PruebasHooks contador={contador}  setContador={setContador}/>
    </>
  );
};


