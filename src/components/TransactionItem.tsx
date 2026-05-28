import type { TransactionItemProps } from "../types/transaction";

function TransactionItem({
  transaction,
  onDeleteTransaction,
}: TransactionItemProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-border bg-white px-4 py-3 shadow-sm transition-all hover:shadow-md hover:scale-[1.01]">
      <div className="flex flex-col">
        <p className="text-sm font-semibold text-text">{transaction.title}</p>

        <p className="text-xs text-muted capitalize">{transaction.type}</p>
      </div>
      <div className="flex items-center gap-3">
        <p
          className={`text-sm font-bold ${
            transaction.type === "income" ? "text-income" : "text-expense"
          }`}
        >
          {transaction.type === "income" ? "+" : "-"}
          {transaction.amount}
        </p>

        <button
          onClick={() => onDeleteTransaction(transaction.id)}
          className="text-xs text-muted hover:text-expense transition-colors cursor-pointer"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default TransactionItem;
