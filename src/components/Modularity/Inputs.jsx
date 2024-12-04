import React from 'react'

export default function Inputs() {
  return (
    <div>
      
    </div>
  )
}

export  function TextFeild({value,form,setvalue}) {
  return (
    <div>
      <input
        required
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder=""
        name="price"
        onChange={(e) => setvalue(e.target.value)}
    
       
      />
    </div>
  );
}
