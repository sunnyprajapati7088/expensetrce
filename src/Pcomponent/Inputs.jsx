import React from "react";
export const DateInput = ({ value,name, onchange }) => {
<<<<<<< HEAD
    return (
      <div>
        <label>Data:</label>
        <input
          type="Date"
          value={value}
          name={name}
          onChange={(e) => onchange(e)}
          required
        ></input>
      </div>
    );
=======
    return (<div>
            <label >Data:</label>
        <input type="Date" value={value} name={name} onChange={(e)=>onchange(e)}></input>
    </div>);
>>>>>>> f8206b07906461c00961f91d66f676dfd985734d
};

export const TitleInput = ({ value,name,onchange }) => {
    return (
<<<<<<< HEAD
      <div>
        <lable>Title:</lable>
        <input
          type="text"
          name={name}
          value={value}
          onChange={(e) => onchange(e)}
          required
        ></input>
      </div>
    );
=======
        <div>
            <lable>Title:</lable>
            <input type="text" name={name} required value={value} onChange={(e)=>onchange(e)}></input>
        </div>
    )
>>>>>>> f8206b07906461c00961f91d66f676dfd985734d
}


export const AmountInput = ({ value, onchange,name }) => {
  return (
    <div>
      <lable>Amount:</lable>
      <input
        type="number"
              value={value}
              name={name}
        onChange={(e) => onchange(e)}
        required
      ></input>
    </div>
  );
};



export const CategoryInput = ({ value, onchange,name }) => {
  return (
    <div>
      <lable>Category:</lable>

      <select value={value} name={name} onChange={(e) => onchange(e)}>
        <option>select</option>
        <option>Food</option>
        <option>Insurance</option>
        <option>Taxes</option>
        <option>Travel</option>
        <option>InterNet Services</option>
      </select>
    </div>
  );
};


export const newCategory = ({ value, onchange }) => {
  return (
    <div>
      <lable>newCategory:</lable>
      <input
        type="text"
        value={value}
        onChange={(e) => onchange(e)}
      ></input>
    </div>
  );
};


export const PaymentModeInput = ({ value, onchange,name }) => {
  return (
    <div>
      <lable>paymentMode:</lable>

<<<<<<< HEAD
      <select name={name} value={value} onChange={(e) => onchange(e)} >
=======
      <select name={name} value={value} onChange={(e) => onchange(e)}>
>>>>>>> f8206b07906461c00961f91d66f676dfd985734d
        <option>select</option>
        <option>Cash</option>
        <option>Debit Card</option>
        <option>Credit Card</option>
      </select>
    </div>
  );
};


