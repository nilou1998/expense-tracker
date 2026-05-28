📌 Expense Tracker

A simple expense tracking application built with React, TypeScript, and Tailwind CSS.
It allows users to manage income and expenses with persistent storage using localStorage.

🔗 Live Demo

https://expense-tracker-gamma-lake-49.vercel.app/

⚙️ Tech Stack
React
TypeScript
Vite
Tailwind CSS
localStorage API
📦 Features
Add income and expense transactions
Delete transactions
Real-time balance calculation
Filter transactions by type (All / Income / Expense)
Persistent state with localStorage
Responsive UI design
🧱 Architecture
Component-based structure
Single source of truth for state (App level)
Derived state for calculations (balance, filters)
Unidirectional data flow
📁 Folder Structure
src/
│
├── components/
│ ├── BalanceCard.tsx
│ ├── Header.tsx
│ ├── TransactionForm.tsx
│ ├── TransactionList.tsx
│ ├── TransactionItem.tsx
│
├── types/
│ └── transaction.ts
│
├── App.tsx
├── main.tsx
🚀 Getting Started
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
npm install
npm run dev
📌 Notes
State is persisted using localStorage
No backend dependency
Fully client-side application
