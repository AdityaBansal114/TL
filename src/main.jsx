import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx';
import AboutUs from './components/AboutUs.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>

      <Routes>
        <Route path="/AboutUs" element={<AboutUs/>}></Route>
      </Routes>

      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
