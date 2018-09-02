import React from 'react';
import Proptypes from 'prop-types';
 
const LeagueLink=({onClick,children,id,className})=>{
	let leagueImg_key=id;
	return(
		<div onClick={()=>onClick()} id={id} className={className}>
		<img src={'../img/'+id+'icon.png'} id='leagueImg'/>
		{children}
 	    </div>
		)
}
export default LeagueLink;