import {faChampagneGlasses, 
  faSquare, 
  faBurger, 
  faGlassWater, 
  faArrowDownLong, 
  faArrowUpLong, 
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

function Expenses(props) {

  const [expenses, setNewExpenses] = useState(itemList)

  let expense = {}

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

  useEffect(() => {
    if (Object.keys(props.onNewExpense).length > 0) {
      expense = {
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
      setNewExpenses([...expenses, expense])
    };
  }, [props.onNewExpense])

  



  return (
    <div>
      <ExpensesFilter months={expenses}></ExpensesFilter>
    <Wrapper content={
      expenses.map((item, index) => {
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
    })
    }/> 
    </div>    
  );
};

export default Expenses;
