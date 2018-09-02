import {connect} from 'react-redux';
import {fetch_league} from '../Action/actions';
import LeagueLink from '../Component/LeagueLink';
import React from 'react';
import ReactDOM from 'react-dom';
 
const mapDispatchToProps=(dispatch,ownProps)=>{
	return {
		onClick:()=>{
 			dispatch(fetch_league(ownProps.leaguename));
			  		},
	    id:ownProps.id,
	    className:ownProps.className
	}
}
const League=connect(null,mapDispatchToProps)(LeagueLink);
export default League;