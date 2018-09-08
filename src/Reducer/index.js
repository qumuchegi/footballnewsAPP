import {combineReducers} from 'redux';
import leagues from './leagues';
import teams from './teams';
import renderingType from './renderingType';

const footballAPP=combineReducers({
	leagues,
	teams,
	renderingType
 });
export default footballAPP;
