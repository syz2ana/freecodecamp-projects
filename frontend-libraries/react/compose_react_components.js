class Fruits extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
            <NonCitrus/>
            <Citrus/>
        </div>
      );
    }
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
       super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          <Fruits/>
          <Vegetables />
        </div>
      );
    }
  };
  
  class Citrus extends React.Component {
    constructor(props){
      super(props);
    };
    render(){
      return(
        <div>
          <h2> Citrus </h2>
          <ul>
            <li>Lemon</li>
            <li>Lime</li>
            <li>Orange</li>
            <li>Grapefruit</li>
          </ul>
        </div>
      );
    }
  }
  
  class NonCitrus extends React.Component {
    constructor(props){
      super(props);
    };
    render(){
      return(
        <div>
          <h2> Non-Citrus </h2>
          <ul>
            <li>Apples</li>
            <li>Blueberries</li>
            <li>Strawberries</li>
            <li>Bananas</li>
          </ul>
        </div>
      );
    }
  }
  