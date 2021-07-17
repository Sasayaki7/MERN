import Main from './views/main';
import {Router} from '@reach/router';
import './App.css';
import ProductDetail from './views/productDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path='products'/>
        <ProductDetail path='products/:id'/>
      </Router>
    </div>
  );
}

export default App;
