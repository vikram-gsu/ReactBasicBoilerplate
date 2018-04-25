class Counter extends React.Component{
  constructor(props){
    super(props);
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.state = {
      count : 0
    }
  }
  componentDidMount(){
    //fetch data
    const lCount = parseInt(localStorage.getItem('count'), 10);
    const count = isNaN(lCount)?0:lCount
    this.setState(() => ({count}))
  }
  componentDidUpdate(prevProps, prevState){
    //saving data
    if(prevState.count !== this.state.count){
      localStorage.setItem('count', this.state.count)
    }
  }
  incrementCounter(e){
    e.preventDefault();
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
  decrementCounter(){
    this.setState(prevState => ({
      count: prevState.count -1
    }));

  }
  resetCounter(){
    this.setState(() => ({
      count: 0
    }));
  }
  render(){
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCounter}>+1</button>
        <button onClick = {this.decrementCounter}>-1</button>
        <button onClick = {this.resetCounter}>reset</button>
        </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'))

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
