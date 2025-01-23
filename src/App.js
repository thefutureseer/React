import React, {useState} from 'react';
import { myContextAPI, ParentComponent } from './stateManagement/contextAPI/context';
import FComponent from './components/functional/FComponent';
import ClassComponent from './components/class/ClassComponent';
import logo from './logo.svg';
import './styles/App.css';

// const myContextAPI = createContext();


function App() {
    //1) set up state for contextAPI
const [user, setUser] = useState({name:"Mr count", age: 20});

  return (
    <div className="App">
      <header className="App-header">
        <myContextAPI.Provider value={user}>
         <ParentComponent></ParentComponent>
        </myContextAPI.Provider>
        <FComponent message="Hello FComponent with virtual API / state / props"/>
        <ClassComponent message="Hello ClassComponent w vapi / s/ p"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
