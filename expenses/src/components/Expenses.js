import './Expenses.css';
import ItemCost from './items/ItemCost';
import ItemIcon from "./items/ItemIcon";
import ItemInfo from "./items/ItemInfo";
import {itemList} from "../itemsDB/items";
import ItemContainer from './wrappers/ItemContainer';
import Wrapper from "./wrappers/Wrapper";

function Expenses() {

  return (
    <Wrapper>
      {/* item */}
        <ItemContainer>
          <ItemIcon icons={itemList[0].icons}/>
          <ItemInfo data={itemList[0].data}/>
          <ItemCost money={itemList[0].money}/>
        </ItemContainer>
   

      {/* <div className="item-container">
            <div className="item-icon fa-4x flex-20 flex-center">
              <span className="fa-layers fa-fw fa-xl">
                <FontAwesomeIcon icon={faSquare} className='light-incoming'/>
                <FontAwesomeIcon icon={faBriefcase} inverse  transform="shrink-8" className='incoming'/>
              </span>
            </div>
            <div className="item-info flex-60">
              <h2>Freelancing Work</h2>
              <small className='expense-date'>31/08/21</small>
            </div>
            <div className="item-cost flex-20 income fa-3x flex-center">
              <span>&#43; $260</span>
              <FontAwesomeIcon icon={faArrowUpLong} className='m-left-20'/>
            </div>
        </div>
        
        <div className="item-container">
            <div className="item-icon fa-4x flex-20 flex-center">
              <span className="fa-layers fa-fw fa-xl">
                <FontAwesomeIcon icon={faSquare} className='light-bizum'/>
                <FontAwesomeIcon icon={faCommentDollar} inverse  transform="shrink-8" className='bizum'/>
              </span>
            </div>
            <div className="item-info flex-60">
              <h2>Send Bizum To a Friend</h2>
              <small className='expense-date'>01/09/21</small>
            </div>
            <div className="item-cost flex-20 expense fa-3x flex-center">
              <span>&#8722; $50</span>
              <FontAwesomeIcon icon={faArrowDownLong} className='m-left-20'/>
            </div>
        </div>
        
        <div className="item-container">
            <div className="item-icon fa-4x flex-20 flex-center">
              <span className="fa-layers fa-fw fa-xl">
                <FontAwesomeIcon icon={faSquare} className='light-incoming'/>
                <FontAwesomeIcon icon={faSackDollar} inverse  transform="shrink-8" className='incoming'/>
              </span>
            </div>
            <div className="item-info flex-60">
              <h2>PayRoll</h2>
              <small className='expense-date'>01/09/21</small>
            </div>
            <div className="item-cost flex-20 income fa-3x flex-center">
              <span>&#43; $2500</span>
              <FontAwesomeIcon icon={faArrowUpLong} className='m-left-20'/>
            </div>
        </div> */}


        {/* item (Ejemplo de como trabajas con varios iconos FontAwesome apilados) */} 
       {/*  <div className="item-container">
            <div className="item-icon fa-4x flex-20 flex-center">
              <span className="fa-layers fa-fw fa-xl">
                <FontAwesomeIcon icon={faSquare} className='light-electricity'/>
                <FontAwesomeIcon icon={faGlassWater} inverse  transform="shrink-9 right-1" className='bill'/>
                <FontAwesomeIcon icon={faBurger} inverse  transform="shrink-10 down-1 left-1" className='electricity'/>
              </span>
            </div>
            <div className="item-info flex-60">
              <h2>Burger</h2>
              <small className='expense-date'>04/09/21</small>
            </div>
            <div className="item-cost flex-20 expense fa-3x flex-center">
              <span>&#8722; $10</span>
              <FontAwesomeIcon icon={faArrowUpLong} className='m-left-20'/>
            </div>
        </div> */}
         </Wrapper>
  );
 
};

export default Expenses;
