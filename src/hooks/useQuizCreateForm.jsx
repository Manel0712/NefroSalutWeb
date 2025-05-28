import { useState } from "react";

export const useQuizCreateForm = (onSubmit) => {
  const [values, setValues] = useState({ pregunta: "", option1: "", option2: "", option3: "", correctOption: "", categoria: "" });

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