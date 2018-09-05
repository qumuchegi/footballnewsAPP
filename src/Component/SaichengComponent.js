import React from 'react';
import SaichengItem from './SaichengItem';

const SaichengComponent=({saichengInf,leaguekey,last})=>{ 
	let i=0;
	return (
		<div>
		 <div>{leaguekey}{last}>>></div>
		{saichengInf.map(Item=>
			<SaichengItem 
			  key={i++}
			  time={Item.c2+Item.c3} 
			  clubname1={Item.c4T1} 
			  clubname2={Item.c4T2} 
 			  result={Item.c4R}
 			  ifend={Item.c1==='已结束'?'已结束':'无直播'}
			  />)}
		</div>
		)


}
 export default SaichengComponent;
//混合组件