import './ItemCost.css';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
  faArrowDownLong, 
  faArrowUpLong, 
  } from "@fortawesome/free-solid-svg-icons"

function ItemCost(props) {

  const sign = {
    plus:{
      entity: '&#43',
      unicode: '\u002b'
    },
    minus:{
      entity: '&#43',
      unicode: '\u002b'
    }
  }
  return (
    <div className="item-cost flex-20 expense fa-3x flex-center">
      <span>&#8722; $20</span>
      <FontAwesomeIcon icon={faArrowDownLong} className='m-left-20'/>
    </div>
  );
}

export default ItemCost;
