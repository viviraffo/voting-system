# Unique Voting System (Logic Demo) 🗳️

A robust JavaScript implementation of a polling system designed to ensure data integrity and uniqueness using advanced ES6 data structures.

## 📝 Description
This project focuses purely on backend-style logic. It demonstrates how to manage complex relationships between data points (Poll Options and Voters) while preventing common issues like duplicate voting or unauthorized entries.

## 🛠️ Technical Highlights
- **Efficient Data Storage:** Uses a `Map` to store polling options, providing better performance and flexibility than standard objects.
- **Automatic De-duplication:** Leverages `Set` to store voter IDs. Since a `Set` only allows unique values, duplicate votes for the same option are handled natively by the data structure.
- **Input Validation:** Includes checks for empty options and existence of poll categories.
- **Result Aggregation:** A dedicated function to iterate through the data and generate a formatted report of the current standings.



## 💻 Tech Stack
- **JavaScript (ES6+)**
- **Data Structures:** `Map`, `Set`

## 🚀 How to Test
Since this is a logic-based script, you can test it directly in your browser's console:
1. Copy the code from `script.js`.
2. Open your browser's Developer Tools (F12).
3. Paste the code into the **Console** and press Enter.
4. Call `displayResults()` or try adding votes with `vote("OptionA", "voter1")`.
