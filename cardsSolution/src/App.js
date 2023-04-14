//import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import CardWrapper from "./components/CardWrapper";
import photo from "./assets/img/foto.jpg";

function App() {
  return (
      <CardWrapper>
        <div className='img-container'>
          <div className="img-wrapper">
            <img src={photo} alt='Freelancer-one'/>
          </div>
        </div>
      </CardWrapper>
  );
}

export default App;
