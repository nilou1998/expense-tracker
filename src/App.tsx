import { useState } from "react";
import "./App.css";
import BalanceCard from "./components/BalanceCard";
import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import type { Transaction } from "./types/transaction";

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: "1",
      title: "Salary",
      amount: 2500,
      type: "income",
    },
    {
      id: "2",
      title: "Groceries",
      amount: 120,
      type: "expense",
    },
  ]);

  function addTransaction(newTransaction: Transaction) {
    setTransactions((prev) => [...prev, newTransaction]);
  }

  return (
    <div className="flex justify-center items-center bg-background min-h-screen p-4">
      <div className="max-w-md w-full bg-white p-6 flex flex-col space-y-6">
        <Header />
        <BalanceCard />
        <TransactionForm onAddTransaction={addTransaction} />
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
