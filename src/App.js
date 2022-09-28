import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import React from 'react';
import ReactSlider from 'react-slider';
import Home from "./components/Home";
import TicTacToe from "./components/TicTacToe";

function App(){
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" element={<Home/>} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/tictactoe" element={<TicTacToe/>} />

            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          {/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
        </Routes>
    </>
  );
}

export default App;
