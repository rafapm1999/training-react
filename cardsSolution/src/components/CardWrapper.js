import './CardWrapper.css';
function CardWrapper(props) {
  return (
    <div className="parentMain">
       {props.child}
    </div>
  );
}

export default CardWrapper;
