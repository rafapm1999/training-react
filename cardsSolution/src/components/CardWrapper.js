import './CardWrapper.css';
function CardWrapper(props) {
  return (
    <div className="parentMain">
       {props.children}
    </div>
  );
}

export default CardWrapper;
