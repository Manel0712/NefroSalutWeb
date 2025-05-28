import React from "react";
import { useState } from "react";
import { InputField } from "./components";
import { useRegisterForm } from "./hooks";
import sanitaryService from "./services/users/sanitaryService.js";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const handleRegister = (values) => {
    sanitaryService.create(values).then((data) => {
        navigate(-1);
    })
  };

  const { values, handleChange, handleSubmit } = useRegisterForm(handleRegister);

  return (
    <>
      <form onSubmit={handleSubmit} style={{ width: "300px", margin: "50px auto" }}>
        <h2>Registre</h2>
        <InputField
          label="Nombre:"
          name="nombre"
          type="text"
          value={values.name}
          onChange={handleChange}
        />
        <InputField
          label="Apellidos:"
          name="apellidos"
          type="text"
          value={values.apellidos}
          onChange={handleChange}
        />
        <InputField
          label="Email:"
          name="email"
          type="email"
          value={values.username}
          onChange={handleChange}
        />
        <InputField
          label="Telefono:"
          name="telefono"
          type="text"
          value={values.phone}
          onChange={handleChange}
        />
        <InputField
          label="Contraseña:"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
        <InputField
          label="Rol:"
          name="rol"
          type="text"
          value={values.rol}
          onChange={handleChange}
        />
        <InputField
          label="Identificador:"
          name="identificador"
          type="text"
          value={values.identificador}
          onChange={handleChange}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>Registrar-se</button>
        <button type="submit" style={{ padding: "0.5rem 1rem" }} onClick={() => navigate(-1)}>Sortir</button>
      </form>
    </>
  );
};
