import './App.css';
import { useState } from 'react';

import FormWrapper from './components/formwrapper';
import Navbar from './components/navbar';
import Wrapper from './components/wrapper';
import NameContext from './context/namecontext';


function App() {
  const [name, setName] = useState("");
  return (
    <Wrapper>
      <NameContext.Provider value={{name, setName}}>
        <Navbar/>
        <FormWrapper/>
      </NameContext.Provider>
    </Wrapper>
  );
}

export default App;
