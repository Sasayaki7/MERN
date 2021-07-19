import {Router} from '@reach/router';
import './App.css';
import { useState } from 'react';

import Main from './views/main';
import UpdateProduct from './views/updateProduct';
import ProductDetail from './views/productDetail';
import ProductFormContext from './context/productFormContext';



function App() {
  const [formState, setFormState] = useState({title: '', price: '', description: ''});

  return (
    <div className="App">

      <ProductFormContext.Provider  value={{formState, setFormState}}>
        <Router>
          <Main path='products'/>
          <ProductDetail path='products/:id'/>
          <UpdateProduct path = 'products/:id/edit'/>
        </Router>
      </ProductFormContext.Provider>
    </div>
  );
}

export default App;
