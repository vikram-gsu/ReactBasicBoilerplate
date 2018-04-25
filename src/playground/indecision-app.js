
const Header = props => (
  <div>
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
    </div>
);

Header.defaultProps = {
  title: 'Indecision App'
};

const Action = (props) => (
  <div>
    <button 
      onClick={props.showRandomOption}
      disabled = {!props.hasOptions}
    >
      What should I do
    </button>
  </div>
);

const Options = (props) => (
  <div>
  <h3>Here are your options:</h3>
  <ul>
  {props.optionItems.map(o => <Option key={o} listitem={o} removeOption={props.removeOption} />)}
  </ul>
  </div>
);

const Option = (props) => (<li>
      {props.listitem}
      <button onClick={e => props.removeOption(props.listitem)}>x</button>
    </li>)

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
    e.target.elements.option.value = ''
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
    this.removeOption = this.removeOption.bind(this);
    this.state = {
      options: []
    }
  }
  componentDidMount(){
    // fetching data
    const options = JSON.parse(localStorage.getItem('options'));
    if (options){
      this.setState(() => ({options}))
    }
  }
  componentDidUpdate(prevProps, prevState){
    // saving data
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
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
  removeOption(option){
    this.setState((prevState) => ({
      options: prevState.options.filter(o => o != option)
    }));
    
  }
  removeAllOptions(e){
    e.preventDefault();
    this.setState(() => ({
      options: []
    }));
  }

  render(){ 
    return (<div>
      <Header subtitle='Randomize your life!'/>
      <Action showRandomOption = {this.showRandomOption} hasOptions = {this.state.options.length >0} />
      <Options optionItems = {this.state.options}
                removeOption = {this.removeOption}/>
      <AddOption optionItems = {this.state.options} 
                  addOption = {this.addOption}
                  removeAll = {this.removeAllOptions}/>

      </div>
    )}
  }
  ReactDOM.render(<Indecision />, document.getElementById('app'))