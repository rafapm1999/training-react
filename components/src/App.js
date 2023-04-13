import './App.css';
import Welcome from './components/Welcome';

function App() {
  let today = new Date(Date.now()).toLocaleDateString();
  return (
    <div className="main">
      <Welcome name="Rafa" today={today}/>
      <Welcome name="Anais" today={today}/>
      <Welcome name="Adri" today={today}/>
    </div>
  );
}

export default App;
