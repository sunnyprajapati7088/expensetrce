import React, { useEffect, useState } from 'react'
import ExponaseList from '../ExponaseList'
import { getData } from '../SyncPage/backend';

function ExpenseListPage({ setForm, form, setEditIndex, expenses ,
                setExpenses}) {


  return (
    <div>
      <ExponaseList
        expenses={expenses}
        setForm={setForm}
        form={form}
        setEditIndex={setEditIndex}
        setExpenses={setExpenses}
      ></ExponaseList>
    </div>
  );
}

export default ExpenseListPage
