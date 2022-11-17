import { useState } from 'react';
import React from 'react'
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether the dark mode is enabled or not

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = ' #042743';
      showAlert('Dark mode has been enabled', 'success');
      document.title = "Text utils - Dark mode";

      // trigerring the title just like the facebook
      // setInterval(() => {
      //   document.title = "Text utils is amazing";
      // }, 1500);
      // setInterval(() => {
      //   document.title = "Install text utils official app now";
      // }, 2000);

    } else {
      setMode('light')
      document.body.style.backgroundColor = '#fff';
      showAlert('Light mode has been enabled', 'success')
      document.title = "Text utils - Light mode";

    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils2" aboutText="About TextUtils"/> */}
      {/* <Navbar /> */}

      <Router>
        <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
