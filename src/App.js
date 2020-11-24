import React from 'react';
import './App.css';

// function HelloWorld(props) {
//   console.log(props);
//   return(
//     <div id="hello">
//       <h3>{ props.subtitle }</h3>
//       { props.mytext }
//     </div>
//   );
// }

class HelloWorld extends React.Component {
  state = {
    show: true
  }

  toggleShow =() => {
    this.setState({show: !this.state.show})
  }
  
  render() {
    if (this.state.show) {
      return(
        <div id="hello">
          <h3>{ this.props.subtitle }</h3>
          { this.props.mytext }
          <button onClick={ this.toggleShow }>Toggle show</button>
        </div>
      )
    } else {
      return (
        <div>
          <h4>No elements</h4>
          <button onClick={ this.toggleShow }>Toggle show</button>
        </div>
      );
    }  
  }
}

function App() {
  return (
    <div>App component: 
      <HelloWorld mytext="Hello Victor" subtitle="1"/>  
      <HelloWorld mytext="Hello world" subtitle="2"/> 
      <HelloWorld mytext="Hello!!" subtitle="3"/>
    </div>
  );
}

export default App;
