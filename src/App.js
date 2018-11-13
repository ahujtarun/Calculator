import React, { Component } from 'react';
import {TileGrid} from './Components/TileGrid';
//import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props)
        this.processOperator = this.processOperator.bind(this)
        this.calculate = this.calculate.bind(this)
        this.state = {
            operand1: null,
            operand2: null,
            operator: null,
            result: 0,
            displayValue: "0",
            expression: "",
            resetDisplay: false
        }
    }

    processOperator(value, isOperator) {
        
        var currentState = this.state;

       if(currentState.operand1 && currentState.operand2 && currentState.operator) {
            currentState.expression +=  currentState.operand2 
            this.calculate();
       }

       if(isOperator) {
            currentState.operator = value        
            currentState.resetDisplay = true
            currentState.operand1 = !currentState.operand1 ? currentState.displayValue : currentState.operand1
            currentState.expression += currentState.expression == "" ? currentState.operand1 + value : value
            
       } else {
            currentState.displayValue =  currentState.displayValue == "0" || currentState.resetDisplay ? value : currentState.displayValue + value
            currentState.operand2 = currentState.operand1 ? currentState.displayValue : currentState.operand2
            currentState.resetDisplay = false;
       }
       
       this.setState({currentState})
    }

    calculate() {

        var currentState = this.state;
        var result = 0

        switch(currentState.operator){
            case "+":{
                currentState.displayValue = parseInt(currentState.operand1) + parseInt(currentState.operand2)
                break;
            }
            case "-":{
                currentState.displayValue = parseInt(currentState.operand1) - parseInt(currentState.operand2)
            }
            case "*":{
                currentState.displayValue = parseInt(currentState.operand1) * parseInt(currentState.operand2)
            }
            case "/":{
                currentState.displayValue = parseInt(currentState.operand1) / parseInt(currentState.operand2)
            }
        }

        currentState.operand1 = null
        currentState.operand2 = null
      
        this.setState({currentState})
    }

    render(){
        return (
            <div className="mainPanel">
                <div className="topPanel">
                    <label>{this.state.expression}</label>
                    <input id="maindisplay" value={this.state.displayValue}/> 
                </div>
                <div className="bottomPanel">
                    <TileGrid onTileClicked={this.processOperator}/>
                </div>
            </div>
        )
    }
}

export default App;
