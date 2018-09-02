import React from 'react';
import ReactDOM from 'react-dom';
import ClubQueryItem from './TeamItem';

const ClubQueryComponent=({ClubsInf})=>{
	let i=0;
	return (
		<div>
	 <div></div>
  	     	{ClubsInf.map(Item=>
			<ClubQueryItem 
 			  key={i++}
			  time={Item.c2+' '+Item.c3} 
			  clubname1={Item.c4T1} 
			  clubname2={Item.c4T2} 
			  result={Item.c4R}
			  leaguetype={Item.c1}
			  />)
			}
		</div>
		)


}
export default ClubQueryComponent;