import { useState } from "react/cjs/react.development";
import Exprenses from "./components/Expenses/Exprenses";
import NewExpensive from "./components/NewExpense/NewExpense";

const INIT = [
  {
    id: 'e1',
    title: 'Carta Igienica',
    amount: 2.49,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'Patate',
    amount: 1.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Pasticche Lavastoviglie',
    amount: 4.99,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Dentifricio',
    amount: 1.99,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INIT);
  const addExpenseDataHandler = data => {
    setExpenses((prevExpenses) => {
      return [data, ...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpensive onAddExpense={addExpenseDataHandler} />
      <Exprenses items={expenses} />
    </div>
  );
}

export default App;
