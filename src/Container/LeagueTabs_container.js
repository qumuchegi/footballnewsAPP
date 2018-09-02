import LeagueTabs from './LeagueTabs';
import {connect} from 'react-redux';
import {rendersaicheng,rendersheshou,renderjifen} from '../Action/actions';


const mapStateToProps=state=>{
	return {
		leagues:state.leagues
		}
}
const mapDispatchToProps=()=>{
	return {
		onClick_saicheng:(saicheng,leaguekey,last)=>{ 
			rendersaicheng(saicheng,leaguekey,last)
		},
		
		onClick_sheshou:(sheshou,key)=>{
			rendersheshou(sheshou,key)

		},

		onClick_jifen:(jifen,key)=>{
			renderjifen(jifen,key)

		}
	}
}
const LeagueTabs_container=connect(
	mapStateToProps,mapDispatchToProps
	)(LeagueTabs);
export default LeagueTabs_container;