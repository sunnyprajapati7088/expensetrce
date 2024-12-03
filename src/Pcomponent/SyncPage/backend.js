import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function getData() {
  const data = localStorage.getItem("data");
  return JSON.parse(data);
}
export function setExpense(expanse) {
  localStorage.setItem("data", JSON.stringify(expanse));
}
export function setEmpty(setForm) {
  setForm({
    date: new Date().toISOString().split("T")[0],
    amount: "",
    title: "",
    category: "",
    paymentMode: "",
  });
}

export function handleSubmit(
  e,
  data,
  setForm,
  EditIndex,
  setEditIndex,
  expenses,
  setExpenses
) {

  if (EditIndex == -1) {
    //for new expanse add
    // let prev = getData() || [];
    let prev = expenses || [];
    
    console.log(prev)
    const AddExpense = [...prev, data];
    // setExpense(AddExpense);
     setExpenses(AddExpense);
    alert("expenses added successfully");
    toast.success("Expense added successfully!");
    setEmpty(setForm);
  } else {
    //for edit operation
    // const prev = getData() || [];
    const prev = expenses||[];
    const updatedExpense = [...prev];
    console.log(EditIndex);
    updatedExpense[EditIndex] = data;
    // setExpense(updatedExpense);
    setExpenses(updatedExpense)
    setEditIndex(-1);
    alert("Edit succesfully");
    setEmpty(setForm);
  }
}
export function deleteExpense(index, setExpenses,expenses) {
  let data = expenses;
  if (data.length > 1) {
    const updatedata = data.splice(index, 1);
      setExpenses(updatedata)
    alert("expenses deleted successfully");
  
    toast.success("Expense delete successfully!");
  } else {
    setExpense([])
    alert("expenses deleted successfully");
  }
}
