
const QuestionList = ({ questions }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4 text-center">Questions</h2>
      {questions.length === 0 ? (
        <p className="text-center text-gray-500">No questions available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full mt-4 border-collapse border border-gray-300 shadow-md">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Question</th>
                <th className="border border-gray-300 px-4 py-2">Category</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((question, index) => (
                <tr
                  key={question.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-blue-100 transition-all`}
                >
                  <td className="border border-gray-300 px-4 py-2">
                    {question.question}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {question.category}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default QuestionList;
