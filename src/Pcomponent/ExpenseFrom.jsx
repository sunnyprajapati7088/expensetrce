// import React, { useState } from 'react'
// import { AmountInput, CategoryInput, DateInput, PaymentModeInput, TitleInput } from './Inputs'
// import { getData } from './SyncPage/backend';
// import { ToastContainer } from 'react-toastify';

// function ExpenseFrom({
//   form,
//   handleChange,
//   handleSubmit,
//   setForm,
//   EditIndex,
//   setEditIndex ,
// }) {
//   console.log(getData());
//   return (
//     <div>

//       <div>
//         <TitleInput value={form.title} name="title" onchange={handleChange} />
//         <CategoryInput
//           value={form.category}
//           name="category"
//           onchange={handleChange}
//         />
//         <DateInput value={form.date} name="date" onchange={handleChange} />
//         <AmountInput
//           value={form.amount}
//           name="amount"
//           onchange={handleChange}
//         />
//         <PaymentModeInput
//           value={form.paymentMode}
//           name="paymentMode"
//           onchange={handleChange}
//         />
//       </div>{" "}
//       <button
//         onClick={(e) => handleSubmit(e, form, setForm, EditIndex, setEditIndex)}
//       >
//         {EditIndex > -1 ? <p>Edit Expense</p> : <p>Add Expense</p>}
//       </button>
//     </div>
//   );
// }

// export default ExpenseFrom;

import React from "react";
import {
  AmountInput,
  CategoryInput,
  DateInput,
  PaymentModeInput,
  TitleInput,
} from "./Inputs";

import { useNavigate } from "react-router-dom";

function ExpenseForm({
  form,
  handleChange,
  handleSubmit,
  setForm,
  EditIndex,
  setEditIndex,
  expenses,
  setExpenses,
}) {
  const navigate = useNavigate();
  console.log(expenses);
  return (
    <div className="container mx-auto p-6 bg-gray-50 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">
        {EditIndex > -1 ? "Edit Expense" : "Add Expense"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TitleInput
          value={form.title}
          name="title"
          onchange={handleChange}
          className="border border-gray-300 rounded p-2"
        />
        <CategoryInput
          value={form.category}
          name="category"
          onchange={handleChange}
          className="border border-gray-300 rounded p-2"
        />
        <DateInput
          value={form.date}
          name="date"
          onchange={handleChange}
          className="border border-gray-300 rounded p-2"
        />
        <AmountInput
          value={form.amount}
          name="amount"
          onchange={handleChange}
          className="border border-gray-300 rounded p-2"
        />
        <PaymentModeInput
          value={form.paymentMode}
          name="paymentMode"
          onchange={handleChange}
          className="border border-gray-300 rounded p-2"
        />
      </div>
      <button
        onClick={(e) => {
          handleSubmit(
            e,
            form,
            setForm,
            EditIndex,
            setEditIndex,
            expenses,
            setExpenses
          ),
            navigate("/ExpensesList");
        }}
        className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
      >
        {EditIndex > -1 ? "Edit Expense" : "Add Expense"}
      </button>
    </div>
  );
}

export default ExpenseForm;
