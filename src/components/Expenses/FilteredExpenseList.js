import ExpenseItem from "./ExpenseItem";
import "./FilteredExpenseList.css";

const FilteredExpenseList = ({ expenses }) => {
  if (expenses.length === 0)
    return <p className="expenses-list__fallback">No expenses found.</p>;

  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default FilteredExpenseList;
