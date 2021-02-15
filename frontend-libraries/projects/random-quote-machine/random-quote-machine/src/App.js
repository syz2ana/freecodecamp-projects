import './App.css';
import React from 'react';
import {random} from 'lodash';
import Button from './components/Button';
import QouteMachine from './components/QouteMachine';

const QOUTE_URL = "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
  
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      qoutes: [],
      qoute: '',
      author:'',
      selectedQouteIndex: null,
    }
    this.assignNewQouteIndex = this.assignNewQouteIndex.bind(this);  
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
    .then(res => this.setState({qoutes:res}, this.assignNewQouteIndex)); 
  } 

  genereateNewQouteIndex() {
      if(!this.state.qoutes.length) {
        return undefined;
      }
      return random(0, this.state.qoutes.length -1);
  }

  assignNewQouteIndex () {
    this.setState({
      selectedQouteIndex: this.genereateNewQouteIndex(),
    });
    
  }

  render() {
    
    console.log(this.state.qoutes[this.state.selectedQouteIndex]);
    console.log(this.state.selectedQouteIndex);
    console.log("selectedQoute: " + this.selectedQoute); 
    return (
      <div className="App" id="qoute-box">
          <QouteMachine
           selectedQoute={this.selectedQoute}
           assignNewQouteIndex={this.assignNewQouteIndex}/>
        {
    console.log("selectedQoute: " + this.selectedQoute) }
      </div>
    );
  }
}

export default App;
