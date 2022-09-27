import logo from './logo.svg';
import './App.css';
import React from 'react';
function SpinningLogo(props){
  if(props.speed===0){
    return (<img src={logo} className="App-logo" alt="logo" />);
  }else{
    return (<img src={logo} className="App-logo2" alt="logo" />);
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {speed: 0};
  }

  handleClick() {
    if(this.state.speed==0){
      this.setState({ speed:1 }) 
    }else{
      this.setState({ speed:0 }) 
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <SpinningLogo speed={this.state.speed}/>
          <p>
            Rotating atom bullshit
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React here mf
          </a>
          <button className='btn bg-primary' onClick={this.handleClick.bind(this)}>Click!</button>
        </header>
      </div>
    );
  }
  
}

export default App;
