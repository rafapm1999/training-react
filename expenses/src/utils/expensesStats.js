/* Este código en React define una función llamada "expensesStats" que toma un parámetro "itemList" que es una lista de elementos con información de gastos e ingresos.

La función recorre todos los elementos de la lista y calcula el total de ingresos y gastos, luego los convierte en porcentajes para mostrar los resultados en un gráfico de estadísticas.

Si la lista de elementos está vacía, la función devuelve un arreglo con dos valores "0" ya que no hay gastos ni ingresos que procesar.

En resumen, la función "expensesStats" tiene como objetivo calcular el porcentaje de ingresos y gastos a partir de una lista de elementos con información financiera, lo que puede ser utilizado para mostrar información estadística en una interfaz de usuario. */



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