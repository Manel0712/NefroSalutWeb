import React from 'react';
import { QuizUpdateForm } from './components';
import { useLocation } from 'react-router-dom';

export const QuizUpdate = () => {
  const { state: data } = useLocation();
  return (
    <div>
      <h1>Editar quiz</h1>
      <QuizUpdateForm id={data.id} quizPregunta={data.pregunta} quizOption1={data.option1} quizOption2={data.option2} quizOption3={data.option3} quizCorrectOption={data.correctOption} quizCategoria={data.categoria} />
    </div>
  );
};