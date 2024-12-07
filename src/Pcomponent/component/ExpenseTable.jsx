import React from 'react'
import { Link } from 'react-router-dom';

function ExpenseTable({
  expenses,
  setForm,
  setEditIndex,
  setExpenses,
  setEcart,
  Ecart,
  filterData,
  deleteExpense,
  handleEdit,
}) {
    return (
      <div className="w-full mx-auto justify-center flex">
        <table className="border-2 border-collapse border-black p-3 rounded-lg">
          <tr className="border-2 border-collapse border-black p-3">
            <td className="border-2 border-collapse border-black p-3">Date</td>
            <td className="border-2 border-collapse border-black p-3">Title</td>
            <td className="border-2 border-collapse border-black p-3">Category</td>
            <td className="border-2 border-collapse border-black p-3">
              Mode Of Payment
            </td>
            <td className="border-2 border-collapse border-black p-3">Amount</td>
                    <td className="border-2 border-collapse border-black p-3">Delete</td>
            <td className="border-2 border-collapse border-black p-3">Edit</td>
          </tr>
          {filterData.map(
            ({ title, category, amount, paymentMode, date }, i) => (
              <tr key={i} className="border-2 border-collapse border-black">
                <td className="border-2 border-collapse p-3 border-black">
                  {date}
                </td>
                <td className="border-2 border-collapse p-3 border-black">
                  {title}
                </td>
                <td className="border-2 border-collapse p-3 border-black">
                  {category}
                </td>
                <td className="border-2 border-collapse p-3 border-black">
                  {paymentMode}
                </td>
                <td className="border-2 border-collapse p-3 border-black">
                  {amount}
                </td>
                <td
                  onClick={() => {
                    deleteExpense(i, setExpenses, expenses);
                  
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded   p-border-2 border-collapse border-black"
                >
                  Delete
                </td>
                <td
                  onClick={(e) => {
                    handleEdit(i);
                  }}
                  className="text-blue-600 hover:text-blue-800 font-medium border-2 border-collapse p-3 border-black"
                >
                  <Link to="/AddExpense">Edit</Link>
                </td> 
              </tr>
            )
          )}
        </table>
      </div>
    );

}

export default ExpenseTable
