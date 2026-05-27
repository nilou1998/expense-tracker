export type Transaction = {
  id: string;
  title: string;
  amount: number;
  type: "income" | "expense";
};

export type TransactionListProps = { transactions: Transaction[] };

export type OnAddTransactionProps = {
  onAddTransaction: (transaction: Transaction) => void;
};
