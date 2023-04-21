import './Expenses.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faChampagneGlasses, faSquare, faBurger, faGlassWater, faArrowDownLong, faArrowUpLong, faBriefcase, faCommentDollar, faSackDollar} from "@fortawesome/free-solid-svg-icons"


function Expenses() {
  return (
    <div className="wrapper">
        <div className="item-container">
            <div className="item-icon"></div>
            <div className="item-info"></div>
            <div className="item-cost"></div>
        </div>
    </div>
  )
};

export default Expenses;
