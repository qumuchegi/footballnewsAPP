import React from 'react';
import ReactDOM from 'react-dom';
import '../Css/JifenbangItem.css';

const JifenbangItem=({paiming,clubname,jifen})=>
 
<tr className='JifenbangItem'>
 <td id='Jifen_paiming'>{paiming}</td>
 <td id='Jifen_clubname'>{clubname}</td>
 <td id='Jifen_jifen'>{jifen}</td>
</tr>
 
export default JifenbangItem;