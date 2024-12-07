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
    </div>
  );
}

export default ExponaseList;
