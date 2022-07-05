import './App.css';
import Kitchen from './Kitchen';

const floorplanStyle = {
  border: '2px solid rgb(27, 232, 243)',
  height: '50vh',
  width: '50vw',
  padding: '12px',
}

const kitchenStyle = {
  border: '2px solid rgb(126, 126, 251)',
  padding: '1px 26px',
  textAlign: 'center',
};

function App() {
  return (
    <div style={floorplanStyle} className="App">
        <div style={kitchenStyle}>
        <Kitchen  />
      </div>
    </div>
  );
}

export default App;
