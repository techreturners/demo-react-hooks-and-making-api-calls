import './App.css';
import Child1 from './components/Child1';

function App() {

  const name = "Becky";

  return (
    <div className="App">
      <h1>React Hooks and Making API Calls</h1>

      <Child1 name={name} />
    </div>
  );
}

export default App;
