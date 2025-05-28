import { QuizList } from "./components";
import { useQuizzes } from "./hooks";
import { useLocation, useNavigate } from "react-router-dom";
import quizService from "./services/quiz/quizService.js";

export const Quizzes = () => {
  const { state: data } = useLocation();
  const navigate = useNavigate();
  const { quiz, handleQuiz } = useQuizzes();
  const handleNewQuiz = () => {
    navigate("/CreateQuiz");
  };
  const handleDeleteQuiz = (id) => {
    quizService.quizDelete(id).then(() => {
      quizService.getAll().then((data) => {
        handleQuiz(data);
      });
    });
  };
  const handleEditQuiz = (
    id,
    pregunta,
    option1,
    option2,
    option3,
    correctOption,
    categoria,
  ) => {
    navigate("/EditQuiz", {
      state: {
        id,
        pregunta,
        option1,
        option2,
        option3,
        correctOption,
        categoria,
      },
    });
  };
  return (
    <>
      <h1>QUIZZES</h1>
      <div className="flex justify-end w-full">
        <button
          style={{ marginLeft: "85.5%" }}
          onClick={handleNewQuiz}
          className="ml-20, bg-slate-300 hover:bg-slate-400 transition px-6 py-4 rounded-lg shadow flex flex-col items-center"
        >
          <span className="text-xl font-semibold mb-2">create new quiz</span>
          <span className="text-3xl">➕🎲</span>
        </button>
      </div>
      <QuizList
        quiz={quiz}
        setQuiz={handleQuiz}
        handleDeleteQuiz={handleDeleteQuiz}
        handleEditQuiz={handleEditQuiz}
      />
      <button onClick={() => navigate(-1)}>Sortir</button>
    </>
  );
};
