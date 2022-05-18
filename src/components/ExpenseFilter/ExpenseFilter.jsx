import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
	function checkDateHandler(event) {
		props.onExpenseFilter(event.target.value);
	}

	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by year</label>
				<select value={props.selected} onChange={checkDateHandler}>
					<option value="2023">2023</option>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;
