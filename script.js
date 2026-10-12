"use strict";

// Function to calculate the remaining budget
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// Function to collect and process budget information
function startBudgetTracker() {
    // Collect the user's monthly budget
    let budgetInput = prompt("Enter your monthly budget in KSh:");

    if (budgetInput === null || budgetInput.trim() === "") {
        console.log("Budget tracking cancelled or no budget entered.");
        return;
    }

    let budget = Number(budgetInput);

    if (!Number.isFinite(budget) || budget < 0) {
        console.log("Please enter a valid, non-negative budget.");
        return;
    }

    // Collect the user's expenses
    let expensesInput = prompt("Enter your total expenses in KSh:");

    if (expensesInput === null || expensesInput.trim() === "") {
        console.log("Expense entry cancelled or left empty.");
        return;
    }

    let expenses = Number(expensesInput);

    if (!Number.isFinite(expenses) || expenses < 0) {
        console.log("Please enter valid, non-negative expenses.");
        return;
    }

    // Calculate the remaining balance
    let remainingBalance = calculateBalance(budget, expenses);

    // Display clearly labelled results
    console.log("===== SpendWise Budget Summary =====");
    console.log("Monthly Budget: KSh " + budget);
    console.log("Total Expenses: KSh " + expenses);
    console.log("Remaining Balance: KSh " + remainingBalance);

    if (remainingBalance < 0) {
        console.log("Warning: You have exceeded your budget!");
    } else {
        console.log("You are within your budget.");
    }
}

// Connect the button to the function
document.getElementById("startButton").addEventListener("click", startBudgetTracker);