import classes from './Wrapper.css';

function Wrapper(props) {
  return (
    <div className={classes.bgGrey}>{props.content}</div>
  );
}

export default Wrapper;
