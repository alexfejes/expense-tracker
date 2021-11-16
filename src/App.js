import Header from "./components/Header"
import React from "react"
import Balance from "./components/Balance"
import IncomeExpenses from "./components/IncomeExpenses"
import { TransactionList }  from "./components/TransactionList"
import  AddTransaction   from "./components/AddTransaction"
import { GlobalProvider }  from "./context/GlobalState"
import NightMode from "./components/NightMode"
import './App.css'

function App() {
  return (
    <div>
      <NightMode />
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction/>
        
      </div>
    </GlobalProvider>
    </div>
  );
}

export default App;
