import React, { useEffect, useState } from 'react'
import ExponaseList from '../ExponaseList'
import { getData } from '../SyncPage/backend';

function ExpenseListPage({ setForm, form, setEditIndex, expenses ,setFilter,
                filterData,setExpenses}) {


  return (
    <div>
      <ExponaseList
        expenses={expenses}
        setForm={setForm}
        form={form}
        setEditIndex={setEditIndex}
        setExpenses={setExpenses}
        filterData={filterData}
        setFilter={setFilter}
      ></ExponaseList>
    </div>
  );
}

export default ExpenseListPage
