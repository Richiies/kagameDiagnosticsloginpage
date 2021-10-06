import {BrowserRouter, Route, Switch} from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import LoginForm from './components/LoginForm';

function App() {
  return(

    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component = {LoginForm} />
        <Route path= "/home" component = {Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
