import React from "react";
import { useState } from "react";
import { InputField } from "./components";
import { useLoginForm } from "./hooks";
import sanitaryService from "./services/users/sanitaryService.js";
import { useNavigate } from "react-router-dom";

export const Loggin = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const handleLogin = (values) => {
    sanitaryService.loggin(values).then((data) => {
      if (data[0] == "Email i/o password incorrectos") {
        setErrorMessage("Email i/o password incorrectos");
      } else {
        navigate("/menuPrincipal", { state: data });
      }
    });
  };

  const { values, handleChange, handleSubmit } = useLoginForm(handleLogin);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ width: "300px", margin: "50px auto" }}
      >
        <h2>Iniciar sesión</h2>
        <InputField
          label="Usuario:"
          name="email"
          type="email"
          value={values.username}
          onChange={handleChange}
        />
        <InputField
          label="Contraseña:"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Entrar
        </button>
        {errorMessage == "Email i/o password incorrectos" && (
          <h2
            style={{ backgroundColor: "red", color: "white", padding: "10px" }}
          >
            Email i/o password incorrectos
          </h2>
        )}
      </form>
    </>
  );
};
