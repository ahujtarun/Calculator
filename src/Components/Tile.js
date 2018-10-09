import React from 'react';
import '../Stylesheets/Tile.css'

export const Tile = ({onTileClicked, text}) => {

    const clicked = (e) => {
        e.preventDefault()
        onTileClicked(e.target.innerText)
    }

     return (
        <button onClick={clicked}>{text}</button>

    )
 }
 

    
