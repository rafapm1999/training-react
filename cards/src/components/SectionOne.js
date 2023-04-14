import './SectionOne.css';
import myImage from "./foto.jpg"

function SectionOne() {
  return (
    <div className="main">
      <div className="sectionLeft">
        <img src={myImage} alt="myImage"/>
      </div>

      <div className="sectionMiddle">
        <h1>MR. ROBERT</h1>
        <h2>UI/UX Designer</h2>
        <span className="verified">Verified</span>
        <div className="buttons">
        <button>a</button>
        <button>b</button>
        <button>c</button>
        </div>
      </div>

      <div className="sectionRight">
        <button></button>
      </div>
      
    </div>
  );
}

export default SectionOne;
