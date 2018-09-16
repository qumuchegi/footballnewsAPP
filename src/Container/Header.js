import React from 'react';
import {connect} from 'react-redux';
import {fetch_team,willrenderteam} from '../Action/actions';

let Header=({dispatch})=>{
	let clickToqueryTeam=inputTeam=>{
	dispatch(willrenderteam());
   	dispatch(fetch_team(inputTeam))
};
     let inputvalue='巴塞罗那';
     let inputchange=e=>{
        inputvalue=e.target.value||'巴塞罗那';
    }
	 let clearinput=()=>{
		inputvalue='巴塞罗那';
		this.input.value=null;
		 }
	return (
		<div id="header">
		 <h1>足球查询web</h1>
		 <div id='inputandbutton'>
		 <input onChange={inputchange} ref={(input)=>{this.input=input}} placeholder="巴塞罗那"/>
		 <button onClick={()=>clickToqueryTeam(inputvalue)}>查询</button>
		 <button onClick={()=>clearinput()}>清空</button>
		 </div>
		</div>
		)
}
Header=connect()(Header);
export default Header;