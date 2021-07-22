import logo from './logo.svg';
import './App.css';
import HeadBar from './components/headBar';
import ChatLogin from './components/chatLogin';
import Chat from './components/chat';
import { useState } from 'react';


function App() {
  const [username, setUsername] = useState('')
  return (
    <div className="App">
      <HeadBar/>
      {username!==''? <Chat username={username}/>: <ChatLogin setUsername={setUsername}/>}
    </div>
  );
}

export default App;
