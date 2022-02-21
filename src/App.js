import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom" 
import Checkout from './Checkout.js';
import Login from './Login.js';
import { useEffect } from 'react';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import Payment from './Payment.js';
function App() {
  const [{user},dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("the user is >>>>",authUser);
      if (authUser) {
        dispatch({
          type : "SET_USER",
          user : authUser,
        })
      } else {
        dispatch({
          type : "SET_USER",
          user : null,
        })
      }
    })
  },[])
  return (
    <Router>
    <div className="app">
      <Switch>
      <Route exact path="/login">
      <Login/>
      </Route>
      <Route exact path="/checkout">
      <Header/>
      <Checkout/>
      </Route>
      <Route exact path="/payment">
      <Header/>
      <Payment/>
      </Route>
      <Route exact path="/">
      <Header/>
      <Home/>
      </Route>
      </Switch>
    
    </div>
    </Router>
  );
}

export default App;
