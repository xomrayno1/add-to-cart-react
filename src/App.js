 
import './App.css';
import ToDoApp from './components/ToDoApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage'
import Footer from './layout/Footer';
import Header from './layout/Header';
import { useState } from 'react';
import {Product} from './model/Product'
import {AppProvider} from './context/AppProvider'
import Cart from './components/Cart'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  const [products, setProducts] = useState([
    new Product(1,"IPhone X", 450,  "Có X"),
    new Product(2,"IPhone 8", 250,  "Có 8"),
    new Product(3,"IPhone 7", 150,  "Có 7"),
    new Product(4,"IPhone 6", 50,   "Có 6")
  ]);
  
  return (
    <AppProvider>
       <Router>
          <Header/>
            <Switch>
              <Route path="/home">
                <HomePage products={products}/>
              </Route>
              <Route path="/cart"  >
                  <Cart/>
              </Route>
              <Route exact path="/"   >
                <HomePage products={products}/>
              </Route>
            </Switch>
          <Footer/>
       </Router>
   
      
    </AppProvider>
  );
}

export default App;
