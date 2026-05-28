import type { TransactionListProps } from "../types/transaction";
import TransactionItem from "./TransactionItem";

function TransactionList({
  transactions,
  onDeleteTransaction,
}: TransactionListProps) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
      <h3 className="text-sm font-medium text-muted mb-4">
        Recent Transactions
      </h3>

      {transactions.length === 0 ? (
        <p className="text-sm text-muted text-center py-6">
          No transactions in this category
        </p>
      ) : (
        <div className="space-y-3">
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onDeleteTransaction={onDeleteTransaction}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default TransactionList;
