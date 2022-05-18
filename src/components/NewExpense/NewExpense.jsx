import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
import AddExpensesPanel from "./AddExpensesPanel";
import { useState } from "react";

function NewExpense(props) {
	function saveExpenseDataHandler(enteredExpenseData) {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
	}

	const [shouldShowPanel, setShouldShowPanel] = useState(false);
	let itemToShow;

	if (shouldShowPanel) {
		itemToShow = (
			<ExpenseForm
				changePanelStatus={setShouldShowPanel}
				onSaveExpenseData={saveExpenseDataHandler}
			/>
		);
	} else {
		itemToShow = <AddExpensesPanel changePanelStatus={setShouldShowPanel} />;
	}
	return <div className="new-expense">{itemToShow}</div>;
}

export default NewExpense;
