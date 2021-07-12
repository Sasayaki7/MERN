import './App.css';
import React, {useState} from 'react'
import Tab from './components/tabs'
import Display from './components/display'

const tab = [{label: "First Tab", content: 'asdfghj'}, {label: 'Sasayaki', content: 'VoidShredder'}]


function App() {
  const [tabContent, setTabContent] = useState("")

  return (
    <div>
      <Tab setTabContent={setTabContent} tab={tab}/>
      <Display content = {tabContent}/>
    </div>
  );
}

export default App;
