import React, { createContext, useState } from "react";

// Create Context
export const ExpenseContext = createContext();

// Provider Component
export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  // Function to add a new expense
  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  // Function to edit an existing expense
  const editExpense = (index, updatedExpense) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense, i) => (i === index ? updatedExpense : expense))
    );
  };

  // Function to delete an expense
  const deleteExpense = (index) => {
    setExpenses((prevExpenses) => prevExpenses.filter((_, i) => i !== index));
  };

  return (
    <ExpenseContext.Provider
      value={{ expenses, addExpense, editExpense, deleteExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
