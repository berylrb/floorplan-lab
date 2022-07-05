import './App.css';
import Kitchen from './Kitchen';
import Bedroom from './Bedroom';
import LivingRoom from './LivingRoom';
import Bath from './Bath';





function App() {

  return (
    <div className="App">
        <Kitchen  />
        <Bedroom bedNum={1} />
        <Bedroom bedNum={2} />
        <Bedroom bedNum={3} />
        <LivingRoom />
    </div>
  );
}

export default App;
