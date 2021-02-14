import './App.css';
import React from 'react';
import {random} from 'lodash';
import Button from './components/Button';

const QOUTE_URL = "'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json'"
  
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      qoutes: [1,1,1,1], 
      selectedQouteIndex: null,
    }
    this.selectedQouteIndex = this.selectedQouteIndex.bind(this);
  }


  get selectedQoute() {
      if(!this.state.qoutes.lenght || Number.isInteger(this.state.selectedQouteIndex)){
        return;
      }
      return this.state.qoutes[this.state.selectedQouteIndex];
  }


  componentDidMount() {
    fetch(QOUTE_URL)
    .then(data => data.json())
    .then(q => this.setState({qoutes:q}, () => {
      this.setState({selectedQouteIndex: this.selectedQouteIndex()})
    }));
  }


  nextQouteClickHandler() {
    console.log('hi');
  }

  selectedQouteIndex() {
      if(!this.state.qoutes.length) {
        return;
      }
      return random(0, this.state.qoutes.length -1);
  }

  render() {
    console.log(this.state.selectedQouteIndex);
    return (
      <div className="App" id="qoute-box">
        {this.selectedQoute ? `"${this.selectedQoute.qoute}"- ${this.selectedQoute.author}` : ''}
        <Button buttonDisplayName="Next Qoute" clickHandler={this.nextQouteClickHandler} />
        <h1>H!</h1>
      </div>
    );
  }
}

export default App;
