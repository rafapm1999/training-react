import './Welcome.css';
import NewDate from './NewDate';
import Person from './Person';
import Wrapper from './Wrapper';

function Welcome(props) {
  const data = {
    dni: Math.random().toString().substring(2,10) + 
    String.fromCharCode(Math.floor(Math.random() * 90 + 65)).toUpperCase(),
    name: props.name
  }
  return (
    <Wrapper>
        <h1>Hello, {props.name}</h1>
        <NewDate today={props.today}/>
        <Person info = {data}/>
    </Wrapper>
  );
}

export default Welcome;
 