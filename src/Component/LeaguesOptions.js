import React from 'react';
import League from '../Container/League';

const LeaguesOptions=()=>(
	<div id='leaguenav'>
	 <League leaguename='英超' id='yingchao' className='LeaguesOptions'>
	  <span>英超</span>
	 </League>
	 <League leaguename='西甲' id='xijia' className='LeaguesOptions'>
	  <span>西甲</span>
	 </League>
	 <League leaguename='德甲' id='dejia' className='LeaguesOptions'>
	  <span>德甲</span>
	 </League>
	 <League leaguename='意甲' id='yijia' className='LeaguesOptions'>
	  <span>意甲</span>
	 </League>
	 <League leaguename='法甲' id='fajia' className='LeaguesOptions'>
	  <span>法甲</span>
	 </League>
	</div>
)
export default LeaguesOptions;