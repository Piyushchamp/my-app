import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/alert'
// import About from './components/About'
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {

  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(36 74 104)";
      showalert("Dark mode is enabled", "success : ");
      document.title = 'TextUtils - Dark Mode'
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode is enabled", "success : ");
      document.title = 'TextUtils - Light Mode'
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtills" home="Home" about="About Us" /> */}
      {/* <Router> */}
        <Navbar title="TextUtills" mode={mode} toggle={togglemode} />
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes>
            <Route path='/' element={<TextForm showalert={showalert} heading="Enter Text To Analyze" mode={mode} />} />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes> */}
          <TextForm showalert={showalert} heading="Enter Text To Analyze" mode={mode}/>
        </div>
    {/* </Router > */}
    </>
  );
}

export default App;