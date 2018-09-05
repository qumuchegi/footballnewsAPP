import {connect} from 'react-redux';
import React from 'react';
import {renderteam} from '../Action/actions';

const TEAM=({status,teams})=>{
	switch(status){
		case'loading_team':return (<div>Loading……</div>);
		case'success_team':
        if(teams.error_code===10012) return(<div>超过每日可允许请求次数</div>);
         if(teams.error_code===209005) return(<div>查询不到队伍相关信息</div>);
 		renderteam(teams.result.list);
		case'failure_team':return (<div>Failure!</div>);
		default:return(<div></div>)
		}
}

const mapStateToProps=(state)=>{    
	return{
     status:state.teams.status,
     teams:state.teams.result
	}
}

const Team=connect(mapStateToProps)(TEAM);
export default Team;
