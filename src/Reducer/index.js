import {combineReducers} from 'redux';
import leagues from './leagues';
import teams from './teams';
 
const footballAPP=combineReducers({
	leagues,
	teams,
 });
export default footballAPP;
