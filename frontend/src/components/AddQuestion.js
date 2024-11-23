
import { useState } from "react";
import axios from "axios";

const AddQuestion = ({ categories, onAdd }) => {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("");
  
  const handleSubmit = async () => {
    if (!question || !category)
      return alert("Both question and category are required.");
    // await axios.post("http://localhost:5000/detail", {
    await axios.post("https://certificate-management-backend.onrender.com/detail", {
      question,
      category_id: category,
    });
    setQuestion("");
    setCategory("");
    onAdd();
  };

  return (
    <div className="my-4 p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-lg font-bold mb-2">Add a New Question</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Question"
        className="border border-gray-300 p-2 rounded w-full focus:ring-2 focus:ring-green-400"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border border-gray-300 p-2 rounded mt-2 w-full md:w-auto focus:ring-2 focus:ring-green-400"
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white p-2 md:ml-2 rounded mt-2 hover:bg-green-600 transition-all"
      >
        Add Question
      </button>
    </div>
  );
};

export default AddQuestion;
