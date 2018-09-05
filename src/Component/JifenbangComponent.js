import React from 'react';
import JifenbangItem from './JifenbangItem';
 
 
 const JifenbangComponent=({jifenInf,leaguekey})=>{ 
	let i=0;
	return (
		<table>
		 <div>{leaguekey}积分榜</div>
		 <tr>
		  <td>排名</td>
		  <td>俱乐部</td>
		  <td>积分</td>
		 </tr>
		{jifenInf.map(Item=>
			 
			<JifenbangItem 
			  key={i++}
			  paiming={Item.c1} 
			  clubname={Item.c2} 
 			  jifen={Item.c6}
			  />)}
		</table>
		)


}

export default JifenbangComponent;