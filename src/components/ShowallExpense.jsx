import React, { useState } from "react";
import { Link } from "react-router-dom";

function ShowallExpense() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  function handleDelete(index) {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(updatedData));
    setData(updatedData);
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">All Expenses</h1>
      {data.length === 0 ? (
        <p className="text-gray-600">No expenses to show.</p>
      ) : (
        <table className="w-3/4 bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-2 px-4 text-left">Title</th>
              <th className="py-2 px-4 text-left">Category</th>
              <th className="py-2 px-4 text-left">Price</th>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">DeleteAction</th>
              <th className="py-2 px-4 text-left">UpdateAction</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr
                key={i}
                className="border-b last:border-none hover:bg-gray-100 transition"
              >
                <td className="py-2 px-4">{item.title}</td>
                <td className="py-2 px-4">{item.category}</td>
                <td className="py-2 px-4">{item.price}</td>
                <td className="py-2 px-4">{item.date}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleDelete(i)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
                <td className="py-2 px-4">
                  <Link
                    to={`/Edit/${i}`}
                    className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ShowallExpense;
