import { useState } from "react";

export const useRegisterForm = (onSubmit) => {
  const [values, setValues] = useState({ nombre: "", apellidos: "", email: "", telefono: "", password: "", rol: "", identificador: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return {
    values,
    handleChange,
    handleSubmit,
  };
};