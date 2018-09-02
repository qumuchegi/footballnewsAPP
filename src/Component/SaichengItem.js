import React from 'react';
import ReactDOM from 'react-dom';
import '../Css/SaichengItem.css';
import {fetch_team} from '../Action/actions';
import {connect} from 'react-redux';

const SaichengItem=({time,clubname1,clubname2,result,ifend})=>
<div class='SaichengItem'>
 <div id='Saicheng_ifend'>{ifend}</div>
 <div id='Saicheng_time'>{time}</div>
 <div id='Saicheng_clubname1' /*onClick={dispatch(fetch_team(clubname1))}*/>{clubname1}</div>
 <div id='Saicheng_result'>{result}</div>
 <div id='Saicheng_clubname2' /*onClick={dispatch(fetch_team(clubname2))}*/>{clubname2}</div>

</div>
 export default SaichengItem;

//混合组件