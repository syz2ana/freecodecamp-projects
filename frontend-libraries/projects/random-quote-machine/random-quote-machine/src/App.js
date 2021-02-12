import './App.css';
import React from 'react';
import Button from './components/Button';
class App extends React.Component {
nextQouteClickHandler() {
  console.log('hi');
}

  render() {
    return (
      <div className="App" id="qoute-box">
        <Button buttonDisplayName="Next Qoute" clickHandler={this.nextQouteClickHandler}/>
      </div>
    );
  }
}

export default App;
