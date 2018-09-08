import fetch from 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import SaichengComponent from '../Component/SaichengComponent';
import SheshoubangComponent from '../Component/SheshoubangComponent';
import JifenbangComponent from '../Component/JifenbangComponent';
import ClubQueryComponent from '../Component/TeamComponent';

export const fetch_start=()=>({
  type:'FETCH_START'

})
export const fetch_start_team=()=>({
  type:'FETCH_START_TEAM'

})
export const fetch_success=(fetchresult)=>({
  type:'FETCH_SUCCESS',
  result:fetchresult
})
export const fetch_success_team=(fetchresult)=>({
  type:'FETCH_SUCCESS_TEAM',
  result:fetchresult
})
export const fetch_failure=()=>({
  type:'FETCH_FAILURE'

})
export const fetch_failure_team=()=>({
  type:'FETCH_FAILURE_TEAM'

})

////////
export const willrenderteam=()=>({
  type:'RENDER_TEAM'
})
export const willrenderleague=()=>({
  type:'RENDER_LEAGUE'
})
//////以下三个render都不是action，因为如果当做action来用的话，在用dispatch来调用的时候就会出错
//dispatch只能在异步分发action的时候才能调用action，而这几个都不是异步。不过这些但功能相当于action
export const renderteam=(ClubsInf)=>{
   ReactDOM.render(
    <ClubQueryComponent
    ClubsInf={ClubsInf}
    />,
    document.getElementById('Rightcontent')
    )
}
export const rendersaicheng=(saicheng,leaguekey,last)=>{
 
  ReactDOM.render(
    <SaichengComponent 
    saichengInf={saicheng}
    leaguekey={leaguekey}
    last={last}/>,
    document.getElementById('Rightcontent')
    )
}
export const rendersheshou=(sheshou,key)=>{

  ReactDOM.render(
    <SheshoubangComponent
    sheshouInf={sheshou}
    leaguekey={key}/>
    ,document.getElementById('Rightcontent')
    
)
///////////////////////

}
export const renderjifen=(jifen,key)=>{

  ReactDOM.render(
    <JifenbangComponent
    jifenInf={jifen}
    leaguekey={key}
    />,
    document.getElementById('Rightcontent')
    )

}
export const fetch_league=leagueName=>{//异步请求联赛的Action对象
	 return (dispatch)=>{
 	 	var url='http://localhost:3001/league?dtype=&league='+
	 	encodeURI(leagueName)+'&key=b117a5992d33a7f05413a7a4349d7b78';//API请求根URL,应该请求代理服务器
        dispatch(fetch_start());

         return fetch(url).then(
     	   (response)=>{ 
            if (response.status !== 200) {
                alert( response.status);
              };
            if (response.status=== 200)
 
           response.json().then(
      	    (responseJSON)=>{ 
      	    dispatch(fetch_success(responseJSON))}
      	   );
	 }
	 )
	}
}
export const fetch_team=teamName=>{//异步请求球队的Action对象
	return (dispatch)=>{
  	 	var url='http://localhost:3001/team?dtype=&team='+
	 	encodeURI(teamName)+'&key=b117a5992d33a7f05413a7a4349d7b78';//API请求根URL,应该请求代理服务器
        dispatch(fetch_start_team());
        return fetch(url).then(
     	   (response)=>{
            if (response.status !== 200) {
                alert(response.status);
              };
           response.json().then(
      	    (responseJSON)=>
      	    dispatch(fetch_success_team(responseJSON))
      	   );
       }
        )
	} 
}
