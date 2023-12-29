import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'
import About from './Components/About';
import { useState } from 'react';

function App() {
  const [Mode, setMode] = useState('light');
  const toggleMode = () =>{
    if(Mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
      <Navbar Title= 'TextUtil' mode={Mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter a text to Anaylyse" mode={Mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
