import React from "react";
import { deleteExpense, getData, } from "./SyncPage/backend";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function CartExpense({ expenses, setForm, setEditIndex,
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
      </div>
  );
}

export default CartExpense;
