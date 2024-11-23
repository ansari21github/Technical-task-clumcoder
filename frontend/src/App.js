
import { useState, useEffect } from "react";
import axios from "axios";
import AddCategory from "./components/AddCategory";
import AddQuestion from "./components/AddQuestion";
import QuestionList from "./components/QuestionList";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  
  const fetchCategories = async () => {
    // const { data } = await axios.get("http://localhost:5000/master");
    const { data } = await axios.get("https://certificate-management-backend.onrender.com/master");
    setCategories(data);
    console.log(data)
  };

  const fetchQuestions = async () => {
    // const { data } = await axios.get("http://localhost:5000/detail");
    const { data } = await axios.get("https://certificate-management-backend.onrender.com/detail");
    setQuestions(data);
    console.log(data)

  };

  useEffect(() => {
    fetchCategories();
    fetchQuestions();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Certificate Management
        </h1>
        <AddCategory onAdd={fetchCategories} />
        <AddQuestion categories={categories} onAdd={fetchQuestions} />
        <QuestionList questions={questions} />
      </div>
    </div>
  );
};

export default App;
