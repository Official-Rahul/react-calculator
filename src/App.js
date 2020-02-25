import React, { Component } from 'react';
import './App.css';
import { evaluate } from "mathjs";

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      expression:''
    }
  }

  input=(num)=>{
    let newExpression=this.state.expression+num;
    this.setState({
      expression:newExpression
    })
  }

  blank=()=>{
    this.setState({
      expression:''
    })
  }

  calculate=()=>{
    let result=evaluate(this.state.expression);
    let newExpression=this.state.expression+'\n='+result;
    this.setState({
      expression:newExpression
    })
  }

  onChangeHandler=(e)=>{
    this.setState({
      expression:e.textarea.value
    })
  }

  render() {
    return (
      <div className="calculator">
        <div className="input">
            <div className="row">
                <textarea name="" id="inputArea" cols="30" rows="10" value={this.state.expression} onChange={()=>this.onChangeHandler()}></textarea>
            </div>
        </div>
        <div className="button">
            <div className="row">
                <div className="col" onClick={()=>this.input('1')}>1</div>
                <div className="col" onClick={()=>this.input('4')}>4</div>
                <div className="col" onClick={()=>this.input('7')}>7</div>
                <div className="col" onClick={()=>this.blank()}>c</div>
            </div>
            <div className="row">
                <div className="col" onClick={()=>this.input('2')}>2</div>
                <div className="col" onClick={()=>this.input('5')}>5</div>
                <div className="col" onClick={()=>this.input('8')}>8</div>
                <div className="col" onClick={()=>this.input('0')}>0</div>
            </div>
            <div className="row">
                <div className="col" onClick={()=>this.input('3')}>3</div>
                <div className="col" onClick={()=>this.input('6')}>6</div>
                <div className="col" onClick={()=>this.input('9')}>9</div>
                <div className="col" onClick={()=>this.calculate()}>=</div>
            </div>
            <div className="row">
                <div className="col" onClick={()=>this.input('+')}>+</div>
                <div className="col" onClick={()=>this.input('-')}>-</div>
                <div className="col" onClick={()=>this.input('*')}>*</div>
                <div className="col" onClick={()=>this.input('/')}>/</div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
