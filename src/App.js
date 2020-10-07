import React from 'react';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Receipt from './pages/Receipt';
import Error from './pages/Error';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CartIcon from './components/CartIcon';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <CartIcon/>
      {/*defining routes and corresponding components */}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/menu" component={Menu}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/receipt" component={Receipt}/>
        <Route component={Error}/>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
