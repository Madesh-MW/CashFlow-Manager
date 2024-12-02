// Get references to HTML elements
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const addExpenseButton = document.getElementById("addExpenseButton");
const expenseList = document.getElementById("expenseList");
const totalExpenses = document.getElementById("totalExpense");

// Initialize total expense
let totalExpenseAmount = 0;

// Function to update the total expense
function updateTotalExpenses(amount) {
  totalExpenseAmount += amount;
  totalExpenses.textContent = totalExpenseAmount.toFixed(2);
}

// Function to remove an expense and update the total
function removeExpense(expenseAmount) {
  totalExpenseAmount -= expenseAmount;
  totalExpenses.textContent = totalExpenseAmount.toFixed(2);
}

// Add expense event listener
addExpenseButton.addEventListener("click", () => {
  // Get input values
  const expenseNames = expenseName.value.trim();
  const expenseAmounts = parseFloat(expenseAmount.value.trim());

  // Validate inputs
  if (expenseNames === "" || expenseAmounts === "" || isNaN(expenseAmounts)) {
    alert("Please Enter Valid Expense Name And Amount");
    return;
  }

  // Create a new list item
  const li = document.createElement("li");
  li.innerHTML = `${expenseNames} - ₹${expenseAmounts} 
  <button onclick="removeExpense(${expenseAmounts}); this.parentElement.remove()">Remove</button>`;

  // Add the list item to the expense list
  expenseList.appendChild(li);

  // Update total expense
  updateTotalExpenses(expenseAmounts);

  // Clear inputs
  expenseName.value = "";
  expenseAmount.value = "";
});
