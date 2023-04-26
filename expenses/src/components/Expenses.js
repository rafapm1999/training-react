import ItemCost from './items/ItemCost';
import ItemIcon from "./items/ItemIcon";
import ItemInfo from "./items/ItemInfo";
import {itemList} from "../itemsDB/items";
import ItemContainer from './wrappers/ItemContainer';
import Wrapper from "./wrappers/Wrapper";

function Expenses() {

  return (
    <Wrapper>
      {itemList.map((item) => {
        return (
        <ItemContainer>
          <ItemIcon 
            icons={item.icons} 
            classes={item.classesList}
          />
          <ItemInfo data={item.data}/>
          <ItemCost money={item.money}/>
      </ItemContainer>
      );
    })}
    </Wrapper>
  );
};

export default Expenses;
