import { Component } from 'react';

class LifecycleComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: "",
      interval: null
    }
    this.handleChange = this.handleChange.bind(this)

  }


  componentDidMount(){
    console.log("The component mounted");
    const interval = setInterval(() => {
      console.log("I am inside the interval!!!")
    }, 1000)
    this.setState({interval: interval})

    
    // axios.get('/some/endpoinrg', () => this.setState())
  }

  componentDidUpdate(prevProps, prevState){
    // if(prevProps.userId !== this.props.userId){
    //   axios.get(`/api/user/${this.props.userId}`)
    // }
    console.log('The Component updated!!!!!')
  }

  componentWillUnmount(){
    clearInterval(this.state.interval)
    console.log("component is about to unmount!")
  }

  handleChange(event){
    this.setState({searchTerm: event.target.value})
  }


  render() {
    return(
      <div>
        <h2>Lifecycle Component</h2>
        <p>The search term is {this.state.searchTerm}</p>
        <input 
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default LifecycleComponent