import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faStar, faDollarSign, faAddressBook, faPhoneFlip, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import CardWrapper from "./components/CardWrapper";
import photo from "./assets/img/foto2.jpg";

function App() {

  const freelancer = [
    {
      id: 0,
      title: "Mr",
      lastName: "Robert",
      role: "UI/UX Designer",
      fee: 85,
      reviews: 105
    },
  ]
  return (
    <div className='card-container'>
      <CardWrapper>
        <div className='img-container'>
          <div className="img-wrapper">
            <img src={photo} alt='Freelancer-one'/>
            <span className="dot"></span>
          </div>
        </div>
        <div className="info-container">
          <h3>MR.ROBERT</h3>
          <p>UI/UX Designer</p>
          <div className="hire">
            <div>
              Rate: <span className="price">$85/hr</span>
            </div>
            <button className="hire-button">Hire Me</button>
          </div>
          <div className="rating">
            <div>5.0</div>
            <div>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
            </div>
            <div>(105 Reviews)</div>
          </div>
          <div className="icons">
          <div className="verified">
            <FontAwesomeIcon icon={faCircleCheck}/>
            <span>Verified</span>
          </div>
          <span className='circle available'>
          <FontAwesomeIcon icon={faDollarSign}/>
          </span>
          <span className='circle available'>
          <FontAwesomeIcon icon={faEnvelope}/>
          </span>
          <span className='circle not-available'>
          <FontAwesomeIcon icon={faAddressBook}/>
          </span>
          <span className='circle not-available'>
          <FontAwesomeIcon icon={faPhoneFlip}/>
          </span>
          </div>
        </div>
      </CardWrapper>
      </div>
  );
}

export default App;
