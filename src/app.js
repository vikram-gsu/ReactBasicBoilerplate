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
    )}}
    
    class AddOption extends React.Component {
      render(){
        return (
          <div>
          <form>
          <input type="text"></input>
          <button>Add Option</button>
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
          <AddOption />
          </div>
        )}
      }
      ReactDOM.render(<Indecision />, document.getElementById('app'))