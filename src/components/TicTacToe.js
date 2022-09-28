import '../css/TicTacToe.css';
import React from 'react';

function Square(){
  return ( <div className="smallBox"/> );
}

class TicTacToe extends React.Component{
  render(){
    return (
      <div>
        <Square/>
        Testt
      </div>
    );
  }
}

export default TicTacToe;