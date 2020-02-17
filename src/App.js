import React from 'react';
import { ProductComparison } from './components/ProductComparison';
import { Container, Button } from 'react-bootstrap';
import Footer from './components/Footer';
import {HashRouter, Route} from 'react-router-dom';
import { ProductPage } from './components/ProductPage';
import { Schedule } from './components/Schedule';
import { Menu } from './components/menu';
import {useSpring, animated} from 'react-spring';


function App() {
  const jumpIn = useSpring({
    from: {transform:'translate3d(0,0,0)', opacity:0}, transform:'translate3d(0,0,0)',opacity:1
})
  return (
      
      <HashRouter>
      <Menu/>
      <Route exact path="/" component={()=><ProductComparison/>}/>
      <Route exact path="/schedule" component={()=> <animated.div style={jumpIn}><Schedule/></animated.div>}/>
      <Route exact path="/keyboard/:SKU" component={()=><ProductPage/>}/>
      <Footer/>
      </HashRouter>
   
  );
}

export default App;
