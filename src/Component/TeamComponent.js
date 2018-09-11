import React from 'react';
import ClubQueryItem from './TeamItem';

const ClubQueryComponent=({ClubsInf,Clubname})=>{
	let i=0;
	return (
		<div>
	 <div>{Clubname}查询结果</div>
  	     	{ClubsInf.map(Item=>
			<ClubQueryItem 
 			  key={i++}
			  time={Item.c2+' '+Item.c3} 
			  clubname1={Item.c4T1} 
			  clubname2={Item.c4T2} 
			  result={Item.c4R}
			  leaguetype={Item.c1}
			  keyteam={Clubname}
			  />)
			}
		</div>
		)


}
export default ClubQueryComponent;