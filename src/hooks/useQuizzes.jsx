import { useState, useEffect } from "react";
import quizService from "../services/quiz/quizService.js";

export const useQuizzes = () => {
  const [quiz, setQuiz] = useState([]);
  const handleQuiz = (newValue) => {
    setQuiz(newValue);
  };
  const getQuiz = () => {
    quizService.getAll().then((data) => {
      setQuiz(data);
    });
  };
  useEffect(() => {
    getQuiz();
  }, []);
  return {
    quiz,
    handleQuiz,
  };
};
