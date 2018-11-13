import React from 'react';
import '../Stylesheets/Tile.css'

export const Tile = ({onTileClicked, text, isOperator}) => {

    const clicked = (e) => {
        e.preventDefault()

        if(onTileClicked) {
            onTileClicked(e.target.innerText, isOperator)
        }
    }

     return (
        <button onClick={clicked}>{text}</button>

    )
 }
 

    
