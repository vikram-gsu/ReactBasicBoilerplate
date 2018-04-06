class Header extends React.Component{
  constructor(){
    super()
  }
  render(){
    console.log(this.props)
    return (
      <div>
      <h1>Indecision App</h1>
      <h2>Randomize your life!</h2>
      </div>
    )
  }
}
// class RemoveAllOptions extends React.Component{
//   render(){
//     return (
//       <div>
//         <form onSubmit={this.onFormSubmit}>

//         </form>
//       </div>
//     );
//   }
// }
class Options extends React.Component{
  
  render(){
    return (
      <div>
      <h3>Here are your options:</h3>
      <ul>
      {this.props.optionItems.map(o => <Option key={o} listitem={o} />)}
      </ul>
      </div>
    )
  }
}

class Option extends React.Component { 
  render(){
    return (
      <li>{this.props.listitem}</li>
    )
  }
}

class AddOption extends React.Component {
  onFormSubmit(e){
    e.preventDefault();
    console.log(e.target.option.value);
  }
  removeAll(e){
    e.preventDefault();
    this.props.optionItems = []
    console.log('Remove all clicked');
  }
  render(){
    return (
      <div>
      <form onSubmit={this.onFormSubmit}>
      <input type="text" name="option"></input>
      <button>Add Option</button>
      <button onClick={this.removeAll.bind(this)}>RemoveAll</button>
      </form>
      </div>
    )
  }
}

class Indecision extends React.Component{
  render(){ 
    const options = ['Option 1', 'Option 2', 'Option 4']
    return (<div>
      <Header title='test'/>
      <Options optionItems = {options}/>
      <AddOption optionItems = {options}/>
      </div>
    )}
  }
  ReactDOM.render(<Indecision />, document.getElementById('app'))