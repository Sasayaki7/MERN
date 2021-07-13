import './App.css';
import Form from './components/form';
import Planet from './components/planets';
import People from './components/people';
import Kenobi from './components/error';
import { Router } from '@reach/router';


function App() {
  return (
    <div>
      <Form/>
      <Router>
        <People path="/people/:id"/>
        <Planet path="/planets/:id"/>
        <Kenobi path="/error"/>
      </Router>
    </div>
  );
}

export default App;
