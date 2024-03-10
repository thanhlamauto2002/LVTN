import logo from './logo.svg';
import './App.scss';
import MyComponent from './Test/MyComponent';
//import ListToDo from './ToDos/ListToDo';
import Nav from './Navigation/Nav';
import Home from './Home/Home';
import Test from './Test/Test';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Alarm from './Alarm/Alarm';
import Login from './Login/Login';
import About from './About/About';
import Contact from './Contact/Contact';
import Terminal1 from "./Terminal/Terminal1/Terminal1";
import Terminal2 from "./Terminal/Terminal2/Terminal2";
import Terminal3 from "./Terminal/Terminal3/Terminal3";
function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <header className="App-header">

          <div>
            <Nav></Nav>

          </div>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/*<ListToDo></ListToDo>*/}
          <Switch>
            <Route path="/" exact>
              <Home></Home>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/alarm">
              <Alarm></Alarm>
            </Route>
            <Route path="/terminal1">
              <Terminal1></Terminal1>
            </Route>
            <Route path="/terminal2">
              <Terminal2></Terminal2>
            </Route>
            <Route path="/terminal3">
              <Terminal3></Terminal3>
            </Route>
            <Route path="/test">
              <Test></Test>
            </Route>
          </Switch>
        </header>

      </div>

    </BrowserRouter>
  );
}

export default App;
