class Results extends React.Component {
    
    constructor(props) {
      super(props);
    }
  
    render() {
       return (
         <div>
          {
            this.props.fiftyFifty == 0 ? <h1>You Lose!</h1> : <h1>You Win!</h1>
          }
          </div>
       );
       
    }
  }
  
  class GameOfChance extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState({
        counter: ++this.state.counter  
      });
    }

    render() {
      const expression = Math.random() >=.5; 
      return (
        <div>
          <button onClick={this.handleClick}>Play Again</button>
          <Results fiftyFifty={expression}/>
          <p>{'Turn: ' + this.state.counter}</p>
        </div>
      );
    }

  }