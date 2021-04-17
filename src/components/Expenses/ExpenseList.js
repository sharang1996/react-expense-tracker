import { useState } from "react";
import FilteredExpenseList from "./FilteredExpenseList";
import "./ExpenseList.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpensesChart";

const ExpenseList = ({ expenses }) => {
  const [expenseYear, setExpenseYear] = useState("2021");

  const addExpenseYearHandler = (year) => {
    console.log("in ExpenseList.js!!");
    setExpenseYear(year);
    console.log(expenseYear);
    console.log(year);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === Number(expenseYear)
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        onSelectYear={addExpenseYearHandler}
        selected={expenseYear}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <FilteredExpenseList expenses={filteredExpenses} />
    </Card>
  );
};

export default ExpenseList;
