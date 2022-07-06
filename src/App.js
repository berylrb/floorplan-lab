import './App.css';
import Kitchen from './Kitchen';
import Bedroom from './Bedroom';
import LivingRoom from './LivingRoom';
import Bath from './Bath';





function App() {

  return (
    <div className="App">
        <Kitchen  />
        <Bath size="Half" />
        <Bedroom bedNum={1} />
        <Bedroom bedNum={2} />
        <Bedroom bedNum={3} />
        <Bath size="Full" />
        <LivingRoom />
    </div>
  );
}

export default App;
