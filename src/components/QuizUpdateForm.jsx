import quizService from "../services/quiz/quizService";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuizEditForm } from "../hooks";
import { InputField } from "./InputField";

export const QuizUpdateForm = ({
  id,
  quizPregunta,
  quizOption1,
  quizOption2,
  quizOption3,
  quizCorrectOption,
  quizCategoria,
}) => {
  const navigate = useNavigate();

  const quizUpdate = (values) => {
    quizService
      .quizEdit(
        id,
        values.pregunta,
        values.option1,
        values.option2,
        values.option3,
        values.correctOption,
        values.categoria,
      )
      .then((response) => {
        navigate(-1);
      });
  };

  const { values, handleChange, handleSubmit } = useQuizEditForm(quizUpdate, {
    pregunta: quizPregunta,
    option1: quizOption1,
    option2: quizOption2,
    option3: quizOption3,
    correctOption: quizCorrectOption,
    categoria: quizCategoria,
  });

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
          value={values.option1}
          onChange={handleChange}
        />
        <InputField
          label="Opcio 2:"
          name="option2"
          type="text"
          value={values.option2}
          onChange={handleChange}
        />
        <InputField
          label="Opcio 3:"
          name="option3"
          type="text"
          value={values.option3}
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
            Update
          </button>
        </div>
      </form>
    </div>
  );
};
