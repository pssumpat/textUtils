import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';

function App() {

  const [mode, setMode] = useState("light");

  const [modeBtnText, setModeBtnText] = useState("Enable DarkMode");

  const [alert, setAlert] = useState(null);

  const [themeColor, setThemeColor] = useState('#0b293f');

  const showAlert = (message, type) => {
    setAlert({
      message : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const settingThemeColor = (color) => {
    showAlert(`Theme color changes to ${color}`, "success");
    setThemeColor(color);
  }

  const toggleMode = () => {
     if(mode === 'light')
      {
        setMode("dark");
        setModeBtnText("Enable LightMode");
        document.body.style.backgroundColor = themeColor;
        showAlert("DarkMode Enabled", "success");
      }
      else
      {
        setMode('light');
        setModeBtnText("Enable DarkMode");
        document.body.style.backgroundColor = 'white';
        showAlert("LightMode Enabled", "success");
      }
    }

  return (
    <>
    <BrowserRouter>
        <Navbar title="TextUtils" about='About' mode={mode} toggleMode={toggleMode} modeBtnText={modeBtnText} settingThemeColor={settingThemeColor}/>
        <Alert alert={alert}/>
      <Routes>
        <Route path='/' element={<TextBox heading="Enter Your Text To Analyse" showAlert={showAlert} mode={mode}/>}/>
        <Route path='home' element={<TextBox heading="Enter Your Text To Analyse" showAlert={showAlert} mode={mode}/>}/>
        <Route path='about'element={<About/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
