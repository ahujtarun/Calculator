import React, { Component } from 'react';
import {TileGrid} from './Components/TileGrid';
//import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
        super()
        this.processOperator = this.processOperator.bind(this)
    }

    processOperator(value) {
        var mainDisplay = document.getElementById('maindisplay')
        mainDisplay.value == "0" ?  mainDisplay.value = value : mainDisplay.value += value
    }

    render(){
        return (
            <div className="mainPanel">
                <div className="topPanel">
                    <label>2 * 34</label>
                    <input id="maindisplay" value="0"/> 
                </div>
                <div className="bottomPanel">
                    <TileGrid onTileClicked={this.processOperator}/>
                </div>
            </div>
        )
    }
}

export default App;
