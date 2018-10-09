import React from 'react';
import {Tile} from './Tile';

export const TileGrid = ({onTileClicked}) => (
    <table width="100%">                            
    <tr>
        <td><Tile onTileClicked={onTileClicked} text="7"/></td>
        <td><Tile onTileClicked={onTileClicked} text="8"/></td>
        <td><Tile onTileClicked={onTileClicked} text="9"/></td>
        <td><Tile onTileClicked={onTileClicked} text="/"/></td>
    </tr>
    <tr>
        <td><Tile onTileClicked={onTileClicked} text="4"/></td>
        <td><Tile onTileClicked={onTileClicked} text="5"/></td>
        <td><Tile onTileClicked={onTileClicked} text="6"/></td>
        <td><Tile onTileClicked={onTileClicked} text="*"/></td>
    </tr>
    <tr>
        <td><Tile onTileClicked={onTileClicked} text="1"/></td>
        <td><Tile onTileClicked={onTileClicked} text="2"/></td>
        <td><Tile onTileClicked={onTileClicked} text="3"/></td>
        <td><Tile onTileClicked={onTileClicked} text="-"/></td>
    </tr>
    <tr>
        <td><Tile onTileClicked={onTileClicked} text="0"/></td>
        <td><Tile onTileClicked={onTileClicked} text="."/></td>
        <td><Tile onTileClicked={onTileClicked} text="="/></td>
        <td><Tile onTileClicked={onTileClicked} text="+"/></td>
    </tr>
</table>
)