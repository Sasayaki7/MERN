import './App.css';
import { Router } from '@reach/router';
import Header from './components/header';
import Home from './views/home';
import NewAuthor from './views/newAuthor';
import EditAuthor from './views/editAuthor';


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Home path="/"/>
        <NewAuthor path="/new"/>
        <EditAuthor path="/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
