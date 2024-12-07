import React from 'react'
import { Link } from 'react-router-dom';

function Cart({
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
      <div className='w-full mx-auto flex justify-center'>
        <div className="grid grid-cols-3 gap-3 w-[90%]">
          {filterData.map((item, i) => (
            <div
              className="w-[350px] border-2  p-3 gap-2 flex flex-col  border-black rounded-lg"
              key={i}
            >
              <h1 className="w-full flex justify-center">title:{item.title}</h1>
              <div className="flex w-full justify-between">
                <h1>Category:{item.category}</h1>
                <h1>Date:{item.date}</h1>
              </div>
              <div className="flex w-full justify-between">
                <h1>
                  PaymentMode-{"   "}
                  {item.paymentMode}
                </h1>
                <h1>
                  ₹Amount:- {"   "} {item.amount}
                </h1>
              </div>
              <div className="flex justify-between items-center mt-4">
                <Link
                  onClick={(e) => {
                    handleEdit(i);
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
        </div>
      </div>
    );}

export default Cart
