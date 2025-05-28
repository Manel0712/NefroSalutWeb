import quizService from "../services/quiz/quizService";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useQuizCreateForm } from "../hooks";
import { InputField } from "./InputField";

export const QuizCreateForm = () => {
  const navigate = useNavigate();

  const newQuiz = (values) => {
    quizService.create(values).then((response) => {
      navigate(-1);
    });
  };

  const { values, handleChange, handleSubmit } = useQuizCreateForm(newQuiz)

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <InputField
          label="Pregunta:"
          name="pregunta"
          type="text"
          value={values.pregunta}
          onChange={handleChange}
        />
        <InputField
          label="Opcio 1:"
          name="option1"
          type="text"
          value={values.opcio1}
          onChange={handleChange}
        />
        <InputField
          label="Opcio 2:"
          name="option2"
          type="text"
          value={values.opcio2}
          onChange={handleChange}
        />
        <InputField
          label="Opcio 3:"
          name="option3"
          type="text"
          value={values.opcio3}
          onChange={handleChange}
        />
        <InputField
          label="Opcio correcta:"
          name="correctOption"
          type="text"
          value={values.correctOption}
          onChange={handleChange}
        />
        <InputField
          label="Categoria:"
          name="categoria"
          type="text"
          value={values.categoria}
          onChange={handleChange}
        />
        <div>
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};