import { useState } from "react";

export const useVideoCreateForm = (onSubmit) => {
  const [values, setValues] = useState({ titulo: "", link: "", categoria: "" });

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