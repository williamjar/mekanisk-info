import React from 'react';
import { ProductComparison } from './components/ProductComparison';
import { Container, Button } from 'react-bootstrap';
import Footer from './components/Footer';
import {HashRouter, Route} from 'react-router-dom';
import { ProductPage } from './components/ProductPage';
import { Menu } from './components/menu';
import {useSpring, animated} from 'react-spring';
import { Help } from './components/Help';
import { Factory } from './components/Factory';
import {Downloads} from './components/Downloads'


function App() {
  const jumpIn = useSpring({
    from: {transform:'translate3d(0,0,0)', opacity:0}, transform:'translate3d(0,0,0)',opacity:1
})
  return (
      
      <HashRouter>
      <Menu/>
        <Route exact path="/" component={()=><animated.div style={jumpIn}><Factory/></animated.div>}/>
        <Route exact path="/productcomparison" component={()=> <animated.div style={jumpIn}><ProductComparison/></animated.div>}/>
        <Route exact path="/downloads" component={()=> <animated.div style={jumpIn}><Downloads/></animated.div>}/>
        <Route exact path="/keyboard/:SKU" component={()=><ProductPage/>}/>
      <Footer/>
      </HashRouter>
   
  );
}

export default App;
