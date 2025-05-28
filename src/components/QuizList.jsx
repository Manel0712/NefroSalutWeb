import { Quiz } from "./Quiz";

export const QuizList = ({
  quiz,
  setQuiz,
  handleDeleteQuiz,
  handleEditQuiz,
}) => {
  return (
    <div
      className="min-h-screen py-4 px-2"
      style={{ backgroundColor: "#c4d2d0" }}
    >
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="bg-[#c4d2d0] p-4 rounded-lg shadow-inner">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Gestió quizzes
            </h4>

            {quiz.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 bg-white rounded-md shadow">
                  <thead className="bg-gray-100 text-xs text-gray-700 uppercase">
                    <tr className="text-center">
                      <th className="px-4 py-2">Pregunta</th>
                      <th className="px-4 py-2">Opcio 1</th>
                      <th className="px-4 py-2">Opcio 2</th>
                      <th className="px-4 py-2">Opcio 3</th>
                      <th className="px-4 py-2">Opcio correcta</th>
                      <th className="px-4 py-2">categoria</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <Quiz
                      quiz={quiz}
                      setQuiz={setQuiz}
                      handleDeleteQuiz={handleDeleteQuiz}
                      handleEditQuiz={handleEditQuiz}
                    />
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-600">No hi han quizzes</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
