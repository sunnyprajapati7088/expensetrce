import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShowallExpense from "./ShowallExpense";

function Form() {
  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "",
    date: "",
  });
    const [a, seta] = useState("");
    console.log(a)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    if (!form.title || !form.price || !form.category || !form.date) {
      // Show toast message if any field is empty
      toast.error("Please fill all fields before submitting!");
      return;
    }

    try {
      let existingData = JSON.parse(localStorage.getItem("data")) || [];
      existingData.push(form);
      localStorage.setItem("data", JSON.stringify(existingData));
      setForm({
        title: "",
        price: "",
        category: "",
        date: "",
      });

      // Show success toast message
      toast.success("Expense added successfully!");
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ToastContainer />

      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Expense Form</h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Expense Title
          </label>
          <input
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Title"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Price</label>
          <input
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Price"
            name="price"
            value={form.price}
            type="Number"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Category
          </label>
          <select
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Category"
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option>Food</option>
            <option>Madicien</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Date</label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Date"
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>
      </div>
      <ShowallExpense val={seta} />
    </div>
  );
}

export default Form;
