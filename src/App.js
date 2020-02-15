import React from 'react';
import { ProductComparison } from './components/ProductComparison';
import { Menu } from './components/Menu';
import { Container, Button } from 'react-bootstrap';
import Footer from './components/Footer';
import {HashRouter, Route} from 'react-router-dom';
import { ProductPage } from './components/ProductPage';
import { Schedule } from './components/Schedule';


function App() {
  return (
    
      
      
      <HashRouter>
      <Menu/>
      <Route exact path="/" component={()=><ProductComparison/>}/>
      <Route exact path="/schedule" component={()=><Schedule/>}/>
      <Route exact path="/product/:name" component={()=><ProductPage/>}/>
      <Footer/>
      
      </HashRouter>
   
  );
}

export default App;
