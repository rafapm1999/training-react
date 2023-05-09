import './App.css';
import { useReducer } from 'react';
import FilterReducer from './components/FilterReducer';
import CounterReduce from './components/CounterReduce';

function App() {
  return (
    <CounterReduce></CounterReduce>
  );
}

export default App;
