import React from 'react';
import Header from './Container/Header';
import LeaguesOptions from './Component/LeaguesOptions';
import LeagueTabs_container from './Container/LeagueTabs_container';
import Team from './Container/Team';
import {connect} from 'react-redux';
 

const App=({status})=>{
		return(
		<div>
      
		  <Header/>
		  <hr/>
		  <LeaguesOptions />
 		  <div id='Right'>
		  {status==='willRender_league'?
		   (<div><LeagueTabs_container/><div id='Rightcontent'></div></div>): null
		  }
		   {status==='willRender_team'?
		  <div id='Rightcontent'><Team/></div>:null
		   }
		   {status==='initional'?
		   <div style={{color:'rgba(112,34,123,0.9)'}}>简单的React/Redux webAPP.
			这是2.0版的足球查询web应用。比1.0版多了用redux管理数据。
			<p>
		   1使用的库和框架：使用 Reactjs构建组件、 Redux管理数据、 Fetch前端请求数据、
		    Express+superAgent后端跨域中转、 Redux-thunk异步请求中间件
		    2 数据来源：聚合数据免费API
			</p></div>:null}
		  </div>
		</div>
		)
}
const mapStateToProps=state=>{
	return{
		status:state.renderingType.status
	}
}
const APP=connect(mapStateToProps)(App);
export default APP;
