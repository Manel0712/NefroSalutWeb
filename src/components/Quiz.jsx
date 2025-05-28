export const Quiz = ({ quiz, setQuiz, handleDeleteQuiz, handleEditQuiz }) => {
  return quiz.map((quizInformation, i) => (
    <tr key={i} className="hover:bg-gray-50">
      <td className="px-4 py-2">{quizInformation.pregunta}</td>
      <td className="px-4 py-2">{quizInformation.option1}</td>
      <td className="px-4 py-2">{quizInformation.option2}</td>
      <td className="px-4 py-2">{quizInformation.option3}</td>
      <td className="px-4 py-2">{quizInformation.correctOption}</td>
      <td className="px-4 py-2">{quizInformation.categoria}</td>
      <td className="px-4 py-2">
        <button
          onClick={() => handleDeleteQuiz(quizInformation.id)}
          className="text-blue-600 hover:underline"
        >
          Quitar
        </button>
        <button
          onClick={() =>
            handleEditQuiz(
              quizInformation.id,
              quizInformation.pregunta,
              quizInformation.option1,
              quizInformation.option2,
              quizInformation.option3,
              quizInformation.correctOption,
              quizInformation.categoria,
            )
          }
          className="text-blue-600 hover:underline"
        >
          Editar
        </button>
      </td>
    </tr>
  ));
};
