import {connect} from 'react-redux';
import {fetch_league,willrenderleague} from '../Action/actions';
import LeagueLink from '../Component/LeagueLink';
 
const mapDispatchToProps=(dispatch,ownProps)=>{
	return {
		onClick:()=>{
            dispatch(willrenderleague())
 			dispatch(fetch_league(ownProps.leaguename));
			  		},
	    id:ownProps.id,
	    className:ownProps.className
	}
}
const League=connect(null,mapDispatchToProps)(LeagueLink);
export default League;