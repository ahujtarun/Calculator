import React, { Component } from 'react';
import {Tile} from './Components/Tile';
//import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

//import {Component} from 'react'

class App extends Component {
    render(){
        return (
            <div class="mainPanel">
                <div class="topPanel">
                    <input type="text" value="0"/>
                </div>
                <div class="bottomPanel">
                    <table width="100%">                            
                        <tr>
                            <td width="25%"><Tile text="7"/></td>
                            <td width="25%"><Tile text="8"/></td>
                            <td width="25%"><Tile text="9"/></td>
                            <td width="25%"><Tile text="/"/></td>
                        </tr>
                        <tr>
                            <td><Tile text="4"/></td>
                            <td><Tile text="5"/></td>
                            <td><Tile text="6"/></td>
                            <td><Tile text="*"/></td>
                        </tr>
                        <tr>
                            <td><Tile text="1"/></td>
                            <td><Tile text="2"/></td>
                            <td><Tile text="3"/></td>
                            <td><Tile text="-"/></td>
                        </tr>
                        <tr>
                            <td><Tile text="0"/></td>
                            <td><Tile text="."/></td>
                            <td><Tile text="="/></td>
                            <td><Tile text="+"/></td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default App;
