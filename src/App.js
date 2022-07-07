import './App.css';
import Kitchen from './Kitchen';
import Bedroom from './Bedroom';
import LivingRoom from './LivingRoom';
import Bath from './Bath';





function App() {

  return (
    <div className="app">
      <div id="k-hb" className="centered-flex">
        <Kitchen  />
        <Bath size="Half" />
      </div>
      <div id="everything-else">
        <div id="lr-b1-b2">
          <LivingRoom />
          <div id="b1-b2">
            <Bedroom bedNum={1} />
            <Bedroom bedNum={2} />
          </div>
        </div>
        <div id="b3-fb">
          <Bedroom bedNum={3} />
          <Bath size="Full" />
        </div>
      </div>
    </div>
  );
}

export default App;
