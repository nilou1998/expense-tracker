import type { BalanceCardProps } from "../types/transaction";

function BalanceCard({ totalIncome, totalExpense, balance }: BalanceCardProps) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
      <h3 className="text-sm font-medium text-muted">Total Balance</h3>

      <p className="text-4xl font-bold text-text mt-2">${balance}</p>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="rounded-xl bg-background p-4 border border-border">
          <p className="text-sm text-muted">Income</p>

          <p className="text-xl font-semibold text-income mt-1">
            +${totalIncome}
          </p>
        </div>

        <div className="rounded-xl bg-background p-4 border border-border">
          <p className="text-sm text-muted">Expense</p>

          <p className="text-xl font-semibold text-expense mt-1">
            -${totalExpense}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BalanceCard;
