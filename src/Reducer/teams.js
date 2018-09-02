const teams=(state={status:'nofetch2'},action)=>{
	 switch(action.type){

		case'FETCH_START_TEAM':
		return {
			status:'loading_team'
		};
		case'FETCH_SUCCESS_TEAM':
		return {
			...state,
			status:'success_team',
			result:action.result
		};
		case'FETCH_FAILURE_TEAM':
		return {
			status:'failure_team'
		};
		default:{
			return state;
		}

	}
}
export default teams;