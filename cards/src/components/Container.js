import './Container.css';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
function Container() {
  return (
    <div className="parentMain">
        <SectionOne></SectionOne>
        <SectionTwo></SectionTwo>
    </div>
  );
}

export default Container;
