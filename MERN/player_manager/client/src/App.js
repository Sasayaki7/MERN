import logo from './logo.svg';
import './App.css';
import Selector from './components/selector';
import PlayerManager from './components/playerManager';
import StatusManager from './components/statusManager';
import PlayerForm from './components/addPlayer';
import PlayerList from './components/playerList';
import PlayerStatusList from './components/playerStatusList';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Selector items = {[
        {text: 'Manage Players', route: '/players'}, 
        {text: 'Manage Player Status', route: '/status/game/1'}]
      }/>
      <Router>
        <PlayerManager path='/players'>
          <PlayerList path='list'/>
          <PlayerForm path='addplayer'/>
        </PlayerManager>
        <StatusManager path='/status/game/:id'/>
      </Router>
    </div>
  );
}

export default App;
