// import { createContext, useState } from 'react'

//  const [form, setForm] = useState({
//          title: "",
//          price: "",
//          category: "",
//          date: "",
//        });
//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         setForm({ ...form, [name]: value });
// };
// const objectContext = { form, setForm, handleChange }
// export const formvalueProvider = createContext(objectContext);
// return (

// )

// FormContext.js
import React, { createContext, useContext, useState } from "react";

// Create the context
const FormContext = createContext();

// Provider component
export const FormProvider = ({ children }) => {
    const [form, setForm] = useState({
        title: "",
        price: "",
        category: "",
        date: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
        // Function to update form values
    

        return (
            <FormContext.Provider value={{ form, handleChange }}>
                {children}
            </FormContext.Provider>
        );
    }



