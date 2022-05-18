function AddExpensesPanel(props) {
	function showFormPanel() {
        props.changePanelStatus(true);
    }
	return (
		<div>
			<button onClick={showFormPanel}>Add Expense</button>
		</div>
	);
}

export default AddExpensesPanel;
