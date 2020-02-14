import React from 'react';
import { ProductComparison } from './components/ProductComparison';
import { Menu } from './components/menu';
import { Container, Button } from 'react-bootstrap';
import Footer from './components/Footer';


function App() {
  return (
    <div>

      <Menu/>
      <ProductComparison />
      <Footer/>
      
    </div>
  );
}

export default App;
