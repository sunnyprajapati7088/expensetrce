import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function Form() {
  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
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
        toast("Expense Added");
    } catch (error) {
        toast("Expense Not Added");
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
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Title"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Price
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Price"
              name="price"
              value={form.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Category
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Category"
              name="category"
              value={form.category}
              onChange={handleChange}
              required
            />
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
      </div>
    );
}

export default Form;
