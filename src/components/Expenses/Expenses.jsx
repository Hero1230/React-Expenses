import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
	const [filteredDate, setFilterDate] = useState("2023");

	function getFilterDateHandler(date) {
		setFilterDate(date);
	}

	const filteredItems = props.items.filter((expenses) => {
		return expenses.date.getFullYear().toString() === filteredDate;
	});

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredDate}
				onExpenseFilter={getFilterDateHandler}
			/>
			<ExpensesChart expenses={filteredItems} />
			<ExpensesList items={filteredItems} />
		</Card>
	);
}

export default Expenses;
