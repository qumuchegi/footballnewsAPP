import React from 'react';
 
const LeagueLink=({onClick,children,id,className})=>{
 	return(
		<div onClick={()=>onClick()} id={id} className={className}>
		<img src={'../img/'+id+'icon.png' } alt={id} id='leagueImg'/>
		{children}
 	    </div>
		)
}
export default LeagueLink;