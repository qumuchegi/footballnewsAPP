import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import '../Css/LeagueTabs.css';
//需要引入对应赛程、射手、积分的组件
 
const LeagueTABS=({status,leagues,onClick_saicheng,onClick_sheshou,onClick_jifen})=>{//传入联赛信息
	switch(status){
		case'loading':return (<div>loading……</div>);
	    case'success':{ 
	    	if(leagues.error_code==10012) return(<div>超过每日可允许请求次数</div>)
		  return (
	      <div id={leagues.result.key}> 
	      <div onClick={
	 	  ()=>{
	 	  onClick_saicheng(
	 		leagues.result.views.saicheng3===null?
	 		(leagues.result.views.saicheng2===null?
	 			leagues.result.views.saicheng1:
	 			leagues.result.views.saicheng2)
	 		:
	 		(leagues.result.views.saicheng3)
	 		,
	        leagues.result.key,
	        (leagues.result.views.saicheng3==null)?
	    	  (leagues.result.tabs.saicheng2==null?
	    		leagues.result.tabs.saicheng1:
	    		leagues.result.tabs.saicheng2):
	    	     (leagues.result.tabs.saicheng3) 
	    	  	     )
	    	  	 }
	    	  	     
	       } id='saichenglink'>赛程榜</div>

	      <div onClick={
	 	  ()=>
	 	  onClick_sheshou(
	 			 leagues.result.views.sheshoubang,
	 			 leagues.result.key
	 			 )
	       } id='sheshoulink'>射手榜</div>

	       <div onClick={
	 	   ()=>
	 	    onClick_jifen(
	 		leagues.result.views.jifenbang,
	 		leagues.result.key)
	 	    } id='jifenlink'>积分榜</div>

	        </div>
	        );};
	        case'failure':return (<div>failure</div>);
	        default:return(<div></div>)
	        }
	
        }
const mapStateToProps=state=>{
	let leagues=state.leagues;
	return{
		status:leagues.status,
		leagues:leagues.result
	}
}
const LeagueTabs=connect(mapStateToProps)(LeagueTABS)
export default LeagueTabs;