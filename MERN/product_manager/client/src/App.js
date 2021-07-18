import {Router} from '@reach/router';
import './App.css';

import Main from './views/main';
import UpdateProduct from './views/updateProduct';
import ProductDetail from './views/productDetail';



function App() {
  return (
    <div className="App">
        <Router>
          <Main path='products'/>
          <ProductDetail path='products/:id'/>
          <UpdateProduct path = 'products/:id/edit'/>
        </Router>
    </div>
  );
}

export default App;
