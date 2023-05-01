import {faChampagneGlasses, 
  faSquare, 
  /* faBurger, 
  faGlassWater, 
  faArrowDownLong, 
  faArrowUpLong, */ 
  faBriefcase, 
  faCommentDollar, 
  faSackDollar,
  faCar,
  faBoltLightning} from "@fortawesome/free-solid-svg-icons";
import ItemCost from './items/ItemCost';
import ItemIcon from "./items/ItemIcon";
import ItemInfo from "./items/ItemInfo";
import {itemList, classesList} from "../itemsDB/items";
import ItemContainer from './wrappers/ItemContainer';
import Wrapper from "./wrappers/Wrapper";
import { useState } from 'react';
import { useEffect } from "react";
import ExpensesFilter from "./ExpensesFilter"
import {expensesStats} from "../utils/expensesStats";
import {monthToString} from "../utils/monthToString";
import InfoAlert from "./alerts/InfoAlert";

function Expenses(props) {
  const [filter, setFilter] = useState(monthToString(new Date().toLocaleDateString()));
  const [expenses, setNewExpenses] = useState(itemList);
  const filteredMonth = (month) => {
    setFilter(month)
  }

  let stats = [0,0]

  const getIcons = (category) => {
    switch (category) {
      case "incoming":
        return [faSquare, faBriefcase]
      case "transfer":
        return [faSquare, faSackDollar]
      case "car":
        return [faSquare, faCar]
      case "bizum":
        return [faSquare, faCommentDollar]
      case "bill":
        return [faSquare, faChampagneGlasses]
      case "electricity":
        return [faSquare, faBoltLightning]
    }
  };
  /* let expense = {} */
  let filteredMonths = []
  if (filter!=="") {
    filteredMonths = expenses.filter(
      (item) => monthToString(item.data.date)===filter);
      if (filteredMonths.length > 0) {
        stats = expensesStats(filteredMonths)
      } else {
        stats = [0, 0]
      }
  }

  useEffect(() => {
    if (Object.keys(props.onNewExpense).length > 0) {
      const expense = {
        icons: getIcons(props.onNewExpense.category),
        classesList: classesList[props.onNewExpense.category],
        data: {
          title: props.onNewExpense.title,
          date: new Date(Date.now()).toLocaleDateString()
        },
        money: {
          amount: props.onNewExpense.amount,
          income: props.onNewExpense.isIncome
        }
      };
      setNewExpenses([...expenses, expense]);
      props.onClearExpense()
    };
  }, [props.onNewExpense])

  



  return (
    <div>
      <ExpensesFilter onStats={stats} onSelectMonth={filteredMonth} month={expenses}></ExpensesFilter>
      <Wrapper content={
        /* expenses.map((item, index) => { */
          (filteredMonths.length > 0 && 
          filteredMonths.map((item, index) => {
          return (
          <ItemContainer key={index}>
            <ItemIcon 
              icons={item.icons} 
              classes={item.classesList}
            />
            <ItemInfo data={item.data}/>
            <ItemCost money={item.money}/>
        </ItemContainer>
          );
        })) || <InfoAlert info="No expenses availables."/>
      }
    /> 
  </div>    
  );
};

export default Expenses;
