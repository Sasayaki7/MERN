import React from 'react';
import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';
import Main from './components/main';
import SubContents from './components/subcontents';
import Advertisement from './components/advertisement';
 
                
function App() {
  return (
    <div className="app">
        <Header />
        <div className="subline1">
          <Navigation />
          <Main>
            <div className="subline2">
              <SubContents />
              <SubContents />
              <SubContents />
            </div>
            <Advertisement />
          </Main>
        </div>
    </div>
  );
}
                
export default App;

