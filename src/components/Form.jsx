import React, { useState } from 'react'

function Form() {
    const [form, setform] = useState({title:"",price:"",category:"",date:""});
     const handleChange = (e) => {
       const { name, value } = e.target;
       setform({ ...form, [name]: value });
    };
    
console.log(form)
  return (
    <div>
      <div>
        Expense Title
        <label>
          <input
            placeholder="Title"
            name="title"
            value={form.title}
            onChange={handleChange}
          ></input>
        </label>
      </div>
      <div>
        price
        <label>
          <input
            placeholder="price "
            name="price"
            value={form.price}
            onChange={handleChange}
          ></input>
        </label>
      </div>
      <div>
        Categoty
        <label>
          <input
            placeholder="Categoty "
            name="category"
            value={form.category}
            onChange={handleChange}
          ></input>
        </label>
      </div>
      <div>
        Date
        <label>
          <input
            placeholder=" "
            type="Date"
            name="date"
            value={form.date}
            onChange={handleChange}
          ></input>
        </label>
      </div>
      <button type="submit">Submit</button>
    </div>
  );
}

export default Form
