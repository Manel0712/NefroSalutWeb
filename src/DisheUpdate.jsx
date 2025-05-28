import React from "react";
import { DisheUpdateForm } from "./components";
import { useLocation } from "react-router-dom";

export const DisheUpdate = () => {
  const { state: data } = useLocation();
  return (
    <div>
      <h1>Editar plat</h1>
      <DisheUpdateForm
        id={data.id}
        disheName={data.nombre}
        disheCategory={data.categoria}
        disheClassifications={data.clasificaciones}
      />
    </div>
  );
};
