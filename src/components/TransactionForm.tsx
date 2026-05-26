function TransactionForm() {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-text mb-4">
        Add New Transaction
      </h2>
      <form className="flex flex-col space-y-4 ">
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
            type="text"
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
            className=" w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10
"
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>
        <button className="w-full bg-primary text-white rounded-xl py-3 font-medium transition-all hover:opacity-90 active:scale-[0.99]">
          Add Transaction
        </button>
      </form>
    </div>
  );
}
export default TransactionForm;
