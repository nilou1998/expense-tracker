import type { TransactionListProps } from "../types/transaction";
function TransactionList({ transactions }: TransactionListProps) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
      <h3 className="text-sm font-medium text-muted mb-4">
        Recent Transactions
      </h3>

      {transactions.length === 0 ? (
        <p className="text-sm text-muted text-center py-6">
          No transactions yet
        </p>
      ) : (
        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between border-b border-border pb-3 last:border-b-0"
            >
              <div className="flex flex-col">
                <p className="text-sm font-medium text-text">
                  {transaction.title}
                </p>
                <p className="text-xs text-muted">{transaction.type}</p>
              </div>
              <p
                className={`text-sm font-semibold ${
                  transaction.type === "income" ? "text-income" : "text-expense"
                }`}
              >
                {transaction.type === "income" ? "+" : "-"}
                {transaction.amount}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default TransactionList;
