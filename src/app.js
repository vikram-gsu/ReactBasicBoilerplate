class Header extends React.Component{
  constructor(){
    super()
  }
  render(){
    // console.log(this.props)
    return (
      <div>
      <h1>Indecision App</h1>
      <h2>Randomize your life!</h2>
      </div>
    )
  }
}

class Action extends React.Component{
  render(){
    return (
      <div>
        <button 
          onClick={this.props.showRandomOption}
          disabled = {!this.props.hasOptions}
        >
          What should I do
        </button>
      </div>
    );
  }
}
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
  constructor(props){
    super(props);
    this.addOption = this.addOption.bind(this);

    this.state = {
      error: undefined
    }
  }
  addOption(e){
    e.preventDefault()
    const error = this.props.addOption(e.target.elements.option.value)
    this.setState(()=> ({error}))
  }
  render(){
    return (
      <div>
      <form onSubmit={this.addOption}>
      {this.state.error && <p>{this.state.error}</p>}
      <input type="text" name="option"></input>
      <button>Add Option</button>
      <button onClick={this.props.removeAll}>RemoveAll</button>
      </form>
      </div>
    )
  }
}

class Indecision extends React.Component{
  constructor(props){
    super(props);
    this.addOption = this.addOption.bind(this);
    this.removeAllOptions = this.removeAllOptions.bind(this);
    this.showRandomOption = this.showRandomOption.bind(this);
    this.state = {
      options: []
    }
  }
  showRandomOption(){
    const randNbr = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randNbr])
  }
  addOption(option){
    if (option.trim() == ''){
      return 'Please enter a valid value';
    }else if(this.state.options.indexOf(option) != -1){
      return 'This option already exists';
    }

    this.setState(prevState => ({
      options: [...prevState.options, option]
    }))
  }
  removeAllOptions(e){
    e.preventDefault();
    this.setState(() => ({
      options: []
    }));
  }

  render(){ 
    return (<div>
      <Header title='test'/>
      <Action showRandomOption = {this.showRandomOption} hasOptions = {this.state.options.length >0} />
      <Options optionItems = {this.state.options}/>
      <AddOption optionItems = {this.state.options} addOption = {this.addOption}
      removeAll = {this.removeAllOptions}/>

      </div>
    )}
  }
  ReactDOM.render(<Indecision />, document.getElementById('app'))