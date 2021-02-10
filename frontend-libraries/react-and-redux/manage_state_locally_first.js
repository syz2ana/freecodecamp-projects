class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    }
  
    handleChange (event) {
      this.setState({
        input: event.target.value
      })
    }
  
    submitMessage (event) {
      event.preventDefault();
        const currentInput = this.state.input;
        this.setState({  
          input: '',
          messages: [...this.state.messages, currentInput]
        })
    }
  
    render() {
      const msgs = this.state.messages.map(i => <li>{i}</li>)
      return (
        <div>
          <h2>Type in a new Message:</h2>
          <input onChange={this.handleChange} value={this.state.input}/>
          <button onClick={this.submitMessage}>Add message</button>
    <ul>
    {msgs}
    </ul> 
        </div>
      );
    }
  };