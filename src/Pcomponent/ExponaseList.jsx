import React from "react";
import { deleteExpense, getData, } from "./SyncPage/backend";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function ExponaseList({ expenses, setForm, setEditIndex,
  setExpenses }) {
  function handleEdit(i) {
    setEditIndex(i);
    
    const editdata = expenses[i];
    
    setForm({
      date: editdata.date || "",
      
  
    amount: editdata.amount||"",
    title: editdata.title||"",
    category: editdata.category||"",
    paymentMode: editdata.paymentMode||""})
  }
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Expense List</h2>
      {expenses.map((item, i) => (
        <div
          key={i}
          className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200"
        >
          <p className="text-lg font-semibold">
            Title: <span className="font-normal">{item.title}</span>
          </p>
          <p className="text-lg font-semibold">
            Category: <span className="font-normal">{item.category}</span>
          </p>
          <p className="text-lg font-semibold">
            Amount: <span className="font-normal">{item.amount}</span>
          </p>
          <p className="text-lg font-semibold">
            Payment Mode:{" "}
            <span className="font-normal">{item.paymentMode}</span>
          </p>
          <p className="text-lg font-semibold">
            Date: <span className="font-normal">{item.date}</span>
          </p>
          <div className="flex justify-between items-center mt-4">
            <Link
              onClick={(e) => {
                handleEdit(i)
              }}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              <Link to="/AddExpense">Edit</Link>
            </Link>
            <button
              onClick={() => {
                deleteExpense(i, setExpenses, expenses);
              }}
              className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExponaseList;
