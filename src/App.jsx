<<<<<<< HEAD
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

function App() {
  const [EditIndex, setEditIndex] = useState(-1);
  const [expenses, setExpenses] = useState(getData());
=======
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ExpenseFormPage } from './Pcomponent/Pages/ExpenseFormPage';
import ExpenseListPage from './Pcomponent/Pages/ExpenseListPage';
import { getData,  setExpense } from './Pcomponent/SyncPage/backend';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pcomponent/Pages/Navbar';


function App() {
  const [EditIndex,setEditIndex]=useState(-1)
>>>>>>> f8206b07906461c00961f91d66f676dfd985734d
  const [form, setForm] = useState({
    date: new Date().toISOString().split("T")[0],
    amount: "",
    title: "",
    category: "",
    paymentMode: "",
  });
<<<<<<< HEAD
  
  useEffect(() => {
    setExpense(expenses);
   
  }, [expenses]);
  console.log(expenses)

 
=======
    const [expenses, setExpenses] = useState(getData());
    useEffect(() => {
      setExpense(expenses);
    }, [expenses]);
  console.log()
>>>>>>> f8206b07906461c00961f91d66f676dfd985734d

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
<<<<<<< HEAD
                setExpenses={setExpenses}
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
=======
                
>>>>>>> f8206b07906461c00961f91d66f676dfd985734d
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
