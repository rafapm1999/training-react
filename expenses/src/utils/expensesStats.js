export const expensesStats = (itemList) => {
    let incomes = 0,
    expenses = 0,
    total = 0;
    if (itemList.length===0) {
        return [0,0]
    }
    itemList.forEach(element => {
        if (element.money.income) {
            incomes += element.money.amount;
        } else {
            expenses += element.money.amount;
        }
    });
    total = Math.abs(incomes) + Math.abs(expenses);
    let incomesPercentage = Math.round((incomes * 100 / total));
    let expensesPercentage = Math.round((expenses * 100 / total));
    return [incomesPercentage, expensesPercentage];
}