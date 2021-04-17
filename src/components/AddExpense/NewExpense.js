import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, toggleShowForm] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const onAddExpenseHandler = () => {
    toggleShowForm(!showForm);
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={onAddExpenseHandler}>Add New Expense</button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onClickCancel={onAddExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
