
import { useState } from "react";
import axios from "axios";

const AddCategory = ({ onAdd }) => {
  const [name, setName] = useState("");

  // const handleSubmit = async () => {
  //   if (!name) return alert("Category name cannot be empty.");
  //   // await axios.post("http://localhost:5000/master", { name });
  //   await axios.post("https://certificate-management-backend.onrender.com/master", { name });
  //   setName("");
  //   onAdd(); 
  // };


  const handleSubmit = async () => {
    if (!name) return alert("Category name cannot be empty.");
  
    try {
      const response = await axios.post(
        "https://certificate-management-backend.onrender.com/master",
        { name }
      );
      console.log("Response:", response.data); // Debug response
      setName("");
      onAdd();
    } catch (error) {
      console.error("Error adding category:", error.message);
      alert("Failed to add category. Please check your inputs and try again.");
    }
  };
  

  return (
    <div className="my-4 p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-lg font-bold mb-2">Add a New Category</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Category Name"
        className="border border-gray-300 p-2 rounded w-full focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-600 transition-all"
      >
        Add Category
      </button>
    </div>
  );
};

export default AddCategory;
