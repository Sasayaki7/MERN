import logo from './logo.svg';
import './App.css';
import PersonCard from './components/personcard';

function App() {
  return (
    <div className="CardShower">
      <PersonCard firstName= "Jane" lastName="Doe" age={45} hairColor="Black"/>
      <PersonCard firstName= "Charlotte" lastName="LinLin" age={66} hairColor="Pink"/>
      <PersonCard firstName= "Edward" lastName="Newgate" age={72} hairColor="White"/>
      <PersonCard firstName= "Marshal D." lastName="Teach" age={55} hairColor="Black"/>

    </div>
  );
}

export default App;

