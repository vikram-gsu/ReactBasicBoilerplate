import React, {Component} from 'react';

export default class AddOption extends Component {
  state = {
    error: undefined
  };
  
  addOption = (e) => {
    e.preventDefault()
    const error = this.props.addOption(e.target.elements.option.value)
    this.setState(()=> ({error}))
    e.target.elements.option.value = ''
  }
  render(){
    return (
      <div >
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.addOption}>
            <input className="add-option__input" type="text" name="option"></input>
            <button className="button">Add Option</button>
        </form>
      </div>
    )
  }
}