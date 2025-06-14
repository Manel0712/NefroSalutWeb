import { useState } from "react";

export const useDisheCreateForm = (onSubmit) => {
  const [values, setValues] = useState({
    nombre: "",
    categoria: "",
    clasificaciones: "",
  });

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
