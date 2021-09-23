import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import Products from './Products';
import About from './About';
import Home from './Home';
import Header from './Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart';
const App = () => {
  
  return (
    <div>
    <Header/>
    <Switch>
      <Route exact path ="/" component ={Home}></Route>
      <Route exact path ="/Contact" component ={Contact}></Route>
      <Route exact path ="/About" component ={About}></Route>
      <Route exact path ="/Products" component ={Products}></Route>
      <Route exact path ="/Cart" component ={Cart}></Route>
      <Redirect path="/" />
    </Switch>
        </div>
  )
}

export default App;
