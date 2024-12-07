<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { getData } from "./SyncPage/backend";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cart from "./component/Cart";
import ExpenseTable from "./component/ExpenseTable";

function ExponaseList({ expenses, setForm, setEditIndex, setExpenses }) {
  const [Ecart, setEcart] = useState(false);
  const [filterData, setFilter] = useState(expenses);
  const [inputs, setInput] = useState("");
  function deleteExpense(index) {
    const data = [...expenses];
    console.log(data.length);
    if (data.length > 1) {
      data.splice(index, 1);

      setExpenses(data);
      alert("expenses deleted successfully");
    } else {
      setExpenses([]);
      alert("expenses deleted successfully");
    }
  }
  function handleSearch(e) {
    setInput(e.target.value);
    const Data = expenses.filter((item) =>
      item.category.toLowerCase().includes(inputs.toLowerCase())
    );
    setFilter(Data);
  }
  useEffect(() => {
    setFilter(expenses);
  }, [expenses]);
  function handleEdit(i) {
    setEditIndex(i);
    const editdata = expenses[i];
    setForm({
      date: editdata.date || "",
      amount: editdata.amount || "",
      title: editdata.title || "",
      category: editdata.category || "",
      paymentMode: editdata.paymentMode || "",
    });
  }

  return (
    <div className="container mx-auto p-4 ">
      <h2 className="text-2xl font-bold mb-4 w-full text-center">
        Expense List
      </h2>
      <div className="flex justify-center">
        <div className="bg-blue-700 w-fit p-3 rounded-xl ">
          <button
            className={`text-xl ${
              Ecart ? "" : "bg-blue-300 rounded-xl p-2 mr-2"
            } ease-in-out `}
            onClick={(Ecart) => setEcart(!Ecart)}
          >
            Expense Table
          </button>
          <button
            className={`text-xl ${
              Ecart ? "bg-blue-300 rounded-xl p-2  ml-2" : ""
            } ease-in-out`}
            onClick={() => setEcart(true)}
          >
            Expense Cart
          </button>
        </div>
      </div>
      <div className="flex w-[500px]">
        <select onChange={(e) => handleSearch(e)}>
          <option>select</option>
          <option>Food</option>
          <option>Insurance</option>
          <option>Taxes</option>
          <option>Travel</option>
          <option>InterNet Services</option>
        </select>
        <p onChange={handleSearch}>Search</p>
      </div>
      {Ecart ? (
        <Cart
          expenses={expenses}
          setEcart={setEcart}
          Ecart={Ecart}
          setForm={setForm}
          setEditIndex={setEditIndex}
          filterData={filterData}
          handleEdit={handleEdit}
          deleteExpense={deleteExpense}
        ></Cart>
      ) : (
        <ExpenseTable
          expenses={expenses}
          setEcart={setEcart}
          Ecart={Ecart}
          setForm={setForm}
          setEditIndex={setEditIndex}
          filterData={filterData}
          handleEdit={handleEdit}
          deleteExpense={deleteExpense}
        />
      )}
=======
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
>>>>>>> f8206b07906461c00961f91d66f676dfd985734d
    </div>
  );
}

export default ExponaseList;
