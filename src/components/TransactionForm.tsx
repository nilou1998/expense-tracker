import { useState } from "react";
import type { OnAddTransactionProps, Transaction } from "../types/transaction";
import type { SubmitEvent } from "react";

function TransactionForm({ onAddTransaction }: OnAddTransactionProps) {
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"income" | "expense">("income");

  const onSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTransaction: Transaction = {
      id: Date.now().toString(),
      title,
      amount: Number(amount),
      type,
    };

    if (
      newTransaction.title.trim().length <= 0 ||
      newTransaction.amount === 0
    ) {
      return;
    }

    onAddTransaction(newTransaction);
    setTitle("");
    setAmount("");
    setType("income");

  };



  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-text mb-4">
        Add New Transaction
      </h2>
      <form onSubmit={onSubmit} className="flex flex-col space-y-4">
        <div>
          <label
            className="text-sm font-medium text-text mb-1 block"
            htmlFor="title"
          >
            Title
          </label>
          <input
            id="title"
            placeholder="e.g. Grocery shopping"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label
            className="text-sm font-medium text-text mb-1 block"
            htmlFor="amount"
          >
            Amount
          </label>
          <input
            id="amount"
            placeholder="0.00"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <div>
          <label
            className="text-sm font-medium text-text mb-1 block"
            htmlFor="type"
          >
            Type
          </label>
          <select
            id="type"
            value={type}
            onChange={(event) =>
              setType(event.target.value as "income" | "expense")
            }
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10
"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white rounded-xl py-3 font-medium transition-all hover:opacity-90 active:scale-[0.99]"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}
export default TransactionForm;
