import React, { useState } from 'react'
import ExpenseFrom from '../ExpenseFrom'
import {  handleSubmit } from '../SyncPage/backend';

export function ExpenseFormPage({
  form,
  setForm,
  EditIndex,
  setEditIndex,
  setExpenses,
  expenses
}) {
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  console.log(form);

  return (
    <div>
      <ExpenseFrom
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        setForm={setForm}
        EditIndex={EditIndex}
        setEditIndex={setEditIndex}
        expenses={expenses}
        setExpenses={setExpenses}
      />
    </div>
  );
}


