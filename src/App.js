import './App.css';
import Child1 from './components/Child1'
import { createContext } from 'react';

export const Context = createContext('Default Value');

function App() {

  const value = 'My Context Value';

  return (
    <div className="App">
      <h1>React Hooks and Making API Calls</h1>

      <Context.Provider value={value}>
        <Child1 />
      </Context.Provider>
      
    </div>
  );
}

export default App;
