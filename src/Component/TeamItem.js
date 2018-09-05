import React from 'react';
import '../Css/TeamItem.css';

const ClubQueryItem=({time,clubname1,clubname2,result,leaguetype})=>
<div id='ClubQueryItem'>
 <div id='time'>{time}</div>
 <div id='leaguetype'>{leaguetype}</div>
 <div>
 <div id='clubname1'><span style={{color:'red',fontSize:'60%'}}>主队</span>{'  '}{clubname1}</div>
 <div id='result'>{result}</div>
 <div id='clubname2'><span style={{color:'red',fontSize:'60%'}}>客队</span>{'  '}{clubname2}</div>
 </div>
</div>;
export default ClubQueryItem;