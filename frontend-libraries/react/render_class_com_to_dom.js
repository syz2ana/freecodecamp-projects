class Fruits extends React.Component {
    constructor(props) {
        super(props);
      }

      render(){
          return(
              <div> 
                  <h2>
                      Fruits
                  </h2>
                  <ul>
                      <li>Apples</li>
                      <li>Oranges</li>
                      <li>Bananas</li>
                  </ul>
              </div>
          );
      }
}

class Vegetables extends React.Component {
    constructor(props) {
        super(props);
      }

      render(){
          return(
              <div>
                  <h2>Vegetables</h2>
                  <ul>
                      <li>Tomatoes</li>
                      <li>Cucumbers</li>
                      <li>Carrots</li>
                  </ul>  
              </div>
          );
      }
}

class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div id="challenge-node">
          <h1>Types of Food:</h1>
            <Fruits/>
            <Vegetables/>
        </div>
      );
    }
  };
  
  ReactDOM.render(<TypesOfFood/>,document.getElementById('challenge-node'));