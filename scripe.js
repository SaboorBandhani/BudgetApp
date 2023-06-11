document.getElementById('expenseForm').addEventListener('submit', addExpense);

function addExpense(event) {
  event.preventDefault();

  var expenseName = document.getElementById('expenseName').value;
  var expenseAmount = parseFloat(document.getElementById('expenseAmount').value);

  if (!expenseName || isNaN(expenseAmount)) {
    alert('Please enter valid values for expense name and amount.');
    return;
  }

  var expenseItem = document.createElement('li');
  expenseItem.innerHTML = expenseName + ': $' + expenseAmount.toFixed(2);

  document.getElementById('expenseList').appendChild(expenseItem);

  document.getElementById('expenseName').value = '';
  document.getElementById('expenseAmount').value = '';
}
