import { useEffect, useState } from "react";
import "./App.css";
import BalanceCard from "./components/BalanceCard";
import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import type { Transaction } from "./types/transaction";

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    try {
      const stored = localStorage.getItem("transactions");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState<"all" | "income" | "expense">("all");

  function addTransaction(newTransaction: Transaction) {
    setTransactions((prev) => [...prev, newTransaction]);
  }

  const totalIncome = transactions.reduce((total, transaction) => {
    if (transaction.type === "income") {
      return total + transaction.amount;
    }
    return total;
  }, 0);

  const totalExpense = transactions.reduce((total, transaction) => {
    if (transaction.type === "expense") {
      return total + transaction.amount;
    }
    return total;
  }, 0);

  const balance = totalIncome - totalExpense;

  function deletTransaction(id: string) {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id,
    );
    setTransactions(updatedTransactions);
  }

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const filteredTransaction = transactions.filter((t) => {
    if (filter === "all") return transactions;
    return t.type === filter;
  });

  return (
    <div className="flex justify-center items-center bg-background min-h-screen p-4">
      <div className="max-w-md w-full bg-white p-6 flex flex-col space-y-6">
        <Header />
        <BalanceCard
          totalIncome={totalIncome}
          totalExpense={totalExpense}
          balance={balance}
        />
        <div className="flex gap-2 bg-background p-1 rounded-xl border border-border">
          <button
            onClick={() => setFilter("all")}
            className={`flex-1 px-3 py-2 text-sm rounded-lg transition-all ${
              filter === "all"
                ? "bg-primary text-white shadow-sm"
                : "text-muted hover:text-text"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("income")}
            className={`flex-1 px-3 py-2 text-sm rounded-lg transition-all ${
              filter === "income"
                ? "bg-income text-white shadow-sm"
                : "text-muted hover:text-text"
            }`}
          >
            Income
          </button>

          <button
            onClick={() => setFilter("expense")}
            className={`flex-1 px-3 py-2 text-sm rounded-lg transition-all ${
              filter === "expense"
                ? "bg-expense text-white shadow-sm"
                : "text-muted hover:text-text"
            }`}
          >
            Expense
          </button>
        </div>
        <TransactionForm onAddTransaction={addTransaction} />
        <TransactionList
          transactions={filteredTransaction}
          onDeleteTransaction={deletTransaction}
        />
      </div>
    </div>
  );
}

export default App;
