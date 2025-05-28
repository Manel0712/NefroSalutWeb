export const QuizProgress = ({ quizProgress, setQuizProgress }) => {
    return quizProgress.map((quizProgressInformation, i) => (
      <tr key={i} className="hover:bg-gray-50">
        <td className="px-4 py-2" style={{ textAlign: 'center' }}>{quizProgressInformation.pivot.respuestas_correctas}</td>
        <td className="px-4 py-2" style={{ textAlign: 'center' }}>{quizProgressInformation.pivot.respuestas_incorrectas}</td>
      </tr>
    ));
  };