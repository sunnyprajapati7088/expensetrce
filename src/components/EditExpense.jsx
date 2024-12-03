import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function EditExpense() {
  const { index } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    price: "",
    date: "",
  });

  useEffect(() => {
    if (data[index]) {
      setExpense(data[index]);
    }
  }, [data, index]);

  function handleChange(e) {
    const { name, value } = e.target;
    setExpense((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const updatedData = [...data];
    updatedData[index] = expense;
    localStorage.setItem("data", JSON.stringify(updatedData));
    toast.success("Update Successfully");
    navigate("/");
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8">
      <ToastContainer/>
      <h1 className="text-2xl font-bold mb-6 text-center">Edit Expense</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-lg rounded-md w-3/4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={expense.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Category</label>
          <input
            type="text"
            name="category"
            value={expense.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={expense.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={expense.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default EditExpense ;
