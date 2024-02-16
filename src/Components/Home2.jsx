
import { useState } from "react";
import PruebasHooks2 from "./PruebasHooks2";

export const Home2 = () => {

  const [ contador, setContador ] = useState(0)

  return (
    <>
      <PruebasHooks2 contador={contador}  setContador={setContador}/>
    </>
  );
};

