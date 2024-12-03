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
  const [form, setForm] = useState({
    date: new Date().toISOString().split("T")[0],
    amount: "",
    title: "",
    category: "",
    paymentMode: "",
  });
    const [expenses, setExpenses] = useState(getData());
    useEffect(() => {
      setExpense(expenses);
    }, [expenses]);
  console.log()

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

export default App
