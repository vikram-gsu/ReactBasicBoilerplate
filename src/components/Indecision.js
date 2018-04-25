import React, {Component} from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

class Indecision extends Component{
  state = {
    options: [],
    selectedOption: undefined
  };
  
  showRandomOption = () => {
    this.setState(() => {
      const randNbr = Math.floor(Math.random() * this.state.options.length);
      return {
        selectedOption: this.state.options[randNbr]
      }
    });
  }

  closeModal = () => {
    this.setState(() => ({
      selectedOption: undefined
    }))
  }
  addOption = (option) => {
    if (option.trim() == ''){
      return 'Please enter a valid value';
    }else if(this.state.options.indexOf(option) != -1){
      return 'This option already exists';
    }

    this.setState(prevState => ({
      options: [...prevState.options, option]
    }))
  }
  removeOption = (option) => {
    this.setState((prevState) => ({
      options: prevState.options.filter(o => o != option)
    }));
    
  }
  removeAllOptions = (e) => {
    e.preventDefault();
    this.setState(() => ({
      options: []
    }));
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

  render(){ 
    return (<div>
      <Header subtitle='Randomize your life!'/>
      <div className="container">
        <Action 
          showRandomOption = {this.showRandomOption} 
          hasOptions = {this.state.options.length >0}  
        />
        <div className="widget">
          <Options 
            optionItems = {this.state.options}
            removeOption = {this.removeOption}
            removeAll = {this.removeAllOptions}
          />
          <AddOption 
            optionItems = {this.state.options} 
            addOption = {this.addOption}
          />
        </div>
      </div>
      <OptionModal 
        selectedOption = {this.state.selectedOption} 
        closeModal= {this.closeModal} 
      />
      </div>
    )}
  }

  export default Indecision;