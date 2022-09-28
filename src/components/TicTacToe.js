import '../css/TicTacToe.css';

function square(){
  return ( <div className="smallBox"/> );
}

class TicTacToe extends React.Component(){
  render(){
    return (
      <div>
        <square/>
        Testt
      </div>
    );
  }
}

export default TicTacToe;