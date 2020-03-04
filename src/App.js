import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{

  constructor(){
    super();

    this.state = {
      textInputValue : '',
      textInputLength : 0,
      charArray: []
    }
  }

  onChangeTextInput = (event) => {
    let charArray = event.target.value.split('');
    this.setState({
      textInputValue : event.target.value,
      textInputLength : charArray.length,
      charArray: charArray
    })
  }

  onClickChar = (index) => {
    console.log(index);
    let newCharArray = [...this.state.charArray];
    newCharArray.splice(index,1);
    this.setState({
      charArray : newCharArray,
      textInputValue : newCharArray.join(''),
      textInputLength: newCharArray.length
    })
  }

  render(){
    return (
      <div className="App">
       <input
        value = {this.state.textInputValue}
        onChange = {(event)=> this.onChangeTextInput(event)}
       />
       <p> text length : {this.state.textInputLength}</p>
       <ValidationComponent textInputLength ={this.state.textInputLength}/>
       {this.state.charArray.map((char, index)=>{
          return <CharComponent char = {char} key={index} onClickChar={()=>this.onClickChar(index)}/>
       })}
      </div>
    );
  }
 
}

const ValidationComponent = ({textInputLength}) => {
  let validationMessage = '';
  if(textInputLength < 5) {
    validationMessage = 'Text Too short';
  }
  else {
    validationMessage = 'Text long enough';
  }
  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  )
}

const CharComponent = ({char , onClickChar}) => {
  return (
    <div className='Char-component' onClick={onClickChar}>
      <p>{char}</p>
    </div>
  )
}

export default App;
