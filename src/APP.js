import React, { Component } from 'react';
import Header from './Container/Header';
import LeaguesOptions from './Component/LeaguesOptions';
import LeagueTabs_container from './Container/LeagueTabs_container';
import Team from './Container/Team';

class APP extends Component{
	render(){
		return(
		<div>
		  <Header/>
		  <hr/>
		  <LeaguesOptions />
		  <div id='Right'>
		   <LeagueTabs_container/>
		   <div id='Rightcontent'>
		    <Team/>
		   </div>
		  </div>
		</div>
		)
	}
}
export default APP;
