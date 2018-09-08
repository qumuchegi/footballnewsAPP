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
