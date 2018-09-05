import React from 'react';
import SheshoubangItem from './SheshoubangItem';
 
const SheshoubangComponent=({sheshouInf,leaguekey})=>{ 
	let i=0;
	return (
		<table id='SheshoubangComponent'>
		 <div>{leaguekey}射手榜</div>
		 <tr>
		  <td>排名</td>
		  <td>球员</td>
		  <td>进球</td>
		  <td>所属俱乐部</td>
		 </tr>
		{sheshouInf.map(Item=>
			<SheshoubangItem 
 			  key={i++}
			  paiming={Item.c1} 
			  playername={Item.c2}
			  goalsnumber={Item.c4}
			  clubname={Item.c3} 
 			  />)}
		</table>
		)


}

export default SheshoubangComponent;
