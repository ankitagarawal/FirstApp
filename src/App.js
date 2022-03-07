
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";




function App() {
  const [mode, setMode] = useState("light");  //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); 
  const showAlert = (message , type)=>{
    setAlert({
      msg: message,
      type: type
      })
      setTimeout(() => {
      setAlert(null); 
      }, 1500);
  }

  const toggleMode = () =>
  {
    if(mode === "dark")
    {
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode enabled","success");
      document.title= "Textarea- Light Mode Enabled";
    }
    else
    {
      setMode("dark");
      document.body.style.backgroundColor="grey";
      showAlert("Dark mode enabled","success");
      document.title="Textarea- DarkMode Enabled";
      
    }
  }
 
  return (
    <>
    {/* <Router> */}
    <Navbar mode={mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes>  */}
          {/* <Route path="/about" element={<About/>}> */}
            
          {/* </Route> */}
            {/* <Route path="/" element={<Textarea showAlert = {showAlert} heading="Enter your text to analyze" mode={mode}/>}> */}
           <Textarea showAlert = {showAlert} heading="Enter your text to analyze" mode={mode}/>
           <About/>
          {/* </Route> */}
          {/* </Routes> */}
   
    </div>
    {/* </Router> */}
    </>
    
  );
}

export default App;
