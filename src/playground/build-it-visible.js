class VisibilityToggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visibility: true
    }
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility(){
    this.setState(prevState => ({
      visibility: !prevState.visibility
    }));
  }
  render(){
    return (
      <div>
        <button onClick={this.toggleVisibility}>Toggle Visibility</button>
        {this.state.visibility && 'Contents you would like to hide'}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();
