import './ItemContent.css';

function ItemContent(props) {
  return (
    <div className='center'>{props.children}</div>
  );
}

export default ItemContent;
