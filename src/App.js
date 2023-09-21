import React, {useState} from 'react';
import "./App.css";
import Navbar from "./Componenets/Navbar";
import TextForm from "./Componenets/TextForm";
import Alert from './Componenets/Alert';
import About from './Componenets/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

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
      // document.title = 'TextEasy - Dark Mode';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextEasy - Home'
    }
  }
  return (
    <div className="App">
      <Router>
      <Navbar title="TextEasy" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about"
            element = {<About mode={mode}/>}
          />
          <Route path="/"
          element = {<TextForm heading="Welcome to TextEasy - the ultimate word counter" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>}
          />
        </Routes>
{/* <TextForm heading="Welcome to TextEasy - the ultimate word counter" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>  */}
          
      </div>
      </Router>
    </div>
  );
}

export default App;
