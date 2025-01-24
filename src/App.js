import React, {useState} from 'react';
import { MyContextProvider } from './stateManagement/contextAPI/MyContext';
import { ParentComponent } from './stateManagement/contextAPI/ParentComponent';
import FComponent from './components/functional/FComponent';
import ClassComponent from './components/class/ClassComponent';
import logo from './logo.svg';
import './styles/App.css';


function App() {
    //1) set up state for contextAPI
const [user, setUser] = useState({name:"Mr count", age: 20});

  return (
    <div className="App">
      <header className="App-header">
        <MyContextProvider>
         <ParentComponent/>
        </MyContextProvider>
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
