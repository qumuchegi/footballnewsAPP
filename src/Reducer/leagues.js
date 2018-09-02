const leagues=(state={status:'nofetch1'},action)=>{
	switch(action.type){

		case'FETCH_START':
		return {
			status:'loading'
		};
		case'FETCH_SUCCESS':
		return {
			...state,
			status:'success',
			result:action.result
		};
		case'FETCH_FAILURE':
		return {
			status:'failure'
		};
		default:{
			return  state
		}

	}

}
export default leagues;