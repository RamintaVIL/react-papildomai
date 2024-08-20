import './App.css';
import Card from './components/Card';


function App() {
  return (
    <div className="App">
      <Card name="ate pasauli" number={40} isActive={false} />
      <Card name="ate pasauli" number={35} isActive={true} />
      <Card name="ate pasauli" number={30} isActive={true} />
      <Card name="ate pasauli" number={25} isActive={false} />

    </div>
  );
}

export default App;
