import './App.css';
import {Router} from '@reach/router';
import Number from './components/number';
import Home from './components/home';
import WordColor from './components/wordcolor';

function App() {
  return (
    <div>
      <Router>
        <Home path="/home"/>
        <Number path="/:id"/>
        <WordColor path="/:word/:forecolor/:backcolor"/>
      </Router>
    </div>
  );
}

export default App;
