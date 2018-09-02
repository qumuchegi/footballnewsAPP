import React from 'react';
import ReactDOM from 'react-dom';
import '../Css/TeamItem.css';

const ClubQueryItem=({time,clubname1,clubname2,result,leaguetype})=>
<div id='ClubQueryItem'>
 <div id='time'>{time}</div>
 <div id='leaguetype'>{leaguetype}</div>
 <div>
 <div id='clubname1'>{clubname1}</div>
 <div id='result'>{result}</div>
 <div id='clubname2'>{clubname2}</div>
 </div>
</div>;
export default ClubQueryItem;