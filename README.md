SpendWise – Budget Tracker
1. Project Description

SpendWise is a simple budget tracking application developed using HTML, CSS, and JavaScript. It helps users understand their spending by entering their monthly budget and total expenses. The application calculates the remaining balance and informs users whether they are within their budget or have exceeded it.

2. Technologies Used
HTML: Creates the structure of the webpage.
CSS: Styles the webpage and its elements.
JavaScript: Collects user input, stores data, performs calculations, and displays results in the browser console.
3. JavaScript Concepts Implemented
Variables

Variables are used to store budgeting information.

Examples include:

budgetInput stores the monthly budget entered by the user.
expensesInput stores the total expenses entered by the user.
budget stores the monthly budget as a number.
expenses stores the total expenses as a number.
remainingBalance stores the calculated balance after expenses are deducted.
Data Types

The application uses strings and numbers. The prompt() function collects input as text, while the Number() function converts the input into numbers for calculations.

User Input

The prompt() function asks users to enter their monthly budget and total expenses in Kenyan shillings (KSh). The application checks for empty, cancelled, negative, or invalid input before proceeding.

Budget Calculations

The application calculates the remaining balance by subtracting total expenses from the monthly budget.

Formula:

Remaining Balance = Monthly Budget − Total Expenses

For example, if the monthly budget is KSh 10,000 and expenses are KSh 3,500, the remaining balance is KSh 6,500.

Functions

The application uses reusable functions to organize its JavaScript code.

calculateBalance(budget, expenses) calculates the remaining balance.
startBudgetTracker() collects user input, validates the values, calculates the balance, and displays the results.
Conditional Statements

if and else statements check whether the user's input is valid and whether expenses have exceeded the budget. The application displays a warning if the remaining balance is negative.

Console Output

The console.log() function displays the monthly budget, total expenses, remaining balance, and budget status in the browser's developer console.

Event Handling

The addEventListener() method listens for a click on the Start Budget Tracker button and runs the startBudgetTracker() function.

4. Project Files
index.html – Contains the webpage structure.
style.css – Contains the styling for the application.
script.js – Contains the JavaScript variables, input handling, calculations, functions, and console output.
README.md – Documents the project and explains the JavaScript concepts used.
5. How to Run the Application
Download or clone the SpendWise project repository.
Open index.html in a web browser.
Open the browser's Developer Tools and select the Console tab.
Click the Start Budget Tracker button.
Enter your monthly budget when prompted.
Enter your total expenses when prompted.
View the calculated remaining balance and budget status in the console.
6. Testing

The application should be tested with different budget and expense values, including valid numbers, empty input, cancelled prompts, invalid values, and expenses greater than the budget. The expected calculations and messages should be checked in the browser console.

7. Conclusion

The SpendWise project demonstrates the fundamentals of JavaScript, including variables, data types, user input, calculations, functions, conditional statements, event handling, and console output. It provides a foundation for developing more advanced budgeting features in the future.