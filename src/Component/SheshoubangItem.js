import React from 'react';
import ReactDOM from 'react-dom';
import '../Css/SheshouItem.css';

const SheshoubangItem=({paiming,playername,goalsnumber,clubname})=>
<tr className='SheshoubangItem'>
 <td id='paiming'>{paiming}</td>
 <td id='playername'>{playername}</td>
 <td id='goalsnumber'>{goalsnumber}</td>
 <td id='clubname'>{clubname}</td>
</tr>

export default SheshoubangItem;