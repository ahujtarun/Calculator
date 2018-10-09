import React from 'react';
import {Tile} from './Tile';

export const TileGrid = () => (
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
)