export type Transaction = {
  id: string;
  title: string;
  amount: number;
  type: "income" | "expense";
};

export type TransactionListProps = {
  transactions: Transaction[];
  onDeleteTransaction: (id: string) => void;
};
export type TransactionItemProps = {
  transaction: Transaction;
  onDeleteTransaction: (id: string) => void;
};

export type OnAddTransactionProps = {
  onAddTransaction: (transaction: Transaction) => void;
};

export type BalanceCardProps = {
  balance: number;
  totalIncome: number;
  totalExpense: number;
};
