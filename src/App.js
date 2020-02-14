import React from 'react';
import { ProductComparison } from './components/ProductComparison';
import { Menu } from './components/menu';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div>


      <Container fluid>
      <ProductComparison />
      </Container>
    </div>
  );
}

export default App;
