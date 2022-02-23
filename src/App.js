import logo from './logo.svg';
import './App.css';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';

function App() {
  return (
    <div className="App">
      <p>This is for counter one</p>
      <CounterOne userName={'sanjay'} />
      <hr/>
      <p>This is for counter two</p>
      <CounterTwo userName={'kiran'}/>
      <hr/>
    </div>
  );
}

export default App;
