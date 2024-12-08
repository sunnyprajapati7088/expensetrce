import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ExpenseFormPage } from "./Pcomponent/Pages/ExpenseFormPage";
import ExpenseListPage from "./Pcomponent/Pages/ExpenseListPage";
import { getData, setExpense } from "./Pcomponent/SyncPage/backend";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Pcomponent/Pages/Navbar";
import CartExpense from "./Pcomponent/CartExpense";
import { useSelector } from "react-redux";
function App() {
  const [EditIndex, setEditIndex] = useState(-1);
  const [expenses, setExpenses] = useState(getData());
   const [filterData, setFilter] = useState(expenses);
  const [form, setForm] = useState({
    date: new Date().toISOString().split("T")[0],
    amount: "",
    title: "",
    category: "",
    paymentMode: "",
  });
  
  useEffect(() => {
    setExpense(expenses);
   
  }, [expenses]);
  console.log(expenses)

 
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route
            path="/AddExpense"
            element={
              <ExpenseFormPage
                EditIndex={EditIndex}
                form={form}
                setForm={setForm}
                setEditIndex={setEditIndex}
                expenses={expenses}
                setExpenses={setExpenses}
              />
            }
          />
          <Route
            path="/ExpensesList"
            element={
              <ExpenseListPage
                EditIndex={EditIndex}
                form={form}
                setForm={setForm}
                setEditIndex={setEditIndex}
                expenses={expenses}
                setExpenses={setExpenses}
                filterData={filterData}
                setFilter={setFilter}
              />
            }
          />
          <Route
            path="/ExpenseCart"
            element={
              <CartExpense
                EditIndex={EditIndex}
                form={form}
                setForm={setForm}
                setEditIndex={setEditIndex}
                expenses={expenses}
                setExpenses={setExpenses}
              />
            }
          />
        </Route>
      </Routes>
    </div>
    // <div>
    // <ExpenseFormPage
    //     EditIndex={EditIndex}
    //     form={form}
    //     setForm={setForm}
    //     setEditIndex={setEditIndex}
    //   />
    //   <ExpenseListPage
    //     EditIndex={EditIndex}
    //     form={form}
    //     setForm={setForm}
    //     setEditIndex={setEditIndex}
    //   />
    // </div>
  );
}

export default App;
