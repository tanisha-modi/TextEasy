import React, {useState} from 'react';
import "./App.css";
import Navbar from "./Componenets/Navbar";
import TextForm from "./Componenets/TextForm";
import Alert from './Componenets/Alert';
// import About from './Componenets/About';

function App() {

  const [ mode, setMode] = useState('light');
  const [ alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message, 
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#404040';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextEasy - Dark Mode';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextEasy - Home'
    }
  }
  return (
    <div className="App">
      <Navbar title="TextEasy" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze below" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
      {/* <About/> */}
      </div>
    </div>
  );
}

export default App;
