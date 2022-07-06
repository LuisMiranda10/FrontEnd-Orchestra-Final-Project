import React from 'react';
import Cont_Page from './components/Cont_Page';
import './App.css'
import { AiOutlineArrowLeft } from "react-icons/ai"
import { IconContext } from "react-icons"

function App() {
  return (
    <div className="App">
        <IconContext.Provider value={{ size: "30" }}>
                    <AiOutlineArrowLeft />
        </IconContext.Provider>
        <Cont_Page />
    </div>
  );
}

export default App;
