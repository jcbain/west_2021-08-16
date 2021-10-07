import { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      name: "james"
    }
    this.increment = this.increment.bind(this);
  }

  increment(){
    this.setState({counter: this.state.counter + 1})
  }

  render(){

    return (
      <div>
        <h2>The Class-Based Component!!!</h2>
        <p>{this.props.someProp}</p>
        <p>Name is: {this.state.name}</p>
        <p>the counter is currently at: {this.state.counter}</p>
        <button onClick={this.increment}>+1</button> 
        {/* arrow function way */}
        {/* <button onClick={() => this.setState({counter: this.state.counter + 1})}>+1</button>  */}
      </div>
    )
  }

}

export default ClassComponent;